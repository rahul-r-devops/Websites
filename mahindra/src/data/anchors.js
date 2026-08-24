import { officialImages } from './officialImages';

const CDN = 'https://d9eof1pfoysfv.cloudfront.net';

export const anchors = [
  {
    id: 'lifestyle',
    name: 'Lifestyle',
    category: 'womens-fashion',
    description:
      'Premium fashion destination for apparel, accessories, and lifestyle essentials across women’s, men’s, and kids’ collections.',
    floor: '2F',
    tag: 'Fashion Anchor',
    logo: `${CDN}/Lifestyle_logo_UGF_1a8ea01bf9.png`,
    image: `${CDN}/womens_49a869f4bc.jpg`,
  },
  {
    id: 'max',
    name: 'Max',
    category: 'womens-fashion',
    description:
      'Value fashion for the whole family — trend-led apparel at accessible prices across women’s, men’s, and kids’ wear.',
    floor: '2F',
    tag: 'Fashion Anchor',
    logo: `${CDN}/Max_1st_Floor_7d0afcab13.jpg`,
    image: officialImages.mallExterior,
  },
  {
    id: 'lulu-hypermarket',
    name: 'LuLu Hypermarket',
    category: 'supermarket-groceries',
    description:
      'Full-format hypermarket with groceries, fresh produce, household essentials, and international product ranges.',
    floor: 'LGF',
    tag: 'Retail Anchor',
    logo: `${CDN}/Lulu_Hypermarket_logo_1_dda075a193.png`,
    image: officialImages.mallExterior,
  },
  {
    id: 'lulu-daily',
    name: 'LuLu Daily',
    category: 'supermarket-groceries',
    description:
      'Daily essentials grocery market — fresh produce, staples, and convenience shopping at the lower level.',
    floor: 'LGF',
    tag: 'Grocery Anchor',
    logo: 'https://firebasestorage.googleapis.com/v0/b/aobao-ad50f.appspot.com/o/6nzKSvJbd7QdRDCNm9y8tpQqKrX2%2Flulu-daily.jpg?alt=media&token=a041f969-eec5-429b-a0b6-216c4ac83ea2',
    image: officialImages.mallExterior,
  },
  {
    id: 'fun-city',
    name: 'Fun City',
    category: 'entertainment-cinema',
    description:
      'Family entertainment centre with arcade games, rides, and activities for kids and families across 17,500 sq. ft.',
    floor: '3F',
    tag: 'FEC Anchor',
    logo: `${CDN}/logo_funcity_1_4d9cb2ce0e.png`,
    image: officialImages.funCity,
  },
  {
    id: 'pvr-inox',
    name: 'PVR INOX',
    category: 'entertainment-cinema',
    description:
      '8-screen multiplex with India’s first dine-in theatre concept — cinema elevated with gourmet dining.',
    floor: '4F',
    tag: 'Cinema Anchor',
    logo: null,
    image: officialImages.pvrInox,
  },
  {
    id: 'jus-jumpin',
    name: 'Jus Jumpin',
    category: 'entertainment-cinema',
    description:
      'Indoor play zone and trampoline park — active fun for children with supervised play areas.',
    floor: '3F',
    tag: 'Play Anchor',
    logo: 'https://firebasestorage.googleapis.com/v0/b/aobao-ad50f.appspot.com/o/6nzKSvJbd7QdRDCNm9y8tpQqKrX2%2FMall_Logos_New_3.jpg?alt=media&token=90d51a14-4194-4de3-b1db-0cd6936c10ea',
    image: `${CDN}/kidss_fb0815b80c.jpg`,
  },
  {
    id: 'yousta',
    name: 'Yousta',
    category: 'womens-fashion',
    description:
      'Youth fashion brand offering trendsetting apparel and accessories for young shoppers.',
    floor: 'LGF',
    tag: 'Youth Fashion',
    logo: `${CDN}/Yousta_53dc23f36e.jpeg`,
    image: `${CDN}/womens_49a869f4bc.jpg`,
  },
  {
    id: 'tokyo-talkies',
    name: 'Tokyo Talkies & Highlander',
    category: 'mens-fashion',
    description:
      'Contemporary men’s and youth fashion with urban streetwear and casual collections.',
    floor: 'LGF',
    tag: 'Fashion',
    logo: `${CDN}/Tokyo_Talkies_and_Highlander_LGF_8fc094e125.webp`,
    image: `${CDN}/mens_c92a3b41c8.jpg`,
  },
  {
    id: 'lulu-eatry',
    name: 'LuLu Eatry',
    category: 'dining-fb',
    description:
      'Food court and dining destination with multi-cuisine options and family-friendly seating.',
    floor: 'UGF',
    tag: 'Dining',
    logo: `${CDN}/Lulu_Hypermarket_logo_1_dda075a193.png`,
    image: `${CDN}/card_3_20da899394.jpg`,
  },
];
