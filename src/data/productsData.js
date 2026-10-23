export const PRODUCTS = [
  {
    id: 'toilet-cleaner',
    name: 'Clean Go Toilet Cleaner',
    brand: 'Clean Go',
    manufacturer: 'KCN UDYOG',
    categorySlug: 'bathroom',
    categoryLabel: 'Bathroom Care',
    shortDesc: 'Deep-action thick formula that dissolves stubborn limescale, removes hard-water scaling, and delivers long-lasting freshness.',
    heroTagline: 'Powerful cleaning for a germ-free and fresh toilet.',
    heroDesc: 'Clean Go Toilet Cleaner removes tough stains, limescale and keeps your toilet fresh and hygienic. Suitable for homes, offices, hotels and institutions.',
    iconBadges: [
      { label: 'Removes tough stains', icon: 'Sparkles' },
      { label: 'Kills germs', icon: 'ShieldCheck' },
      { label: 'Long lasting freshness', icon: 'Clock' },
      { label: 'Suitable for regular use', icon: 'CheckCircle2' },
    ],
    image: '/images/products/cleango-toilet-cleaner.webp',
    liquidColor: '#1E40AF',
    liquidGradient: 'linear-gradient(180deg, #3B82F6 0%, #1E3A8A 100%)',
    volume: '500ml, 1L & 5L Can',
    availableSizes: ['500 ml', '1 Ltr', '5 Ltr'],
    scent: 'Ocean Fresh Disinfectant',
    scents: ['Ocean Fresh', 'Original Pine'],
    tagline: 'Powerful Cleaning For a Healthier Home',
    features: [
      'Removes stubborn yellow scaling & hard-water stains',
      'Thick clinging formula adheres evenly to ceramic rims & bowls',
      'Eliminates foul restroom odors with ocean freshness',
      'Safe for porcelain, ceramic tiles & sanitary fittings',
    ],
    directions: [
      'Twist cap to open and apply directly under the toilet bowl rim and along stained surfaces.',
      'Allow the thick liquid to cling and spread for 10 to 15 minutes.',
      'Brush lightly across stubborn yellow scale and flush thoroughly with water.',
    ],
    safetyAdvice: [
      'For external household and sanitary cleaning only.',
      'Wear protective gloves if handling concentrated bulk liquid.',
      'Do not mix with bleach or other acidic cleaning agents.',
      'In case of accidental eye contact, rinse immediately with clean water for 15 minutes.',
    ],
    commercialPacks: ['5 Litre'],
    retailPacks: ['500 ml', '1 Litre'],
    targetAudience: 'Hotels, Offices, Malls, Hospitals & Domestic Restrooms',
  },
  {
    id: 'glass-cleaner',
    name: 'Clean Go Glass Cleaner',
    brand: 'Clean Go',
    manufacturer: 'KCN UDYOG',
    categorySlug: 'other-cleaning',
    categoryLabel: 'Glass & Shiny Surfaces',
    shortDesc: 'Professional streak-free glass and mirror cleaner that dissolves fingerprints, film, and dust for sparkling optical clarity.',
    heroTagline: 'Professional streak-free shine for glass and mirrors.',
    heroDesc: 'Clean Go Glass Cleaner dissolves oily fingerprints, dust, and smudges for crystal optical clarity. Suitable for glass facades, tabletops, vehicle windshields and display counters.',
    iconBadges: [
      { label: '100% streak-free finish', icon: 'Sparkles' },
      { label: 'Dissolves oily smudges', icon: 'ShieldCheck' },
      { label: 'Quick-drying action', icon: 'Clock' },
      { label: 'Suitable for mirrors & glass', icon: 'CheckCircle2' },
    ],
    image: '/images/products/cleango-glass-cleaner.webp',
    liquidColor: '#0EA5E9',
    liquidGradient: 'linear-gradient(180deg, #38BDF8 0%, #0369A1 100%)',
    volume: '500ml, 1L & 5L Can',
    availableSizes: ['500 ml', '1 Ltr', '5 Ltr'],
    scent: 'Crisp Ocean Mist',
    scents: ['Ocean Mist', 'Crystal Clear'],
    tagline: 'Powerful Cleaning For a Healthier Home',
    features: [
      'Quick-drying formulation with 100% streak-free finish',
      'Dissolves oily smudges, fingerprints & airborne dust',
      'Leaves glass, mirrors, and chrome fittings crystal clear',
      'Suitable for glass facades, tabletops, vehicle windshields & display counters',
    ],
    directions: [
      'Pour into trigger spray dispenser or dilute 1:1 for large facade wiping.',
      'Spray mist evenly across the glass or mirror surface from 15-20 cm distance.',
      'Wipe off immediately using a clean, dry microfiber cloth or squeegee wiper.',
    ],
    safetyAdvice: [
      'Keep away from heat, sparks, and open flame.',
      'Avoid breathing concentrated mist in unventilated areas.',
      'Store upright in a cool, dry place out of direct sunlight.',
    ],
    commercialPacks: ['5 Litre'],
    retailPacks: ['500 ml', '1 Litre'],
    targetAudience: 'Showrooms, Automobile Detailers, Offices, Hospitality & Residences',
  },
  {
    id: 'handwash',
    name: 'Clean Go Hand Wash',
    brand: 'Clean Go',
    manufacturer: 'KCN UDYOG',
    categorySlug: 'bathroom',
    categoryLabel: 'Everyday Hand Hygiene',
    shortDesc: 'Moisturizing antibacterial hand wash formulated to be soft on hands yet tough on germs with crisp green apple fragrance.',
    heroTagline: 'Soft on hands, tough on germs with rich micro-foam.',
    heroDesc: 'Clean Go Hand Wash creates a rich, velvety micro-foam that cuts grease and food odors quickly. pH-balanced to keep hands nourished even after frequent daily washing.',
    iconBadges: [
      { label: 'Cuts grease & dirt', icon: 'Sparkles' },
      { label: 'Kills 99.9% germs', icon: 'ShieldCheck' },
      { label: 'Rich velvety micro-foam', icon: 'Droplets' },
      { label: 'Suitable for daily hand care', icon: 'CheckCircle2' },
    ],
    image: '/images/products/cleango-hand-wash.webp',
    liquidColor: '#22C55E',
    liquidGradient: 'linear-gradient(180deg, #4ADE80 0%, #15803D 100%)',
    volume: '500ml, 1L & 5L Can',
    availableSizes: ['500 ml', '1 Ltr', '5 Ltr'],
    scent: 'Fresh Green Apple Fragrance',
    scents: ['Fresh Green Apple', 'Soft Rose'],
    tagline: 'Soft on Hands, Tough on Germs',
    features: [
      'Cuts grease, food odors, and sticky residue quickly',
      'Rich, velvety micro-foam that rinses cleanly without slippery film',
      'Balanced pH formula prevents hand dryness even after frequent washing',
      'Invigorating fresh green apple aroma that lingers softly',
    ],
    directions: [
      'Wet hands with clean water and pump a small coin-sized amount onto palms.',
      'Rub hands together vigorously for 20 seconds, covering fingers, nails, and wrists.',
      'Rinse thoroughly under running water and pat dry.',
    ],
    safetyAdvice: [
      'For external hygiene hand washing use only.',
      'Avoid contact with eyes; rinse immediately with cold water if contact occurs.',
      'Store away from direct heat.',
    ],
    commercialPacks: ['5 Litre'],
    retailPacks: ['500 ml', '1 Litre'],
    targetAudience: 'Corporate Restrooms, Clinics, Hospitality Centers & Domestic Washbasins',
  },
  {
    id: 'dishwash',
    name: 'Clean Go Dish Wash Liquid',
    brand: 'Clean Go',
    manufacturer: 'KCN UDYOG',
    categorySlug: 'kitchen',
    categoryLabel: 'Dishwashing Solutions',
    shortDesc: 'Powerful grease-cutting dishwash formulation with fresh lemon fragrance and rapid-rinse rich active foam.',
    heroTagline: 'Powerful grease-cutting action for spotless utensils.',
    heroDesc: 'Clean Go Dish Wash Liquid dissolves burnt oil, heavy ghee, and tough curry stains effortlessly. Leaves glassware and utensils squeaky clean with zero white chalky residue.',
    iconBadges: [
      { label: 'Removes tough grease', icon: 'Flame' },
      { label: 'Rich foam easy rinse', icon: 'Droplets' },
      { label: 'Zero chalky residue', icon: 'Sparkles' },
      { label: 'Suitable for daily cookware', icon: 'CheckCircle2' },
    ],
    image: '/images/products/cleango-dishwash-liquid.webp',
    liquidColor: '#EAB308',
    liquidGradient: 'linear-gradient(180deg, #FDE047 0%, #CA8A04 100%)',
    volume: '500ml, 1L & 5L Can',
    availableSizes: ['500 ml', '1 Ltr', '5 Ltr'],
    scent: 'Fresh Lemon Citrus',
    scents: ['Fresh Lemon', 'Active Lime'],
    tagline: 'Powerful Cleaning For a Healthier Home',
    features: [
      'Dissolves burnt oil, stubborn ghee, and curries effortlessly',
      'High-foaming active formula: 1 spoon cleans an entire sink of utensils',
      'Zero white chalky residue on glassware, steel, or bone china',
      'Skin-friendly formulation safe for everyday dishwashing without drying hands',
    ],
    directions: [
      'Dilute 1 teaspoon (approx 5ml) of dishwash gel in a small bowl of clean water.',
      'Dip scrub sponge into solution and apply gently onto cookware and utensils.',
      'Rinse thoroughly under running tap water for a squeaky-clean shine.',
    ],
    safetyAdvice: [
      'Keep out of reach of children.',
      'Do not ingest. If swallowed, drink plenty of water and seek medical advice.',
      'Rinse hands with clean water after use.',
    ],
    commercialPacks: ['5 Litre'],
    retailPacks: ['500 ml', '1 Litre'],
    targetAudience: 'Commercial Kitchens, Catering Units, Restaurants, Canteens & Homes',
  },
  {
    id: 'floor-cleaner',
    name: 'Clean Go Floor Cleaner',
    brand: 'Clean Go',
    manufacturer: 'KCN UDYOG',
    categorySlug: 'floor-care',
    categoryLabel: 'Everyday Floor Care',
    shortDesc: 'Deep-cleaning surface disinfectant that cuts sticky stains and delivers a shiny, streak-free finish with lingering rose fragrance.',
    heroTagline: 'Deep surface cleaning with lingering rose freshness.',
    heroDesc: 'Clean Go Floor Cleaner cuts daily dirt, mud tracks, and sticky spills to leave a shiny streak-free finish. Safe for polished marble, granite, ceramic tiles, and epoxy flooring.',
    iconBadges: [
      { label: 'Removes dirt & stains', icon: 'Sparkles' },
      { label: 'Streak-free shiny finish', icon: 'ShieldCheck' },
      { label: 'Long-lasting rose freshness', icon: 'Clock' },
      { label: 'Safe for polished marble', icon: 'CheckCircle2' },
    ],
    image: '/images/products/cleango-floor-cleaner.webp',
    liquidColor: '#EC4899',
    liquidGradient: 'linear-gradient(180deg, #F472B6 0%, #BE185D 100%)',
    volume: '500ml, 1L & 5L Can',
    availableSizes: ['500 ml', '1 Ltr', '5 Ltr'],
    scent: 'Fresh Rose Fragrance',
    scents: ['Floral Rose', 'Citrus Lemon', 'Pine Fresh'],
    tagline: 'Powerful Cleaning For a Healthier Home',
    features: [
      'Removes daily dirt, mud tracks, and sticky kitchen spills easily',
      'Leaves a glossy, streak-free shine without any slippery film',
      'Long-lasting soothing floral rose aroma that neutralizes room odors',
      'Completely safe for polished marble, granite, ceramic tiles, and epoxy flooring',
    ],
    directions: [
      'Add 1 to 2 capfuls (approx 20-30ml) of liquid into half a bucket of clean water (approx 4-5 litres).',
      'Dip mop, wring out excess water, and mop floor smoothly.',
      'No rinsing required; allows surface to air-dry naturally to a brilliant shine.',
    ],
    safetyAdvice: [
      'Keep away from direct heat and children.',
      'Avoid eye contact; wash thoroughly with water if contact occurs.',
      'Do not mix with acidic toilet cleaners or undiluted chemicals.',
    ],
    commercialPacks: ['5 Litre'],
    retailPacks: ['500 ml', '1 Litre'],
    targetAudience: 'Hotels, Corporate Offices, Hospitals, Banquets, Housing Societies & Homes',
  },
  {
    id: 'white-phenyle',
    name: 'Clean Go White Phenyle',
    brand: 'Clean Go',
    manufacturer: 'KCN UDYOG',
    categorySlug: 'floor-care',
    categoryLabel: 'Floor & Surface Disinfection',
    shortDesc: 'High-grade white phenyle disinfectant emulsion delivering potent sanitization, natural insect deterrence, and pleasant floral aroma.',
    heroTagline: 'Potent disinfection and natural insect deterrence with pine freshness.',
    heroDesc: 'Clean Go White Phenyle is a dense milky white active emulsion that eliminates foul restroom odors and sanitizes high-footfall areas. Suitable for hospitals, schools, lobbies and commercial corridors.',
    iconBadges: [
      { label: 'Heavy-duty disinfection', icon: 'ShieldCheck' },
      { label: 'Eliminates foul odors', icon: 'Clock' },
      { label: 'Natural insect deterrence', icon: 'Sparkles' },
      { label: 'Economical corridor mopping', icon: 'CheckCircle2' },
    ],
    image: '/images/products/cleango-white-phenyle.webp',
    liquidColor: '#FFFFFF',
    liquidGradient: 'linear-gradient(180deg, #FFFFFF 0%, #E2E8F0 100%)',
    volume: '500ml, 1L & 5L Can',
    availableSizes: ['500 ml', '1 Ltr', '5 Ltr'],
    scent: 'Floral Jasmine & Pine Fresh',
    scents: ['Floral Jasmine', 'Pine Fresh'],
    tagline: 'Powerful Disinfectant & Odor Eliminator',
    features: [
      'Dense milky white active disinfectant formula that emulsifies smoothly in water',
      'Eliminates persistent foul odors and leaves a fresh clean environment',
      'Natural fly, mosquito, and crawling insect deterrence properties',
      'Economical and heavy-duty for mopping corridors, parking lobbies & stairwells',
    ],
    directions: [
      'Shake bottle well before use.',
      'Dilute 1:50 to 1:100 ratio (approx 50ml in a bucket of water) depending on dirt intensity.',
      'Mop surface evenly and allow to dry.',
    ],
    safetyAdvice: [
      'Not for human consumption or topical antiseptic application.',
      'Store in a cool and shaded location away from direct sunlight.',
      'Keep container securely capped when not in use.',
    ],
    commercialPacks: ['5 Litre'],
    retailPacks: ['500 ml', '1 Litre'],
    targetAudience: 'Hospitals, Schools, Public Facilities, Industrial Floors & Residences',
    rating: 4.85,
    reviewCount: 128,
    activeBadge: 'Milky Pine Disinfectant',
    transparencyPill: 'Insect Deterrence',
    commercialAdvantage: 'Economical 5L can for hospitals, schools, and commercial corridors',
  },
];

