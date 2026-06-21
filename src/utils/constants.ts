export const SITE = {
  name: 'THE ATELIER',
  tagline: 'Design Studio Café',
  description: 'Where coffee, craftsmanship and spatial design merge into a gallery-quality experience.',
} as const;

export const NAV_LINKS = [
  { label: 'Philosophy', href: '#philosophy' },
  { label: 'Process', href: '#process' },
  { label: 'Menu', href: '#menu' },
  { label: 'Gallery', href: '#gallery' },
  { label: 'Workshop', href: '#workshop' },
  { label: 'Journal', href: '#journal' },
  { label: 'Team', href: '#team' },
  { label: 'Visit', href: '#visit' },
] as const;

export const COFFEE_MENU = [
  {
    name: 'The Blueprint',
    description: 'Single origin Ethiopian pour-over with notes of blueberry and dark chocolate.',
    ingredients: ['Ethiopian Yirgacheffe', 'Filtered Water', 'Paper Filter'],
    price: '6.50',
    category: 'Pour Over',
  },
  {
    name: 'Concrete Latte',
    description: 'Activated charcoal oat milk latte with a velvet microfoam finish.',
    ingredients: ['Double Espresso', 'Oat Milk', 'Activated Charcoal', 'Vanilla'],
    price: '7.00',
    category: 'Signature',
  },
  {
    name: 'The Draft',
    description: 'Cold brew steeped for 24 hours, served with a single large ice cube.',
    ingredients: ['Colombian Cold Brew', 'Filtered Water', 'Hand-Cut Ice'],
    price: '5.50',
    category: 'Cold',
  },
  {
    name: 'Ink Espresso',
    description: 'Our house espresso blend — dark, bold, and architecturally precise.',
    ingredients: ['House Blend Espresso', 'Filtered Water'],
    price: '4.00',
    category: 'Espresso',
  },
  {
    name: 'The Sketch',
    description: 'Matcha latte with ceremonial grade matcha and house-made oat milk.',
    ingredients: ['Ceremonial Matcha', 'Oat Milk', 'Agave'],
    price: '6.00',
    category: 'Alternative',
  },
  {
    name: 'Material Study',
    description: 'Turmeric golden latte with cinnamon, ginger, and black pepper.',
    ingredients: ['Turmeric', 'Cinnamon', 'Ginger', 'Oat Milk', 'Black Pepper'],
    price: '6.50',
    category: 'Wellness',
  },
] as const;

export const MATERIALS = [
  { name: 'Concrete', image: '/images/material-concrete.jpg', texture: 'Raw, unfinished, honest' },
  { name: 'Oak', image: '/images/material-oak.jpg', texture: 'Warm, organic, crafted' },
  { name: 'Steel', image: '/images/material-steel.jpg', texture: 'Precise, industrial, refined' },
  { name: 'Paper', image: '/images/material-paper.jpg', texture: 'Ephemeral, tactile, pure' },
  { name: 'Glass', image: '/images/material-glass.jpg', texture: 'Transparent, luminous, light' },
  { name: 'Copper', image: '/images/material-copper.jpg', texture: 'Aged, patinated, living' },
] as const;

export const TEAM_MEMBERS = [
  {
    name: 'Elena Vasquez',
    role: 'Head Barista & Design Director',
    bio: 'Former architect turned coffee artist. Brings spatial thinking to every extraction.',
  },
  {
    name: 'Marcus Chen',
    role: 'Roast Master',
    bio: 'Fifteen years perfecting the art and science of the perfect roast profile.',
  },
  {
    name: 'Sofia Laurent',
    role: 'Creative Director',
    bio: 'Award-winning designer shaping every touchpoint of The Atelier experience.',
  },
  {
    name: 'James Okafor',
    role: 'Workshop Lead',
    bio: 'Teaches the craft of coffee through hands-on design thinking workshops.',
  },
] as const;

export const JOURNAL_ARTICLES = [
  {
    title: 'The Architecture of Extraction',
    excerpt: 'How spatial design principles shape our brewing methodology.',
    date: 'March 2026',
    category: 'Design',
  },
  {
    title: 'Material Language',
    excerpt: 'Why we chose raw concrete over polished marble for our countertops.',
    date: 'February 2026',
    category: 'Materials',
  },
  {
    title: 'Draft: A Study in Patience',
    excerpt: 'The 24-hour journey from bean to cold brew, documented.',
    date: 'January 2026',
    category: 'Process',
  },
  {
    title: 'Grid Systems in Latte Art',
    excerpt: 'Applying Swiss design principles to the surface of your coffee.',
    date: 'December 2025',
    category: 'Craft',
  },
] as const;
