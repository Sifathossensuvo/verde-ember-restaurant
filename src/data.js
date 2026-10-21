const U = (id, w = 900) => `https://images.unsplash.com/photo-${id}?auto=format&fit=crop&w=${w}&q=75`

export const IMG = {
  hero: U('1414235077428-338989a2e8c0', 1000),
  interior: U('1517248135467-4c7edcad34c4', 1000),
  interior2: U('1555396273-367ea4eb4db5', 1000),
  chef: U('1577219491135-ce391730fb2c', 800),
  g: [
    U('1504674900247-0877df9cc836'), U('1546069901-ba9599a7e63c'), U('1565299624946-b28f40a0ae38'),
    U('1540189549336-e6e99c3679fe'), U('1567620905732-2d1ec7ab7445'), U('1517248135467-4c7edcad34c4'),
  ],
}

export const nav = [
  ['Story', '#story'], ['Menu', '#menu'], ['Chef', '#chef'], ['Gallery', '#gallery'], ['Reserve', '#reserve'], ['Visit', '#visit'],
]

export const marquee = ['Charcoal grilled', 'Garden herbs', 'Slow braised', 'Baked daily', 'River fish', 'Hand rolled', 'Smoked in-house']

export const stats = [
  { n: 12, s: '', l: 'years of fire and smoke' },
  { n: 48, s: '', l: 'dishes on the winter menu' },
  { n: 30, s: 'k+', l: 'plates served every year' },
  { n: 4.9, s: '', l: 'average guest rating', d: 1 },
]

export const signature = [
  { name: 'Smoked Hilsa', price: 1450, note: 'Padma hilsa, mustard leaf, burnt lime butter.', img: IMG.g[0] },
  { name: 'Charred Greens Bowl', price: 780, note: 'Kale, broccolini, basil oil, toasted seeds.', img: IMG.g[1] },
  { name: 'Ember Pizza', price: 990, note: 'Sourdough crust, smoked mozzarella, wild rocket.', img: IMG.g[2] },
  { name: 'Slow Beef Short Rib', price: 1850, note: 'Eight hours in the oven, red wine glaze.', img: IMG.g[3] },
]

export const menu = {
  Starters: [
    ['Roasted Pumpkin Soup', 'Coconut cream, sage crisps, pepita', 420],
    ['Burrata & Tomato', 'Heirloom tomato, basil, aged balsamic', 640],
    ['Crispy Prawn Skewers', 'Chili lime dip, spring onion', 780],
    ['Mushroom Toast', 'Wild mushroom, thyme, poached egg', 520],
  ],
  Mains: [
    ['Smoked Hilsa', 'Mustard leaf, burnt lime butter', 1450],
    ['Herb Grilled Chicken', 'Garlic mash, charred lemon, jus', 1090],
    ['Short Rib Pappardelle', 'Red wine ragu, parmesan, parsley', 1280],
    ['Wild Mushroom Risotto', 'Truffle oil, aged parmesan', 960],
  ],
  Desserts: [
    ['Pistachio Basque Cheesecake', 'Burnt top, pistachio cream', 560],
    ['Dark Chocolate Pot', 'Sea salt, olive oil, toasted bread', 520],
    ['Mint & Lime Sorbet', 'Garden mint, crushed pistachio', 380],
  ],
  Drinks: [
    ['Green Ember Cooler', 'Cucumber, mint, lime, ginger soda', 340],
    ['Smoked Lemonade', 'Charred lemon, honey, sparkling water', 360],
    ['Basil Cold Brew', 'Single-origin coffee, basil syrup', 390],
    ['Masala Tea Pot', 'Whole spices, jaggery, fresh milk', 280],
  ],
}

export const process = [
  { t: 'We start with the farm', d: 'Vegetables and herbs come from three partner farms outside Savar, picked the same morning.' },
  { t: 'Fire does the talking', d: 'Our oven burns local hardwood, so every dish gets a gentle smoke without any shortcuts.' },
  { t: 'Plates leave fast', d: 'Small batches, no heat lamps. If it sits for more than two minutes, we make it again.' },
]

export const testimonials = [
  { q: 'The hilsa alone is worth the drive. We came for a quick dinner and stayed for three hours.', a: 'Nusrat Jahan', r: 'Food blogger' },
  { q: 'Finally a place in Dhaka where the staff actually know the menu and the room feels calm.', a: 'Tahmid Rahman', r: 'Regular since 2019' },
  { q: 'We booked our anniversary here. The corner table by the herb wall was perfect.', a: 'Farzana & Imran', r: 'Dinner for two' },
]

export const faqs = [
  ['Do I need to book a table?', 'Walk-ins are welcome, but weekends fill up fast. Booking above takes under a minute.'],
  ['Do you have vegetarian and vegan options?', 'Yes. About a third of our menu is plant-based, and the kitchen can adjust most dishes.'],
  ['Is the food halal?', 'All meat is halal certified and we do not serve alcohol.'],
  ['Can I host a private dinner?', 'Our garden room seats up to 24. Message us with your date and we will send a menu.'],
  ['Is there parking?', 'We have free valet parking for up to 20 cars every evening.'],
]
