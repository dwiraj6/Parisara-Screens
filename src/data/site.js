// Central source of truth for all business details & content.
// Swap placeholder images/prices here — see PLACEHOLDERS.md.

export const business = {
  name: 'Parisara Screens',
  tagline: 'The Print People',
  yearsBadge: '25+ Years of Trusted Printing',
  yearsShort: '25+ Years',
  phoneDisplay: '94480 16742',
  phoneTel: '+919448016742',
  whatsappNumber: '919448016742',
  address: '#165, 5th Main, 5th Cross, Near Axis Bank, Chamrajpet, Bengaluru – 560018',
  addressShort: 'Chamrajpet, Bengaluru – 560018',
  hours: 'Mon–Sat, 10:00 AM – 6:00 PM',
  hoursNote: 'Sunday Closed',
  serviceArea: 'Serving customers all over India',
  mapsShareLink: 'https://share.google/rCIWbXsQDToivVGgX',
  // Keyless embed via query — swap for a place-ID embed if you have one.
  mapsEmbed:
    'https://www.google.com/maps?q=Parisara%20Screens%2C%20165%205th%20Main%205th%20Cross%20Chamrajpet%20Bengaluru%20560018&output=embed',
  // Add real handles once created — see PLACEHOLDERS.md
  socials: {
    instagram: '',
    facebook: '',
  },
}

// Build a wa.me link with a pre-filled message.
export const wa = (message) =>
  `https://wa.me/${business.whatsappNumber}${message ? `?text=${encodeURIComponent(message)}` : ''}`

// Reliable placeholder image (swap with Google-hosted photos later).
const ph = (seed, w = 800, h = 600) => `https://picsum.photos/seed/${seed}/${w}/${h}`

export const services = [
  {
    slug: 'wedding-cards',
    name: 'Wedding Cards',
    short: 'Traditional & modern invitations',
    description:
      'Handcrafted wedding invitations — from classic Kannada & Sanskrit layouts to contemporary designs, with foiling, embossing and premium paper stocks.',
    priceFrom: '₹—', // TODO: real starting price
    image: '/services/wedding.jpg',
  },
  {
    slug: 'visiting-cards',
    name: 'Visiting Cards',
    short: 'Business & personal cards',
    description:
      'Crisp business cards on a range of stocks and finishes — matte, gloss, textured and spot-UV. Fast turnaround for bulk orders.',
    priceFrom: '₹—',
    image: '/services/visiting.jpg',
  },
  {
    slug: 'letterheads',
    name: 'Letterheads',
    short: 'Professional stationery',
    description:
      'Company letterheads printed with sharp registration and consistent brand colours. Single or multi-colour, on premium bond paper.',
    priceFrom: '₹—',
    image: '/services/letter.jpg',
  },
  {
    slug: 'bill-books',
    name: 'Invoices / Bill Books',
    short: 'Duplicate & triplicate books',
    description:
      'Numbered invoice and bill books — duplicate/triplicate carbonless (NCR) sets, GST-ready formats, bound and perforated.',
    priceFrom: '₹—',
    image: '/services/billbook.jpg',
  },
  {
    slug: 'brochures-flyers',
    name: 'Brochures / Flyers',
    short: 'Marketing collateral',
    description:
      'Single and multi-fold brochures, flyers and leaflets — vibrant full-colour printing that makes your business stand out.',
    priceFrom: '₹—',
    image: '/services/flyers.jpg',
  },
  {
    slug: 'stickers-labels',
    name: 'Stickers / Labels',
    short: 'Product & brand labels',
    description:
      'Custom-cut stickers and product labels — glossy, matte, transparent and vinyl, in any shape or size.',
    priceFrom: '₹—',
    image: '/services/label.jpg',
  },
  {
    slug: 'custom',
    name: 'Others / Custom',
    short: "Anything you can print",
    description:
      "Envelopes, ID cards, calendars, certificates, menu cards and more. If it can be printed, we can help — just tell us what you need.",
    priceFrom: '₹—',
    image: '/services/others.jpg',
  },
]

export const galleryCategories = [
  { key: 'all', label: 'All Work' },
  { key: 'wedding', label: 'Wedding Cards' },
  { key: 'visiting', label: 'Visiting Cards' },
  { key: 'letterhead', label: 'Letterheads' },
  { key: 'others', label: 'Others' },
]

// TODO: replace with real photos — see PLACEHOLDERS.md
export const galleryItems = [
  { id: 'wedding-01', category: 'wedding', alt: 'Traditional wedding invitation card', src: ph('gal-wedding-1') },
  { id: 'wedding-02', category: 'wedding', alt: 'Foil-stamped wedding card', src: ph('gal-wedding-2') },
  { id: 'wedding-03', category: 'wedding', alt: 'Modern minimalist wedding invite', src: ph('gal-wedding-3') },
  { id: 'visiting-01', category: 'visiting', alt: 'Matte-finish business card', src: ph('gal-visiting-1') },
  { id: 'visiting-02', category: 'visiting', alt: 'Spot-UV visiting card', src: ph('gal-visiting-2') },
  { id: 'letterhead-01', category: 'letterhead', alt: 'Corporate letterhead design', src: ph('gal-letter-1') },
  { id: 'letterhead-02', category: 'letterhead', alt: 'Two-colour letterhead', src: ph('gal-letter-2') },
  { id: 'others-01', category: 'others', alt: 'Printed brochure spread', src: ph('gal-other-1') },
  { id: 'others-02', category: 'others', alt: 'Custom sticker sheet', src: ph('gal-other-2') },
  { id: 'others-03', category: 'others', alt: 'Bill book with carbonless copies', src: ph('gal-other-3') },
]

export const testimonials = [
  {
    quote:
      'We have printed our wedding cards and all our shop stationery here for years. Quality and timing are always perfect.',
    name: 'Ramesh K.',
    role: '',
  },
  {
    quote:
      'Best printing shop in the area. They understood exactly what we wanted for our visiting cards and delivered in two days.',
    name: 'Lakshmi S.',
    role: '',
  },
  {
    quote:
      '25 years of experience really shows. Honest pricing and beautiful finish on our brochures.',
    name: 'Imran A.',
    role: '',
  },
]

export const faqs = [
  {
    q: 'What is the minimum order quantity?',
    a: 'It depends on the product — visiting cards and letterheads can be printed in small batches, while wedding cards and bill books have set minimums. Message us on WhatsApp and we will tell you exactly.',
  },
  {
    q: 'How long does printing take?',
    a: 'Most standard jobs (visiting cards, letterheads, bill books) are ready within 2–3 working days. Wedding cards and large jobs depend on the design and finish.',
  },
  {
    q: 'Do you help with design?',
    a: 'Yes. Bring your idea, a rough sketch or a reference and our team will help you finalise the design before printing. You can also send us a ready file.',
  },
  {
    q: 'Can I get a sample before bulk printing?',
    a: 'For most products we can share a proof or sample so you can approve the colours and layout before we run the full order.',
  },
  {
    q: 'Which areas do you serve?',
    a: 'We are based in Chamrajpet, Bengaluru and serve customers all over India. You are welcome to visit the shop or coordinate over WhatsApp, and we can arrange delivery across the country.',
  },
]

export const navLinks = [
  { to: '/', label: 'Home' },
  { to: '/about', label: 'About Us' },
  { to: '/services', label: 'Services' },
  { to: '/gallery', label: 'Gallery' },
  { to: '/contact', label: 'Contact Us' },
]
