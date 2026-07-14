// Site-wide fixed overlays: paper grain + faint corner fold shadows.
export default function PaperTexture() {
  return (
    <div className="pointer-events-none fixed inset-0 z-[8000]" aria-hidden="true">
      {/* Grain */}
      <div className="absolute inset-0 paper-grain opacity-[0.05] mix-blend-multiply" />
      {/* Faint diagonal fold-shadows in far corners only */}
      <div
        className="absolute -left-40 -top-40 h-96 w-96 rotate-45 opacity-40"
        style={{ background: 'radial-gradient(closest-side, rgba(43,33,28,0.10), transparent)' }}
      />
      <div
        className="absolute -bottom-40 -right-40 h-96 w-96 rotate-45 opacity-40"
        style={{ background: 'radial-gradient(closest-side, rgba(43,33,28,0.10), transparent)' }}
      />
    </div>
  )
}
