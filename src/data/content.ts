export const RESTAURANT = {
  name: 'Tadka House',
  fullName: 'Tadka House Family Garden Restaurant',
  tagline: 'Where Every Meal Becomes A Celebration',
  subtitle:
    'Authentic flavours, unforgettable evenings, and premium family dining in the heart of Nagpur.',
  phone: '+91 82751 88287',
  phoneRaw: '918275188287',
  address: {
    line1: 'Trimurti Nagar Square, Beside Bhange Lawn',
    line2: 'Subhash Nagar, Trimurti Nagar',
    city: 'Nagpur',
    state: 'Maharashtra',
  },
  hours: '6:00 PM – 11:30 PM',
  rating: 4.8,
  reviewCount: '2400+',
  dining: ['Dine In', 'Takeaway', 'Delivery'],
  mapUrl:
    'https://www.google.com/maps/search/?api=1&query=Tadka+House+Family+Garden+Restaurant+Trimurti+Nagar+Nagpur',
  mapEmbed:
    'https://www.google.com/maps?q=Trimurti+Nagar+Square+Nagpur&output=embed',
  whatsapp: 'https://wa.me/918275188287?text=Hello%20Tadka%20House,%20I%20would%20like%20to%20book%20a%20table.',
  instagram: 'https://instagram.com',
  facebook: 'https://facebook.com',
};

export const NAV_LINKS = [
  { label: 'Home', path: '/' },
  { label: 'About', path: '/about' },
  { label: 'Menu', path: '/menu' },
  { label: 'Gallery', path: '/gallery' },
  { label: 'Reservations', path: '/reservations' },
  { label: 'Reviews', path: '/reviews' },
  { label: 'Contact', path: '/contact' },
];

export const WHY_CHOOSE_US = [
  {
    icon: 'Trees',
    title: 'Garden Dining',
    desc: 'Dine under the open sky in our lush outdoor garden seating designed for families.',
  },
  {
    icon: 'Music',
    title: 'Live Music',
    desc: 'Soulful live performances every evening to elevate your dining experience.',
  },
  {
    icon: 'Sparkles',
    title: 'Premium Service',
    desc: 'Attentive, warm hospitality that makes every guest feel truly special.',
  },
  {
    icon: 'Leaf',
    title: 'Fresh Ingredients',
    desc: 'Hand-picked produce and spices, sourced daily for authentic flavour.',
  },
  {
    icon: 'Users',
    title: 'Family Friendly',
    desc: 'A warm, welcoming space built for memorable family gatherings.',
  },
  {
    icon: 'ChefHat',
    title: 'Authentic Recipes',
    desc: 'Time-honoured recipes crafted by our kitchen with passion and precision.',
  },
];

export const SIGNATURE_DISHES = [
  {
    name: 'Paneer Angara',
    desc: 'Smoky charcoal-grilled paneer in a rich, fiery gravy.',
    price: '₹320',
    image: 'https://images.pexels.com/photos/12737799/pexels-photo-12737799.jpeg',
    tag: 'Veg',
  },
  {
    name: 'Chicken Lahori',
    desc: 'A legendary Punjabi classic — slow-cooked, deeply spiced.',
    price: '₹420',
    image: 'https://images.pexels.com/photos/29684985/pexels-photo-29684985.jpeg',
    tag: 'Non Veg',
  },
  {
    name: 'Veg Biryani',
    desc: 'Fragrant basmati layered with garden vegetables and saffron.',
    price: '₹280',
    image: 'https://images.pexels.com/photos/5410401/pexels-photo-5410401.jpeg',
    tag: 'Veg',
  },
  {
    name: 'Keema Kasturi',
    desc: 'Aromatic minced mutton simmered in royal Mughlai spices.',
    price: '₹480',
    image: 'https://images.pexels.com/photos/9609849/pexels-photo-9609849.jpeg',
    tag: 'Non Veg',
  },
  {
    name: 'Dal Tadka',
    desc: 'Our namesake — slow-cooked lentils finished with a sizzling tempering.',
    price: '₹220',
    image: 'https://images.pexels.com/photos/38108860/pexels-photo-38108860.jpeg',
    tag: 'Veg',
  },
  {
    name: 'Mutton Gharguti',
    desc: 'A rustic, home-style Maharashtrian mutton preparation.',
    price: '₹520',
    image: 'https://images.pexels.com/photos/28674568/pexels-photo-28674568.jpeg',
    tag: 'Non Veg',
  },
];