// Add rating & active badges to all products in PRODUCTS
PRODUCTS[0].rating = 4.92;
PRODUCTS[0].reviewCount = 156;
PRODUCTS[0].activeBadge = 'Clinging Acid Descaler';
PRODUCTS[0].transparencyPill = 'Kills 99.9% Germs';
PRODUCTS[0].commercialAdvantage = 'Heavy-duty 5L can for institutional restrooms & facility care';

PRODUCTS[1].rating = 4.88;
PRODUCTS[1].reviewCount = 98;
PRODUCTS[1].activeBadge = '100% Streak-Free Clarity';
PRODUCTS[1].transparencyPill = 'Sparkling Optical Clean';
PRODUCTS[1].commercialAdvantage = '5L commercial pack for showrooms, glass facades & maintenance';

PRODUCTS[2].rating = 4.96;
PRODUCTS[2].reviewCount = 184;
PRODUCTS[2].activeBadge = 'Rich Foaming Hand Care';
PRODUCTS[2].transparencyPill = 'Green Apple Fragrance';
PRODUCTS[2].commercialAdvantage = '5L institutional can for corporate washrooms, clinics & hotels';

PRODUCTS[3].rating = 4.91;
PRODUCTS[3].reviewCount = 214;
PRODUCTS[3].activeBadge = 'Heavy Grease-Cut Active';
PRODUCTS[3].transparencyPill = 'Rich Foam Easy Rinse';
PRODUCTS[3].commercialAdvantage = 'High-yield 5L can for commercial kitchens, canteens & homes';

