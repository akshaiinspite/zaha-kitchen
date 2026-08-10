export interface MenuItem {
  id: string;
  name: string;
  price: string;
  numericPrice: number;
  badge?: string;
  popular?: boolean;
  isVeg?: boolean;
}

export interface MenuCategory {
  id: string;
  title: string;
  shortTitle: string;
  badge: string;
  description: string;
  iconName: 'Sun' | 'Utensils' | 'Flame' | 'CookingPot' | 'Layers' | 'Coffee' | 'GlassWater' | 'Sparkles';
  items: MenuItem[];
}

export const MENU_CATEGORIES: MenuCategory[] = [
  {
    id: 'breakfast',
    title: 'Breakfast Specials',
    shortTitle: 'Breakfast',
    badge: 'Morning Fresh',
    iconName: 'Sun',
    description: 'Traditional morning delicacies served hot with fresh chutneys and spiced gravies.',
    items: [
      { id: 'b1', name: 'Appam', price: '₹14', numericPrice: 14, badge: 'Soft & Crisp', isVeg: true },
      { id: 'b2', name: 'Idiy', price: '₹14', numericPrice: 14, isVeg: true },
      { id: 'b3', name: 'Puri', price: '₹13', numericPrice: 13, isVeg: true },
      { id: 'b4', name: 'Idiyappam', price: '₹14', numericPrice: 14, popular: true, badge: 'Popular', isVeg: true },
      { id: 'b5', name: 'Uppumavu', price: '₹53', numericPrice: 53, isVeg: true },
      { id: 'b6', name: 'Putt (Single)', price: '₹18', numericPrice: 18, popular: true, badge: 'Classic', isVeg: true },
      { id: 'b7', name: 'Bhatura', price: '₹16', numericPrice: 16, isVeg: true },
      { id: 'b8', name: 'Kadala Curry', price: '₹67', numericPrice: 67, popular: true, badge: 'Must Try', isVeg: true },
      { id: 'b9', name: 'Green Piece', price: '₹50', numericPrice: 50, isVeg: true },
      { id: 'b10', name: 'Egg Roast', price: '₹51', numericPrice: 51, popular: true, badge: 'Bestseller', isVeg: false },
      { id: 'b11', name: 'Vegetable Curry', price: '₹58', numericPrice: 58, isVeg: true },
    ],
  },
  {
    id: 'nadan',
    title: 'Nadan Meals & Seafood',
    shortTitle: 'Nadan',
    badge: 'Lunch Feast',
    iconName: 'Utensils',
    description: 'Authentic Kerala lunch spreads, traditional claypot Chatty Choru, and fresh coastal fish fries.',
    items: [
      { id: 'n1', name: 'Veg Meals', price: '₹79', numericPrice: 79, popular: true, badge: 'Daily Special', isVeg: true },
      { id: 'n2', name: 'Fish Curry', price: '₹120', numericPrice: 120, badge: 'Fresh Catch', isVeg: false },
      { id: 'n3', name: 'Fish Fry Meals', price: '₹189', numericPrice: 189, popular: true, badge: 'House Special', isVeg: false },
      { id: 'n4', name: 'Chicken Curry Meals', price: '₹149', numericPrice: 149, popular: true, badge: 'Bestseller', isVeg: false },
      { id: 'n5', name: 'Chatty Choru', price: '₹200', numericPrice: 200, popular: true, badge: 'Signature', isVeg: false },
      { id: 'n6', name: 'Nadan Kanji', price: '₹79', numericPrice: 79, badge: 'Traditional', isVeg: true },
      { id: 'n7', name: 'Ayala Fry', price: '₹80', numericPrice: 80, isVeg: false },
      { id: 'n8', name: 'Chala Fry', price: '₹60', numericPrice: 60, isVeg: false },
      { id: 'n9', name: 'Kozhuva Fry', price: '₹70', numericPrice: 70, badge: 'Crispy', isVeg: false },
    ],
  },
  {
    id: 'nonveg',
    title: 'Non-Veg & Majboos Combos',
    shortTitle: 'Non-Veg',
    badge: 'Arabic & Naadan Fusion',
    iconName: 'Flame',
    description: 'Rich flame-grilled chicken, charcoal Alfaham combos, fragrant Arabic Majboos, and spicy Naadan roasts.',
    items: [
      { id: 'nv1', name: 'Chicken 65', price: '₹169', numericPrice: 169, popular: true, badge: 'Bestseller', isVeg: false },
      { id: 'nv2', name: 'Chicken Fry', price: '₹149', numericPrice: 149, isVeg: false },
      { id: 'nv3', name: 'Chilly Chicken', price: '₹179', numericPrice: 179, popular: true, badge: 'Favorite', isVeg: false },
      { id: 'nv4', name: 'Majboos 65', price: '₹189', numericPrice: 189, badge: 'Chef Special', isVeg: false },
      { id: 'nv5', name: 'Majboos Rice', price: '₹95', numericPrice: 95, isVeg: true },
      { id: 'nv6', name: 'Majboos Alfaham', price: '₹249', numericPrice: 249, popular: true, badge: 'Signature', isVeg: false },
      { id: 'nv7', name: 'Alfaham (Q) Rice Combo', price: '₹249', numericPrice: 249, popular: true, badge: 'Combo Deal', isVeg: false },
      { id: 'nv8', name: 'Alfaham (Q) + Chappathi Combo', price: '₹179', numericPrice: 179, badge: 'Value Combo', isVeg: false },
      { id: 'nv9', name: 'Arabic Rice & Alfaham', price: '₹242', numericPrice: 242, popular: true, badge: 'Middle East', isVeg: false },
      { id: 'nv10', name: 'Arabic Rice & Chicken 65 Combo', price: '₹189', numericPrice: 189, isVeg: false },
      { id: 'nv11', name: 'Arabic Rice', price: '₹100', numericPrice: 100, isVeg: true },
      { id: 'nv12', name: 'Chappathi', price: '₹14', numericPrice: 14, isVeg: true },
      { id: 'nv13', name: 'Chicken Curry', price: '₹154', numericPrice: 154, isVeg: false },
      { id: 'nv14', name: 'Afghani Chicken', price: '₹169', numericPrice: 169, badge: 'Creamy', isVeg: false },
      { id: 'nv15', name: 'Chicken Chukka', price: '₹169', numericPrice: 169, popular: true, badge: 'Spicy', isVeg: false },
      { id: 'nv16', name: 'Neychorum Kozhiyum', price: '₹189', numericPrice: 189, popular: true, badge: 'Must Try', isVeg: false },
      { id: 'nv17', name: 'Neychorum Chicken 65', price: '₹179', numericPrice: 179, isVeg: false },
      { id: 'nv18', name: 'Chicken Kondattam', price: '₹169', numericPrice: 169, badge: 'Kerala Special', isVeg: false },
      { id: 'nv19', name: 'Chicken Lajawab', price: '₹169', numericPrice: 169, isVeg: false },
      { id: 'nv20', name: 'Egg Bhurji', price: '₹60', numericPrice: 60, isVeg: false },
    ],
  },
  {
    id: 'biriyani',
    title: 'Biriyani & Fried Rice',
    shortTitle: 'Biriyani',
    badge: 'Dum Cooked',
    iconName: 'CookingPot',
    description: 'Slow-cooked Malabar Dum Biriyani, aromatic Ghee Rice, and sizzling Chinese Fried Rice combos.',
    items: [
      { id: 'bi1', name: 'Chicken Dum Biriyani', price: '₹135', numericPrice: 135, popular: true, badge: 'Popular', isVeg: false },
      { id: 'bi2', name: 'Chicken Dum Biriyani (Full)', price: '₹185', numericPrice: 185, popular: true, badge: 'Bestseller', isVeg: false },
      { id: 'bi3', name: 'Chicken 65 Biriyani', price: '₹189', numericPrice: 189, badge: 'House Special', isVeg: false },
      { id: 'bi4', name: 'Ghee Rice', price: '₹95', numericPrice: 95, badge: 'Aromatic', isVeg: true },
      { id: 'bi5', name: 'Veg Fried Rice', price: '₹119', numericPrice: 119, isVeg: true },
      { id: 'bi6', name: 'Veg Fried Rice + Chilly Chicken', price: '₹219', numericPrice: 219, popular: true, badge: 'Top Combo', isVeg: false },
      { id: 'bi7', name: 'Veg Fried Rice + Chilly Gobi', price: '₹189', numericPrice: 189, isVeg: true },
    ],
  },
  {
    id: 'thaali',
    title: 'Thaali & Veg Specials',
    shortTitle: 'Thaali',
    badge: 'North & South',
    iconName: 'Layers',
    description: 'Hearty North Indian Thalis, rich Butter Gravies, Paneer Delights, and daily vegetable combos.',
    items: [
      { id: 'th1', name: 'Chilly Gobi', price: '₹129', numericPrice: 129, isVeg: true },
      { id: 'th2', name: 'Aloo Gobi', price: '₹89', numericPrice: 89, isVeg: true },
      { id: 'th3', name: 'Mutter Paneer', price: '₹179', numericPrice: 179, popular: true, badge: 'Rich & Creamy', isVeg: true },
      { id: 'th4', name: 'Dal Curry', price: '₹59', numericPrice: 59, isVeg: true },
      { id: 'th5', name: 'North Indian Veg Thali', price: '₹109', numericPrice: 109, popular: true, badge: 'Thali Special', isVeg: true },
      { id: 'th6', name: 'North Indian Non-Veg Thali', price: '₹149', numericPrice: 149, popular: true, badge: 'Full Meal', isVeg: false },
      { id: 'th7', name: '3 Chappathi + Mutter Paneer', price: '₹159', numericPrice: 159, badge: 'Combo', isVeg: true },
      { id: 'th8', name: '3 Chappathi + Chicken Curry', price: '₹159', numericPrice: 159, popular: true, badge: 'Popular Combo', isVeg: false },
    ],
  },
  {
    id: 'golden',
    title: 'Golden Evening Snacks',
    shortTitle: 'Golden',
    badge: '4 PM Fresh Batch',
    iconName: 'Sparkles',
    description: 'Freshly fried hot Pazhampori, crunchy Uzhunnuvadas, savory Cutlets, Puffs, and traditional Kerala tea bites.',
    items: [
      { id: 'sn1', name: 'Chicken Cheese Box', price: '₹25', numericPrice: 25, badge: 'Cheesy', isVeg: false },
      { id: 'sn2', name: 'Chicken Ada', price: '₹25', numericPrice: 25, isVeg: false },
      { id: 'sn3', name: 'Chicken Cutlet', price: '₹25', numericPrice: 25, popular: true, badge: 'Crispy', isVeg: false },
      { id: 'sn4', name: 'Chicken Samosa', price: '₹25', numericPrice: 25, popular: true, badge: 'Hot', isVeg: false },
      { id: 'sn5', name: 'Chicken Spring Roll', price: '₹25', numericPrice: 25, isVeg: false },
      { id: 'sn6', name: 'Egg Puffs', price: '₹25', numericPrice: 25, popular: true, badge: 'Fresh Daily', isVeg: false },
      { id: 'sn7', name: 'Kaypola', price: '₹25', numericPrice: 25, badge: 'Traditional', isVeg: false },
      { id: 'sn8', name: 'Chicken Half Moon', price: '₹25', numericPrice: 25, isVeg: false },
      { id: 'sn9', name: 'Beef Unnakkai', price: '₹30', numericPrice: 30, popular: true, badge: 'Must Try', isVeg: false },
      { id: 'sn10', name: 'Parippuvada', price: '₹15', numericPrice: 15, badge: 'Crunchy', isVeg: true },
      { id: 'sn11', name: 'Pazhampori', price: '₹13', numericPrice: 13, popular: true, badge: 'Bestseller', isVeg: true },
      { id: 'sn12', name: 'Unnakaya', price: '₹25', numericPrice: 25, isVeg: true },
      { id: 'sn13', name: 'Uzhunnuvada', price: '₹15', numericPrice: 15, popular: true, badge: 'Classic', isVeg: true },
      { id: 'sn14', name: 'Veg Samosa', price: '₹17', numericPrice: 17, isVeg: true },
      { id: 'sn15', name: 'Ullivada', price: '₹15', numericPrice: 15, isVeg: true },
      { id: 'sn16', name: 'Mutta Bhaji', price: '₹12', numericPrice: 12, isVeg: false },
      { id: 'sn17', name: 'Kai Bhaji', price: '₹12', numericPrice: 12, isVeg: true },
      { id: 'sn18', name: 'Mulagh Bhaji', price: '₹15', numericPrice: 15, badge: 'Spicy', isVeg: true },
      { id: 'sn19', name: 'Sweet Potato', price: '₹50', numericPrice: 50, isVeg: true },
      { id: 'sn20', name: 'Undampori', price: '₹15', numericPrice: 15, isVeg: true },
      { id: 'sn21', name: 'Avil', price: '₹50', numericPrice: 50, isVeg: true },
      { id: 'sn22', name: 'Pastha', price: '₹50', numericPrice: 50, isVeg: true },
      { id: 'sn23', name: 'Kappa', price: '₹45', numericPrice: 45, badge: 'Naadan', isVeg: true },
      { id: 'sn24', name: 'Kadala Roast', price: '₹50', numericPrice: 50, isVeg: true },
    ],
  },
  {
    id: 'hot',
    title: 'Hot Teas & Coffees',
    shortTitle: 'Hot',
    badge: 'Freshly Brewed',
    iconName: 'Coffee',
    description: 'Piping hot Kerala Meter Chaya, aromatic Black Coffee, herbal Sulaimani brews, and rich hot drinks.',
    items: [
      { id: 'ht1', name: 'Black Tea', price: '₹12', numericPrice: 12, badge: 'Classic', isVeg: true },
      { id: 'ht2', name: 'Black Coffee', price: '₹12', numericPrice: 12, isVeg: true },
      { id: 'ht3', name: 'Boost', price: '₹25', numericPrice: 25, isVeg: true },
      { id: 'ht4', name: 'Coffee', price: '₹22', numericPrice: 22, popular: true, badge: 'Aromatic', isVeg: true },
      { id: 'ht5', name: 'Horlicks', price: '₹25', numericPrice: 25, isVeg: true },
      { id: 'ht6', name: 'Lime Tea', price: '₹17', numericPrice: 17, badge: 'Zesty', isVeg: true },
      { id: 'ht7', name: 'Tea', price: '₹13', numericPrice: 13, popular: true, badge: 'Bestseller', isVeg: true },
    ],
  },
  {
    id: 'cold',
    title: 'Cold Drinks, Juices & Mojitos',
    shortTitle: 'Cold',
    badge: 'Chilled Refreshments',
    iconName: 'GlassWater',
    description: 'Fresh fruit juices, creamy milkshakes, classic Kannur Cocktail, Mohabbat Ke Sharbat, and sparkling mojitos.',
    items: [
      { id: 'cd1', name: 'Cold Boost', price: '₹79', numericPrice: 79, isVeg: true },
      { id: 'cd2', name: 'Cold Coffee', price: '₹79', numericPrice: 79, popular: true, badge: 'Popular', isVeg: true },
      { id: 'cd3', name: 'Fresh Lime', price: '₹35', numericPrice: 35, badge: 'Refreshing', isVeg: true },
      { id: 'cd4', name: 'Green Apple Mojito', price: '₹69', numericPrice: 69, badge: 'Cooling', isVeg: true },
      { id: 'cd5', name: 'Kannur Cocktail', price: '₹89', numericPrice: 89, popular: true, badge: 'Signature', isVeg: true },
      { id: 'cd6', name: 'Soda Lime', price: '₹35', numericPrice: 35, isVeg: true },
      { id: 'cd7', name: 'Mango Juice', price: '₹95', numericPrice: 95, isVeg: true },
      { id: 'cd8', name: 'Mango Milk Shake', price: '₹95', numericPrice: 95, popular: true, badge: 'Creamy', isVeg: true },
      { id: 'cd9', name: 'Mohabbat Ke Sharbat', price: '₹79', numericPrice: 79, popular: true, badge: 'Special', isVeg: true },
      { id: 'cd10', name: 'Musambi', price: '₹79', numericPrice: 79, isVeg: true },
      { id: 'cd11', name: 'Orange Juice', price: '₹95', numericPrice: 95, isVeg: true },
      { id: 'cd12', name: 'Pappaya Juice', price: '₹79', numericPrice: 79, isVeg: true },
      { id: 'cd13', name: 'Passion Fruit Mojito', price: '₹69', numericPrice: 69, popular: true, badge: 'Bestseller', isVeg: true },
      { id: 'cd14', name: 'Pineapple Juice', price: '₹79', numericPrice: 79, isVeg: true },
      { id: 'cd15', name: 'Pineapple Lime', price: '₹40', numericPrice: 40, isVeg: true },
      { id: 'cd16', name: 'Watermelon', price: '₹69', numericPrice: 69, isVeg: true },
      { id: 'cd17', name: 'Watermelon Mojito', price: '₹69', numericPrice: 69, isVeg: true },
      { id: 'cd18', name: 'Mango Mojito', price: '₹69', numericPrice: 69, isVeg: true },
      { id: 'cd19', name: 'Pinapple Mojito', price: '₹69', numericPrice: 69, isVeg: true },
    ],
  },
];

export const TOTAL_MENU_ITEMS_COUNT = MENU_CATEGORIES.reduce(
  (sum, cat) => sum + cat.items.length,
  0
);
