import type { MenuItem, SpecialOffer, Testimonial } from '../types';

export const menuItemsData: MenuItem[] = [
  // Starters
  { id: 'loaded-potato-skins', name: 'Loaded Potato Skins', description: 'Crispy potato skins baked to perfection, filled with cheddar cheese, bacon bits, and a dollop of sour cream.', price: 9.99, category: 'Starters' },
  { id: 'classic-poutine', name: 'Classic Poutine', description: 'A Canadian dream! Golden french fries smothered in rich, savory gravy and topped with authentic cheese curds.', price: 10.50, category: 'Starters' },
  { id: 'fried-pickle-spears', name: 'Fried Pickle Spears', description: 'Tangy dill pickles, beer-battered and fried until golden. Served with a zesty ranch dip.', price: 8.50, category: 'Starters' },

  // Potato Mains
  { id: 'shepherds-pie', name: 'Hearty Shepherd\'s Pie', description: 'A savory mix of ground lamb and vegetables in a rich gravy, topped with a fluffy blanket of creamy mashed potatoes.', price: 18.99, category: 'Potato Mains' },
  { id: 'ultimate-baked-potato', name: 'The Ultimate Baked Potato', description: 'A massive baked potato, fluffy on the inside and crispy on the outside. Load it up with your favorite toppings!', price: 14.99, category: 'Potato Mains' },
  { id: 'gnocchi-gorgonzola', name: 'Gnocchi with Gorgonzola Cream', description: 'Pillowy soft potato gnocchi tossed in a decadent gorgonzola cream sauce with toasted walnuts.', price: 17.50, category: 'Potato Mains' },

  // Hearty Mains
  { id: 'chicken-pot-pie', name: 'Chicken Pot Pie', description: 'Tender chicken and vegetables in a creamy sauce, all baked under a flaky, golden-brown pastry crust.', price: 16.99, category: 'Hearty Mains' },
  { id: 'braised-short-rib', name: 'Braised Short Rib', description: 'Fall-off-the-bone beef short rib slow-braised in red wine, served over our signature garlic mashed potatoes.', price: 24.99, category: 'Hearty Mains' },

  // Sides
  { id: 'garlic-mashed-potatoes', name: 'Garlic Mashed Potatoes', description: 'Creamy, buttery, and infused with the perfect amount of roasted garlic.', price: 5.99, category: 'Sides' },
  { id: 'truffle-parmesan-fries', name: 'Truffle Parmesan Fries', description: 'Crispy fries tossed in truffle oil, grated Parmesan cheese, and fresh parsley.', price: 7.99, category: 'Sides' },

  // Desserts
  { id: 'chocolate-potato-cake', name: 'Chocolate Potato Cake', description: 'A surprisingly moist and rich chocolate cake made with a secret ingredient: potatoes! Topped with chocolate ganache.', price: 8.99, category: 'Desserts' },
  { id: 'apple-crumble', name: 'Warm Apple Crumble', description: 'Sweet, tender apples baked with a cinnamon-spiced oat crumble topping. Served with a scoop of vanilla ice cream.', price: 7.50, category: 'Desserts' },
  
  // Beverages
  { id: 'homemade-iced-tea', name: 'Homemade Iced Tea', description: 'Freshly brewed black tea, lightly sweetened and served with a lemon wedge.', price: 3.50, category: 'Beverages' },
  { id: 'craft-soda', name: 'Local Craft Soda', description: 'Ask your server about our rotating selection of locally made craft sodas.', price: 4.50, category: 'Beverages' },
];

export const dailySpecialsData: SpecialOffer[] = [
    { title: 'The Potato Feast', description: 'A sampler of our three most popular potato dishes: Poutine, Shepherd\'s Pie, and Loaded Skins.', price: '$25.99' },
    { title: 'Comfort Combo', description: 'A bowl of our creamy tomato soup served with a gourmet grilled cheese sandwich on sourdough.', price: '$14.99' }
];

export const testimonialsData: Testimonial[] = [
    { name: 'Sarah J.', quote: 'This is my happy place! The food is always incredible and the staff are so friendly.', rating: 5 },
    { name: 'Mike R.', quote: 'The Shepherd\'s Pie is out of this world. Tastes just like my mom used to make, but better!', rating: 5 },
    { name: 'Emily C.', quote: 'Came here with friends and we loved everything. The chocolate potato cake is a must-try!', rating: 4 }
];