PRODUCTS[4].rating = 4.89;
PRODUCTS[4].reviewCount = 172;
PRODUCTS[4].activeBadge = 'Triple-Action Disinfectant';
PRODUCTS[4].transparencyPill = 'Shiny Streak-Free Finish';
PRODUCTS[4].commercialAdvantage = 'Cost-effective 5L bulk can for housing societies, offices & large lobbies';

export const CIRCLE_CATEGORIES = [
  { id: 'all', label: 'All Formulations', icon: 'Sparkles', color: '#168DC0', bg: '#E0F2FE' },
  { id: 'bathroom', label: 'Bathroom Care', icon: 'Droplets', color: '#0284C7', bg: '#E0F2FE' },
  { id: 'kitchen', label: 'Kitchen & Cookware', icon: 'Flame', color: '#D97706', bg: '#FEF3C7' },
  { id: 'floor-care', label: 'Floor & Disinfectant', icon: 'ShieldCheck', color: '#00B189', bg: '#E6F8F3' },
  { id: 'handwash', label: 'Hand Hygiene', icon: 'HeartHandshake', color: '#10B981', bg: '#ECFDF5' },
  { id: 'bulk-commercial', label: '5L Bulk Cans', icon: 'PackageCheck', color: '#1E3A8A', bg: '#EFF6FF' },
];

