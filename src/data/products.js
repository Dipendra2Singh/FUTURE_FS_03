const products = [
  {
    id: 'p1',
    title: 'UltraView 55" 4K Smart TV',
    price: 49999.99,
    desc: 'Crisp 4K UHD resolution with built-in streaming apps and HDR support.',
    img: 'https://images.pexels.com/photos/5202925/pexels-photo-5202925.jpeg?_gl=1*1eaxp4r*_ga*MTQxNDU0OTIzMy4xNzQzMjUzMTA2*_ga_8JE65Q40S6*czE3NTQ5Mjk1NTYkbzMkZzEkdDE3NTQ5Mjk1OTIkajI0JGwwJGgw',
    rating: 4.7
  },
  {
    id: 'p2',
    title: 'AeroBook Pro Laptop 15"',
    price: 89999.99,
    desc: 'Lightweight performance laptop with Intel i7 and 16GB RAM.',
    img: 'https://images.pexels.com/photos/18105/pexels-photo.jpg?_gl=1*17w5fkv*_ga*MTQxNDU0OTIzMy4xNzQzMjUzMTA2*_ga_8JE65Q40S6*czE3NTQ5Mjk1NTYkbzMkZzEkdDE3NTQ5Mjk2NjUkajQ3JGwwJGgw',
    rating: 4.6
  },
  {
    id: 'p3',
    title: 'Realme X3 Pro Smartphone',
    price: 70000.99,
    desc: 'Flagship smartphone with OLED display and triple camera setup.',
    img: 'https://images.pexels.com/photos/33376221/pexels-photo-33376221.jpeg?_gl=1*12oxd50*_ga*MTQxNDU0OTIzMy4xNzQzMjUzMTA2*_ga_8JE65Q40S6*czE3NTQ5Mjk1NTYkbzMkZzEkdDE3NTQ5Mjk3NTYkajE3JGwwJGgw',
    rating: 4.8
  },
  {
    id: 'p4',
    title: 'ThunderSound Wireless Earbuds',
    price: 5998.99,
    desc: 'Noise-cancelling Bluetooth earbuds with 24-hour battery life.',
    img: 'https://images.pexels.com/photos/33384206/pexels-photo-33384206.jpeg?_gl=1*66zyto*_ga*MTQxNDU0OTIzMy4xNzQzMjUzMTA2*_ga_8JE65Q40S6*czE3NTQ5Mjk1NTYkbzMkZzEkdDE3NTQ5Mjk4NjUkajU1JGwwJGgw',
    rating: 4.5
  },
  {
    id: 'p5',
    title: 'ProVision 27" Gaming Monitor',
    price: 249999.99,
    desc: '165Hz refresh rate monitor with 1ms response time for smooth gameplay.',
    img: 'https://images.pexels.com/photos/7199194/pexels-photo-7199194.jpeg?_gl=1*1ohpjz4*_ga*MTQxNDU0OTIzMy4xNzQzMjUzMTA2*_ga_8JE65Q40S6*czE3NTQ5Mjk1NTYkbzMkZzEkdDE3NTQ5Mjk5MDQkajE2JGwwJGgw',
    rating: 4.6
  },
  {
    id: 'p6',
    title: 'ZoomX Digital Camera',
    price: 39999.99,
    desc: '24MP mirrorless camera with interchangeable lenses.',
    img: 'https://images.pexels.com/photos/274973/pexels-photo-274973.jpeg?_gl=1*1fh0kxz*_ga*MTQxNDU0OTIzMy4xNzQzMjUzMTA2*_ga_8JE65Q40S6*czE3NTQ5Mjk1NTYkbzMkZzEkdDE3NTQ5Mjk5NTUkajQ1JGwwJGgw',
    rating: 4.7
  },
  {
    id: 'p7',
    title: 'SoundWave Bluetooth Speaker',
    price: 8500.99,
    desc: 'Portable speaker with deep bass and waterproof design.',
    img: 'https://images.pexels.com/photos/6322727/pexels-photo-6322727.jpeg?_gl=1*1iw995b*_ga*MTQxNDU0OTIzMy4xNzQzMjUzMTA2*_ga_8JE65Q40S6*czE3NTQ5Mjk1NTYkbzMkZzEkdDE3NTQ5MzAwMjgkajQ5JGwwJGgw',
    rating: 4.6
  },
  {
    id: 'p8',
    title: 'MaxCharge Power Bank 20000mAh',
    price: 2500.99,
    desc: 'Fast-charging power bank with dual USB output.',
    img: 'https://images.pexels.com/photos/5948345/pexels-photo-5948345.jpeg?_gl=1*11pmu4d*_ga*MTQxNDU0OTIzMy4xNzQzMjUzMTA2*_ga_8JE65Q40S6*czE3NTQ5Mjk1NTYkbzMkZzEkdDE3NTQ5MzAwOTQkajQzJGwwJGgw',
    rating: 4.5
  },
  {
    id: 'p9',
    title: 'EliteSeries Gaming Console',
    price: 20800.99,
    desc: 'Next-gen console with ray tracing and 8K support.',
    img: 'https://images.pexels.com/photos/33357504/pexels-photo-33357504.png?_gl=1*u6sgrt*_ga*MTQxNDU0OTIzMy4xNzQzMjUzMTA2*_ga_8JE65Q40S6*czE3NTQ5Mjk1NTYkbzMkZzEkdDE3NTQ5MzAxMzAkajckbDAkaDA.',
    rating: 4.8
  },
  {
    id: 'p10',
    title: 'SmartFit Fitness Tracker',
    price: 5068.99,
    desc: 'Water-resistant tracker with heart rate monitor and GPS.',
    img: 'https://images.pexels.com/photos/5081914/pexels-photo-5081914.jpeg?_gl=1*x5vg3q*_ga*MTQxNDU0OTIzMy4xNzQzMjUzMTA2*_ga_8JE65Q40S6*czE3NTQ5Mjk1NTYkbzMkZzEkdDE3NTQ5MzAxNzckajQ5JGwwJGgw',
    rating: 4.4
  }
];

export default products;
