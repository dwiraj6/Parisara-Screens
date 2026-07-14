import sharp from 'sharp'
import { readdir, stat, rename, unlink } from 'node:fs/promises'
import { existsSync } from 'node:fs'
import path from 'node:path'

const ROOT = 'C:/PD/Parisara Screens/public'

const kb = (n) => (n / 1024).toFixed(0) + ' KB'

async function sizeOf(p) {
  return (await stat(p)).size
}

// Compress a photo to a max width as JPEG, replacing the original file in place
// (keeps the same filename/extension so no code changes are needed — except we
// handle .png->.jpg separately below).
async function toJpeg(src, out, maxW, quality) {
  await sharp(src)
    .rotate() // respect EXIF orientation
    .resize({ width: maxW, withoutEnlargement: true })
    .jpeg({ quality, mozjpeg: true })
    .toFile(out)
}

async function toPng(src, out, maxW) {
  await sharp(src)
    .resize({ width: maxW, withoutEnlargement: true })
    .png({ compressionLevel: 9, palette: true })
    .toFile(out)
}

const results = []

// ---- hero.png -> hero.jpg (big, but a photo; JPEG is far smaller) ----
{
  const src = path.join(ROOT, 'hero.png')
  if (existsSync(src)) {
    const before = await sizeOf(src)
    const out = path.join(ROOT, 'hero.jpg')
    await toJpeg(src, out, 1920, 80)
    const after = await sizeOf(out)
    results.push(['hero.png', before, 'hero.jpg', after])
  }
}

// ---- logo.png -> optimized PNG (keep transparency) ----
{
  const src = path.join(ROOT, 'logo.png')
  if (existsSync(src)) {
    const before = await sizeOf(src)
    const tmp = path.join(ROOT, 'logo.opt.png')
    await toPng(src, tmp, 400)
    await unlink(src)
    await rename(tmp, src)
    const after = await sizeOf(src)
    results.push(['logo.png', before, 'logo.png', after])
  }
}

// ---- home photos -> .jpg ----
const homeDir = path.join(ROOT, 'home')
const files = await readdir(homeDir)
for (const f of files) {
  const src = path.join(homeDir, f)
  const ext = path.extname(f).toLowerCase()
  if (!['.png', '.jpg', '.jpeg'].includes(ext)) continue
  const base = path.basename(f, ext)
  const before = await sizeOf(src)
  const out = path.join(homeDir, base + '.jpg')
  await toJpeg(src, out, 900, 78)
  const after = await sizeOf(out)
  // Remove the original if it wasn't already the .jpg we just wrote
  if (path.basename(src) !== base + '.jpg') await unlink(src)
  results.push(['home/' + f, before, 'home/' + base + '.jpg', after])
}

let tb = 0
let ta = 0
console.log('\n%-22s %10s -> %-22s %10s  saved', 'FROM', 'BEFORE', 'TO', 'AFTER')
for (const [from, b, to, a] of results) {
  tb += b
  ta += a
  console.log(
    '%-22s %10s -> %-22s %10s  %s%%',
    from,
    kb(b),
    to,
    kb(a),
    (100 - (a / b) * 100).toFixed(0),
  )
}
console.log('\nTOTAL  %s -> %s  (%s%% smaller)', kb(tb), kb(ta), (100 - (ta / tb) * 100).toFixed(0))