export const TRUST_RIBBON_ITEMS = [
  { icon: 'ShieldCheck', label: 'Kills 99.9% Germs' },
  { icon: 'Sparkles', label: 'High-Active Cleaning Action' },
  { icon: 'Flame', label: 'Removes Grease & Tough Stains' },
  { icon: 'Droplets', label: 'Long-Lasting Fresh Fragrance' },
  { icon: 'PackageCheck', label: 'Sturdy 5L Commercial Packs' },
];

export const TRANSPARENCY_PILLARS = [
  {
    title: 'High-Active Concentration',
    subtitle: 'Dense formulation that cuts grease & stains fast',
    desc: 'Engineered with high surfactant active matter to ensure every drop cleans thoroughly. Rapidly breaks down stubborn cooking oils, yellow restroom scaling, and dried floor grime.',
    icon: 'Zap',
    badge: '100% Active Action',
    tag: 'High Performance',
  },
  {
    title: 'Kills 99.9% Germs & Disinfects',
    subtitle: 'Targeted hygiene for restrooms, floors & facilities',
    desc: 'Formulated to disinfect everyday high-touch surfaces, eliminating foul restroom odor and bacterial buildup in homes, commercial corridors, clinics, and offices.',
    icon: 'ShieldCheck',
    badge: 'Sanitary Hygiene',
    tag: 'Disinfection',
  },
  {
    title: 'Surface-Safe Formula',
    subtitle: 'Tested on marble, vitrified tiles, glass & utensils',
    desc: 'Designed to lift stubborn grime and hard-water deposits without dulling, etching, or scratching polished Italian marble, ceramic sanitaryware, or mirrors.',
    icon: 'Shield',
    badge: 'Surface Integrity',
    tag: 'Surface Care',
  },
  {
    title: 'Heavy-Duty 5L Commercial Packs',
    subtitle: 'Direct manufacturer value for high-volume users',
    desc: 'Supplied directly in robust 5 Litre HDPE cans for hotels, restaurants, corporate offices, hospitals, banquets, and households buying in bulk at factory pricing.',
    icon: 'PackageCheck',
    badge: 'Commercial Grade',
    tag: '5L Bulk Supply',
  },
];

