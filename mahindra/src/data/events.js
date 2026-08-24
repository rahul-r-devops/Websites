const CDN = 'https://d9eof1pfoysfv.cloudfront.net';

export const eventFilters = [
  { id: 'all', label: 'All' },
  { id: 'shopping', label: 'Shopping' },
  { id: 'food', label: 'Food & Dining' },
  { id: 'kids', label: 'Kids & Family' },
  { id: 'wellness', label: 'Wellness' },
];

export const events = [
  {
    id: 'flat-50',
    title: 'Flat 50% Off Mega Sale',
    status: 'Completed',
    date: '9th July - 12th July 2026',
    description:
      'Get ready for four days of unbeatable shopping with our Flat 50% Off event across leading fashion & lifestyle brands.',
    category: 'shopping',
    tag: 'Shopping Festival',
    cta: 'Event Info',
    image: `${CDN}/Flat_50_a00a61fed0.png`,
  },
  {
    id: 'eoss-2026',
    title: 'End Of Season Sale (EOSS)',
    status: 'Completed',
    date: '15th June - 31st July 2026',
    description:
      'The biggest shopping celebration of the season at M5 Ecity Mall with discounts up to 70% on top global brands.',
    category: 'shopping',
    tag: 'Fashion & Lifestyle',
    cta: 'Event Info',
    image: `${CDN}/Web_Banner_bf028e9ecb.png`,
  },
  {
    id: 'freedom-sale',
    title: 'Freedom Sale Flat 50%',
    status: 'Completed',
    date: 'August 2026',
    description:
      'The Freedom Sale at M5 Ecity Mall brought together unbeatable offers and exciting shopping experiences, giving customers the perfect reason to indulge in their favourite brands.',
    category: 'shopping',
    tag: 'Seasonal Sale',
    cta: 'Discover More',
    image: `${CDN}/events_banner_33aa0f362b.jpg`,
  },
  {
    id: 'end-of-season',
    title: 'End Of Season Sale',
    status: 'Upcoming',
    date: 'Seasonal',
    description:
      'Get ready for the biggest shopping celebration of the season at M5 Ecity Mall.',
    category: 'shopping',
    tag: 'Shopping',
    cta: 'Discover More',
    image: `${CDN}/Web_Banner_bf028e9ecb.png`,
  },
  {
    id: 'her-day',
    title: 'Her Day Wednesdays - Pamper & Style',
    status: 'Completed',
    date: 'Every Wednesday in June & July 2026',
    description:
      'Exclusive workshops, beauty makeovers, wristband making, and special discounts dedicated to women shoppers.',
    category: 'wellness',
    tag: 'Community & Wellness',
    cta: 'Event Info',
    image: `${CDN}/womens_49a869f4bc.jpg`,
  },
  {
    id: 'monsoon-food',
    title: 'Monsoon Food Festival',
    status: 'Completed',
    date: '26th June - 28th June 2026',
    description:
      'A 3-day culinary journey featuring 34 F&B brands with special monsoon fusion delicacies and live cooking shows.',
    category: 'food',
    tag: 'Dining & Gourmet',
    cta: 'Event Info',
    image: `${CDN}/card_3_20da899394.jpg`,
  },
  {
    id: 'yoga-day',
    title: 'Yoga Day - Yoga Se Hoga',
    status: 'Completed',
    date: '21st June 2026',
    description:
      'Morning wellness yoga session at Vibe Square led by certified instructors followed by healthy smoothie samplings.',
    category: 'wellness',
    tag: 'Health & Fitness',
    cta: 'Event Info',
    image: `${CDN}/Adobe_Stock_1555314080_2e583f8ebf.jpeg`,
  },
  {
    id: 'kids-fest',
    title: 'M5 Big Summer Kids Fest',
    status: 'Completed',
    date: '1st April - 31st May 2026',
    description:
      'Two months of non-stop fun at Fun City & Jus Jumpin, art workshops, summer camps, and talent hunt competitions.',
    category: 'kids',
    tag: 'Kids & Family',
    cta: 'Event Info',
    image: `${CDN}/kidss_fb0815b80c.jpg`,
  },
  {
    id: 'tambola',
    title: 'Tambola Championship',
    status: 'Completed',
    date: '25th July - 26th July 2026',
    description:
      'Grand weekend Tambola games with exciting mega prizes, shopping vouchers, and electronics giveaways.',
    category: 'kids',
    tag: 'Entertainment',
    cta: 'Event Info',
    image: `${CDN}/image_7_793f4e56a1.jpg`,
  },
  {
    id: 'valentine',
    title: 'Under The Stars - Valentine Special',
    status: 'Completed',
    date: '14th February 2026',
    description:
      'Open-air acoustic music performance, gourmet dining, and candlelit ambiance at Vibe Square UGF.',
    category: 'food',
    tag: 'Music & Concert',
    cta: 'Event Info',
    image: `${CDN}/card_4_47de2a1017.jpg`,
  },
  {
    id: 'mega-raffle',
    title: '30 Days. 30 Gifts Mega Raffle',
    status: 'Completed',
    date: '1st May - 31st May 2026',
    description:
      'Shop for Rs 2,500 and win daily prizes including smartphones, air tickets, and luxury staycation vouchers.',
    category: 'shopping',
    tag: 'Rewards & Shopping',
    cta: 'Event Info',
    image: `${CDN}/Retail_Card_img2_1_1644cbbc9e.jpg`,
  },
];