export const MENU_ITEMS = [
  // Starters - Veg
  { name: 'Paneer Tikka', desc: 'Char-grilled cottage cheese with mint chutney', price: '₹260', category: 'starters', type: 'veg' },
  { name: 'Crispy Corn', desc: 'Golden fried sweet corn tossed in spices', price: '₹180', category: 'starters', type: 'veg' },
  { name: 'Hara Bhara Kebab', desc: 'Spinach and green pea patties, lightly spiced', price: '₹220', category: 'starters', type: 'veg' },
  { name: 'Mushroom 65', desc: 'Crispy fried mushrooms in a fiery coating', price: '₹240', category: 'starters', type: 'veg' },
  // Starters - Non Veg
  { name: 'Chicken Tikka', desc: 'Tandoor-grilled chicken marinated in yogurt and spices', price: '₹320', category: 'starters', type: 'nonveg' },
  { name: 'Tandoori Wings', desc: 'Smoky barbecued wings with a tangy glaze', price: '₹280', category: 'starters', type: 'nonveg' },
  { name: 'Fish Amritsari', desc: 'Batter-fried fish with Punjabi spices', price: '₹380', category: 'starters', type: 'nonveg' },
  // Main Course - Veg
  { name: 'Paneer Angara', desc: 'Smoky charcoal-grilled paneer in fiery gravy', price: '₹320', category: 'maincourse', type: 'veg' },
  { name: 'Dal Tadka', desc: 'Slow-cooked lentils with sizzling tempering', price: '₹220', category: 'maincourse', type: 'veg' },
  { name: 'Kadai Paneer', desc: 'Paneer simmered in a robust kadai masala', price: '₹300', category: 'maincourse', type: 'veg' },
  { name: 'Malai Kofta', desc: 'Paneer dumplings in a creamy cashew gravy', price: '₹290', category: 'maincourse', type: 'veg' },
  { name: 'Veg Biryani', desc: 'Fragrant basmati with garden vegetables and saffron', price: '₹280', category: 'maincourse', type: 'veg' },
  // Main Course - Non Veg
  { name: 'Chicken Lahori', desc: 'Slow-cooked Punjabi chicken, deeply spiced', price: '₹420', category: 'maincourse', type: 'nonveg' },
  { name: 'Butter Chicken', desc: 'Tandoori chicken in a velvety tomato gravy', price: '₹400', category: 'maincourse', type: 'nonveg' },
  { name: 'Keema Kasturi', desc: 'Aromatic minced mutton in Mughlai spices', price: '₹480', category: 'maincourse', type: 'nonveg' },
  { name: 'Mutton Gharguti', desc: 'Rustic home-style Maharashtrian mutton', price: '₹520', category: 'maincourse', type: 'nonveg' },
  { name: 'Chicken Biryani', desc: 'Hyderabadi-style dum biryani with tender chicken', price: '₹340', category: 'maincourse', type: 'nonveg' },
  // Chinese
  { name: 'Veg Manchurian', desc: 'Crispy veg balls in a tangy Indo-Chinese sauce', price: '₹240', category: 'chinese', type: 'veg' },
  { name: 'Chilli Paneer', desc: 'Stir-fried paneer with peppers and soy', price: '₹260', category: 'chinese', type: 'veg' },
  { name: 'Veg Hakka Noodles', desc: 'Wok-tossed noodles with garden vegetables', price: '₹220', category: 'chinese', type: 'veg' },
  { name: 'Chicken Chilli', desc: 'Spicy battered chicken with garlic and chilli', price: '₹300', category: 'chinese', type: 'nonveg' },
  { name: 'Chicken Fried Rice', desc: 'Fragrant rice tossed with chicken and herbs', price: '₹260', category: 'chinese', type: 'nonveg' },
  // Desserts
  { name: 'Gulab Jamun', desc: 'Warm milk dumplings in rose-scented syrup', price: '₹120', category: 'desserts', type: 'veg' },
  { name: 'Sizzling Brownie', desc: 'Warm chocolate brownie with vanilla ice cream', price: '₹180', category: 'desserts', type: 'veg' },
  { name: 'Rasmalai', desc: 'Soft cheese discs in saffron-cardamom milk', price: '₹140', category: 'desserts', type: 'veg' },
  { name: 'Kulfi Falooda', desc: 'Traditional Indian ice cream with vermicelli', price: '₹160', category: 'desserts', type: 'veg' },
  // Beverages
  { name: 'Masala Chaas', desc: 'Spiced buttermilk with roasted cumin', price: '₹80', category: 'beverages', type: 'veg' },
  { name: 'Sweet Lassi', desc: 'Thick yogurt drink with a hint of cardamom', price: '₹90', category: 'beverages', type: 'veg' },
  { name: 'Fresh Lime Soda', desc: 'Refreshing lime with a choice of sweet or salty', price: '₹70', category: 'beverages', type: 'veg' },
  { name: 'Filter Coffee', desc: 'South Indian style strong filter coffee', price: '₹80', category: 'beverages', type: 'veg' },
];