export const TESTIMONIALS = [
  {
    id: 1,
    name: 'Pooja Sharma',
    role: 'Homemaker',
    location: 'Vasundhara, Ghaziabad',
    rating: 5,
    avatar: '/images/avatars/avatar_pooja.webp',
    product: 'Clean Go Floor Cleaner & Dishwash',
    text: 'Clean Go dishwash cuts greasy ghee and oil effortlessly without leaving any white chalky marks. The floor cleaner keeps our marble floors spotless with a lingering rose fragrance.',
  },
  {
    id: 2,
    name: 'Rajesh Mehra',
    role: 'Operations Head',
    location: 'Grand Imperial Banquets, Noida',
    rating: 5,
    avatar: '/images/avatars/avatar_rajesh.webp',
    product: 'Clean Go 5L Commercial Lineup',
    text: 'We procure 5L commercial cans of Clean Go glass cleaner and toilet cleaner every month. The descaling strength on banquet restrooms is exceptional and factory-direct supply is reliable.',
  },
  {
    id: 3,
    name: 'Dr. Ananya Roy',
    role: 'Clinic Director',
    location: 'Indirapuram Healthcare, Ghaziabad',
    rating: 5,
    avatar: '/images/avatars/avatar_ananya.webp',
    product: 'Clean Go Hand Wash & White Phenyle',
    text: 'The hand wash is pleasant with its green apple fragrance and creates rich foam without drying the skin. The white phenyle keeps our clinic corridors properly disinfected every day.',
  },
  {
    id: 4,
    name: 'Vikram Singhal',
    role: 'Facility Manager',
    location: 'Express Trade Tower, Noida',
    rating: 5,
    avatar: '/images/avatars/avatar_vikram.webp',
    product: 'Clean Go Glass & Toilet Cleaner',
    text: 'Switching to Clean Go 5L cans cut our institutional cleaning supply expenses by 30% while maintaining optical clarity on our corporate glass facades and restrooms.',
  },
];

