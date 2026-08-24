export const floors = [
  {
    id: 'lgf',
    label: 'LGF',
    shortLabel: 'LGF',
    name: 'Lower Ground Floor',
    title: 'Lower Ground Floor',
    description: 'Fresh Market, Daily Essentials & Youth Fashion',
    highlights: [
      'LuLu Daily grocery market and hypermarket access',
      'Trendsetting youth apparel and everyday convenience',
      'Jewellery, ethnic wear, and lifestyle kiosks',
    ],
    anchors: ['LuLu Daily / Hypermarket', 'Yousta', 'Tokyo Talkies / Highlander'],
    sceneFloor: 'f1',
    mapSrc:
      'https://firebasestorage.googleapis.com/v0/b/aobao-ad50f.appspot.com/o/6nzKSvJbd7QdRDCNm9y8tpQqKrX2%2FLower%20Ground%20Floor3d-03.svg?alt=media&token=73f00863-b661-42f8-9cb7-2b2462750e0a',
    mapplicLayer: 'layer2',
  },
  {
    id: 'ugf',
    label: 'UGF',
    shortLabel: 'UGF',
    name: 'Upper Ground Floor',
    title: 'Upper Ground Floor',
    description: 'Dining Court, Vibe Square & Main Concierge',
    highlights: [
      'Central food court with 34 F&B brands',
      'Vibe Square events and cultural happenings',
      'Main entrance, concierge, and visitor services',
    ],
    anchors: ['LuLu Eatry', 'Vibe Square', 'Main Concierge'],
    sceneFloor: 'f1',
    mapSrc:
      'https://firebasestorage.googleapis.com/v0/b/aobao-ad50f.appspot.com/o/6nzKSvJbd7QdRDCNm9y8tpQqKrX2%2FM5%20Mall%20map%20-%20Ground%20Floor.svg?alt=media&token=fe852d8c-7466-4699-b857-787b1c050363',
    mapplicLayer: 'layer1',
  },
  {
    id: '1f',
    label: '1F',
    shortLabel: '1F',
    name: 'First Floor',
    title: 'First Floor',
    description: 'Fashion, Footwear & Electronics',
    highlights: [
      'Footwear anchors and sportswear brands',
      'Electronics, eyewear, and mobile accessories',
      'Lifestyle boutiques and gifting zones',
    ],
    anchors: ['Reliance Digital', 'Lenskart', 'Decathlon'],
    sceneFloor: 'f1',
    mapSrc:
      'https://firebasestorage.googleapis.com/v0/b/aobao-ad50f.appspot.com/o/6nzKSvJbd7QdRDCNm9y8tpQqKrX2%2FFirst%20Floor.svg?alt=media&token=e6edd65b-7abc-4140-96eb-90a22dcf1bd1',
    mapplicLayer: 'layer6',
  },
  {
    id: '2f',
    label: '2F',
    shortLabel: '2F',
    name: 'Second Floor',
    title: 'Second Floor',
    description: 'Fashion Anchors, Beauty & Jewellery',
    highlights: [
      'Lifestyle and Max fashion anchors',
      'Premium jewellery and luxury watch brands',
      'Beauty, wellness, and salon destinations',
    ],
    anchors: ['Lifestyle', 'Max', 'Tanishq', 'Kalyan Jewellers'],
    sceneFloor: 'f2',
    mapSrc:
      'https://firebasestorage.googleapis.com/v0/b/aobao-ad50f.appspot.com/o/6nzKSvJbd7QdRDCNm9y8tpQqKrX2%2FSecond%20Floor.svg?alt=media&token=4a3a47a8-5f9f-4c70-85f4-fefe769de206',
    mapplicLayer: 'layer3',
  },
  {
    id: '3f',
    label: '3F',
    shortLabel: '3F',
    name: 'Third Floor',
    title: 'Third Floor',
    description: 'Kids, Play & Family Entertainment',
    highlights: [
      'Fun City FEC and Jus Jumpin play zones',
      'Kids fashion and toy destinations',
      'VR, arcade, and interactive entertainment',
    ],
    anchors: ['Fun City', 'Jus Jumpin', 'Hamleys'],
    sceneFloor: 'f3',
    mapSrc:
      'https://firebasestorage.googleapis.com/v0/b/aobao-ad50f.appspot.com/o/6nzKSvJbd7QdRDCNm9y8tpQqKrX2%2FThird%20Floor.svg?alt=media&token=3c618845-3c34-484e-be44-04b4a36a610d',
    mapplicLayer: 'layer4',
  },
  {
    id: '4f',
    label: '4F',
    shortLabel: '4F',
    name: 'Fourth Floor',
    title: 'Fourth Floor',
    description: 'Cinema Multiplex & Dine-In Theatre',
    highlights: [
      'PVR INOX 8-screen multiplex',
      'India’s first dine-in theatre concept',
      'IMAX, 4DX, and premium screening experiences',
    ],
    anchors: ['PVR INOX', 'PVR Dine-In', 'IMAX'],
    sceneFloor: 'f4',
    mapSrc:
      'https://firebasestorage.googleapis.com/v0/b/aobao-ad50f.appspot.com/o/6nzKSvJbd7QdRDCNm9y8tpQqKrX2%2FFourth%20Floor.svg?alt=media&token=01f3c38b-9238-4bc0-8d4f-20fb7b399f18',
    mapplicLayer: 'layer5',
  },
];

export const sceneFloors = [
  {
    id: 'f1',
    label: 'Floor 1',
    short: 'F1',
    title: 'Ground Floor — Fashion & Lifestyle',
    description: 'Fashion Boutiques, Accessories, Cosmetics, Central Atrium & Concierge',
  },
  {
    id: 'f2',
    label: 'Floor 2',
    short: 'F2',
    title: 'Second Floor — Anchors & Jewellery',
    description: 'Lifestyle, Max, premium jewellery, and beauty destinations',
  },
  {
    id: 'f3',
    label: 'Floor 3',
    short: 'F3',
    title: 'Third Floor — Play & Kids',
    description: 'Family entertainment, kids fashion, and interactive play zones',
  },
  {
    id: 'f4',
    label: 'Floor 4',
    short: 'F4',
    title: 'Fourth Floor — Cinema',
    description: 'PVR INOX multiplex and India’s first dine-in theatre',
  },
];

export const floorCameraPositions = {
  f1: { position: [0, 4, 14], target: [0, 1.5, 0] },
  f2: { position: [0, 6, 12], target: [0, 3, 0] },
  f3: { position: [0, 8, 11], target: [0, 4.5, 0] },
  f4: { position: [0, 10, 10], target: [0, 6, 0] },
  default: { position: [0, 5, 14], target: [0, 2, 0] },
};