export const MENU_CATEGORIES = [
  { id: 'all', label: 'All' },
  { id: 'veg', label: 'Veg' },
  { id: 'nonveg', label: 'Non Veg' },
  { id: 'chinese', label: 'Chinese' },
  { id: 'starters', label: 'Starters' },
  { id: 'maincourse', label: 'Main Course' },
  { id: 'desserts', label: 'Desserts' },
  { id: 'beverages', label: 'Beverages' },
];

export const GALLERY_IMAGES = [
  { src: 'https://images.pexels.com/photos/1414651/pexels-photo-1414651.jpeg', alt: 'Elegant restaurant table setting', span: 'tall' },
  { src: 'https://images.pexels.com/photos/262978/pexels-photo-262978.jpeg', alt: 'Fine dining ambience', span: 'normal' },
  { src: 'https://images.pexels.com/photos/70497/pexels-photo-70497.jpeg', alt: 'Gourmet Indian thali', span: 'normal' },
  { src: 'https://images.pexels.com/photos/958545/pexels-photo-958545.jpeg', alt: 'Restaurant interior lighting', span: 'tall' },
  { src: 'https://images.pexels.com/photos/941861/pexels-photo-941861.jpeg', alt: 'Chef plating a dish', span: 'normal' },
  { src: 'https://images.pexels.com/photos/1813466/pexels-photo-1813466.jpeg', alt: 'Outdoor garden dining', span: 'normal' },
  { src: 'https://images.pexels.com/photos/1307698/pexels-photo-1307698.jpeg', alt: 'Sizzling Indian curry', span: 'tall' },
  { src: 'https://images.pexels.com/photos/1583884/pexels-photo-1583884.jpeg', alt: 'Live music performance', span: 'normal' },
  { src: 'https://images.pexels.com/photos/1581384/pexels-photo-1581384.jpeg', alt: 'Tandoor bread', span: 'normal' },
  { src: 'https://images.pexels.com/photos/1410235/pexels-photo-1410235.jpeg', alt: 'Birthday celebration table', span: 'tall' },
  { src: 'https://images.pexels.com/photos/12737656/pexels-photo-12737656.jpeg', alt: 'Biryani close-up', span: 'normal' },
  { src: 'https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg', alt: 'Colorful cocktail', span: 'normal' },
];

export const REVIEWS = [
  {
    name: 'Rohit Sharma',
    rating: 5,
    text: 'The garden seating is absolutely magical in the evenings. Live music, great food, and the staff treated us like family. Our go-to place for celebrations.',
    date: '2 weeks ago',
  },
  {
    name: 'Priya Deshmukh',
    rating: 5,
    text: 'Paneer Angara is the best I have had in Nagpur. The ambience is premium and the service is impeccable. Worth every rupee.',
    date: '1 month ago',
  },
  {
    name: 'Amit Khaire',
    rating: 5,
    text: 'Booked a birthday celebration here. They decorated the table beautifully and the live music made the evening unforgettable. Highly recommended!',
    date: '3 weeks ago',
  },
  {
    name: 'Sneha Patil',
    rating: 4,
    text: 'Beautiful outdoor seating and authentic flavours. The Dal Tadka lives up to the name. Slightly busy on weekends but worth the wait.',
    date: '1 month ago',
  },
  {
    name: 'Vikram Joshi',
    rating: 5,
    text: 'Premium family dining at its finest. The mutton gharguti reminded me of home. Service was warm and attentive throughout.',
    date: '2 months ago',
  },
  {
    name: 'Anjali Rao',
    rating: 5,
    text: 'From the ambience to the plating, everything feels thoughtfully designed. The live music on weekends is a beautiful touch.',
    date: '5 days ago',
  },
];

export const FAQS = [
  {
    q: 'What are your opening hours?',
    a: 'We are open daily from 6:00 PM to 11:30 PM.',
  },
  {
    q: 'Do you take reservations?',
    a: 'Yes, you can reserve a table through our website, by calling us, or via WhatsApp.',
  },
  {
    q: 'Do you offer outdoor garden seating?',
    a: 'Yes, we have a beautiful family garden dining area available for all guests.',
  },
  {
    q: 'Is live music available every day?',
    a: 'Live music performances are a regular feature. Please contact us for the current weekly schedule.',
  },
  {
    q: 'Do you cater for birthday celebrations?',
    a: 'Absolutely. We specialise in birthday celebrations and can arrange decorations on request.',
  },
  {
    q: 'Do you offer delivery and takeaway?',
    a: 'Yes, we offer Dine In, Takeaway, and Delivery options.',
  },
];