export const CATEGORIES = [
  { id: 'all', label: 'All Products', count: 6 },
  { id: 'bathroom', label: 'Bathroom', count: 2 },
  { id: 'kitchen', label: 'Kitchen', count: 1 },
  { id: 'floor-care', label: 'Floor Care', count: 2 },
  { id: 'other-cleaning', label: 'Other Cleaning', count: 1 },
];

export const LIFESTYLE_SOLUTIONS = [
  {
    id: 'kitchen',
    title: 'Spotless Cookware & Grease-Free Kitchens',
    room: 'Kitchen Solutions',
    description: 'Tackle burnt oil, heavy curry stains, and greasy kitchen counters with our high-foaming, rapid-rinse lemon dishwash formulation.',
    productId: 'dishwash',
    productName: 'Clean Go Dish Wash Liquid',
    highlightBadge: 'Cuts Heavy Grease',
    actionText: 'View Dishwash Liquid',
    accentColor: '#EAB308',
  },
  {
    id: 'bathroom',
    title: 'Hygienic Bathrooms & Sanitary Ceramics',
    room: 'Bathroom Care',
    description: 'Dissolve stubborn yellow limescale, water marks, and sanitary grime with thick clinging toilet descaler, while keeping hands protected with nourishing hand wash.',
    productId: 'toilet-cleaner',
    productName: 'Clean Go Toilet Cleaner & Hand Wash',
    highlightBadge: 'Clinging Descaler',
    actionText: 'View Bathroom Care',
    accentColor: '#168DC0',
  },
  {
    id: 'glass',
    title: 'Optical Clarity for Windows, Mirrors & Facades',
    room: 'Glass Surfaces',
    description: 'Remove oily smudges, fingerprint haze, and dust from glass tables, mirrors, and building facades without leaving cloudy streaks.',
    productId: 'glass-cleaner',
    productName: 'Clean Go Glass Cleaner',
    highlightBadge: '100% Streak-Free',
    actionText: 'View Glass Cleaner',
    accentColor: '#28B9C9',
  },
  {
    id: 'floors',
    title: 'Gleaming Living Spaces with Lingering Floral Freshness',
    room: 'Flooring & Corridors',
    description: 'Protect polished marble, vitrified tiles, and granite with our rose floor disinfectant and heavy-duty milky white phenyle emulsion.',
    productId: 'floor-cleaner',
    productName: 'Clean Go Floor Cleaner & White Phenyle',
    highlightBadge: 'Rose & Jasmine Fresh',
    actionText: 'View Floor Solutions',
    accentColor: '#159C79',
  },
];

