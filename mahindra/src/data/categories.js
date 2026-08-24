export const categories = [
  { id: 'all', label: 'All Categories', icon: 'apps' },
  { id: 'womens-fashion', label: "Women's Fashion", icon: 'checkroom' },
  { id: 'mens-fashion', label: "Men's Fashion", icon: 'man' },
  { id: 'kids-fashion', label: "Kids' Fashion", icon: 'child_care' },
  { id: 'dining-fb', label: 'Dining & F&B', icon: 'restaurant' },
  { id: 'electronics-eyewear', label: 'Electronics & Eyewear', icon: 'devices' },
  { id: 'beauty-wellness', label: 'Beauty & Wellness', icon: 'spa' },
  { id: 'jewellery-luxury', label: 'Jewellery & Luxury', icon: 'diamond' },
  { id: 'footwear', label: 'Footwear', icon: 'steps' },
  { id: 'supermarket-groceries', label: 'Supermarket & Groceries', icon: 'shopping_basket' },
  { id: 'entertainment-cinema', label: 'Entertainment & Cinema', icon: 'movie' },
];

export const categoryMap = Object.fromEntries(
  categories.filter((c) => c.id !== 'all').map((c) => [c.id, c.label])
);