export const WHY_CHOOSE_US = [
  {
    title: 'Packaging Versatility',
    desc: 'Available in 500ml domestic bottles, 1 Litre packs, and 5 Litre commercial cans for homes and facilities.',
    badge: '500ml, 1L & 5L Sizes',
    icon: 'PackageCheck',
  },
  {
    title: 'Consistent Factory Formulations',
    desc: 'Manufactured with strict quality control practices and surface-safe pH balances in Vasundhara, Ghaziabad.',
    badge: 'Reliable Formulations',
    icon: 'ShieldCheck',
  },
  {
    title: 'Direct Delhi NCR Dispatch',
    desc: 'Fast regional delivery turnaround across Ghaziabad, Noida, Greater Noida, and Delhi with factory-direct pricing.',
    badge: 'Direct Manufacturer',
    icon: 'Truck',
  },
  {
    title: 'Surface-Safe Formulations',
    desc: 'Engineered to be tough on dirt while preserving ceramics, marble, chrome fittings, and glassware without abrasion.',
    badge: 'Surface Integrity',
    icon: 'Sparkles',
  },
];

export const COMPANY_INFO = {
  name: 'KCN UDYOG',
  brandLine: 'Clean Go',
  person: 'Nakul Sakhuja',
  phone: '+91 9310581585',
  phoneRaw: '+919310581585',
  whatsappRaw: '919310581585',
  email: 'kcn.gocare@gmail.com',
  website: 'kcnudyog.com',
  address: '170 Sector-3, Vasundhara, Ghaziabad',
  state: 'Uttar Pradesh (Delhi NCR) - 201012, India',
  googleSheetsUrl:
    'https://script.google.com/macros/s/AKfycbz70kXjNr4huyy3tahizeoAqsJ7wa1DZ-B_j1tGvRTzjmDM5pUUqy5KrJYiOrdUeVbM/exec',
  workingHours: 'Monday - Saturday: 9:00 AM - 7:30 PM',
};

