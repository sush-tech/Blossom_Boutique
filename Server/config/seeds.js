const db = require('./connection');
const { User, Product, Category } = require('../models');
const cleanDB = require('./cleanDB');

db.once('open', async () => {
  await cleanDB('Category', 'categories');
  await cleanDB('Product', 'products');
  await cleanDB('User', 'users');

  const categories = await Category.insertMany([
    { name: 'Valentines Day' ,
      image:'Sweet_Memory_Planter.webp'
    },
    { name: 'Deal Of The Day',
      image:'Sweet_Memory_Planter.webp'
    },
    { name: 'Birthday',
      image:'Sweet_Memory_Planter.webp' 
    },
    { name: 'Sympathy',
      image:'Sweet_Memory_Planter.webp' 
    },
    { name: 'Flowers',
      image:'Sweet_Memory_Planter.webp' 
    },
    { name: 'Plants & Gifts',
      image:'Sweet_Memory_Planter.webp' 
    }
  ]);

  console.log('categories seeded');

  const products = await Product.insertMany([
    {
      name: 'Sweet Memory Planter',
      description:'What happens when you combine the beauty of fresh flowers with the elegance of lush plants? You get a gorgeous gift that will spread happiness for years to come. Send a lovely planter filled with three green plants and cut Dendrobium orchids.',
      image: 'Sweet_Memory_Planter.webp',
      category: categories[3]._id,
      price: 59.99,
      quantity: 500
    },
    {
      name: '12 Classic Red Roses',
      description:'Timeless and classic, red roses never go out of style. Set the tone for romance with a lovely gift that’s sure to delight. Lush red roses and baby’s breath are lavishly designed to create a moment they’ll never forget.',
      image: '12Roses.webp',
      category: categories[0]._id,
      price: 39.99,
      quantity: 500
    },
    {
      name: 'Florists Choice Daily Deal',
      category: categories[1]._id,
      description:'Can’t decide? How about a surprise! Designer’s Choice Daily Deal is a creative mix of seasonal blooms arranged with the designer’s freshest selection. You get a perfect arrangement every time. Your arrangement will include the florists choice of fresh flowers.',
      image: 'dailychoice.webp',
      price: 49.99,
      quantity: 20
    },
    {
      name: 'Sensational Smiles',
      category: categories[2]._id,
      description:'Smiles for miles! They’ll be extra giddy when they see this cheery surprise. Send it as a heartfelt thank you, for a big birthday, or anytime you want someone to jump for joy. Yellow roses, Dendrobium orchids, and more are arranged in a ceramic container.',
      image: 'sensational-smiles.webp',
      price: 36.99,
      quantity: 50
    },
    {
      name: 'Halcyon Hearts',
      category: categories[4]._id,
      description:'When words are not enough, let the flowers do the talking. A picture of grace and elegance, these soothing blooms are perfect for any occasion. Celebrate love and life with Halcyon Heart™. A beautiful all-white arrangement including lilies, roses, lisianthus, and more.',
      image: 'Halcyon-Heart.webp',
      price: 14.99,
      quantity: 100
    },
    {
      name: 'Succulent Zen Oasis',
      category: categories[5]._id,
      description:'A calm oasis for the office. A petite garden for the home. Colleagues and loved ones alike will be thrilled you sent these striking succulents. Zen vibes have never looked so good! Gift them five succulent plants arranged in a black ceramic dish and finished with river rocks.',
      image: 'Succluents.webp',
      price: 49.99,
      quantity: 30
    },
    {
      name: 'Fruit Basket',
      category: categories[5]._id,
      description:'Every bite is a delight! Gift them this tasty surprise filled to the brim with a delectable selection of high-quality fruits and snacks. It’ll arrive at their doorstep freshly packaged, beautifully arranged, and ready to eat. Sixteen pieces of assorted fruit and three additional snacks are carefully arranged in a basket.',
      image: 'fruit-basket.webp',
      price: 55.99,
      quantity: 30
    },
    {
      name: 'Romance Melody ',
      category: categories[0]._id,
      description: "Want to thrill the love of your life? Surprise them with these gem-toned beauties that will make their special day sparkle. Purple Peruvian lilies are arranged with stunning red spray roses and stock. Upgrade to Deluxe or Premium to add luxurious red roses.",
      image: 'romance_melody.webp',
      price: 39.99,
      quantity: 100
    },
    {
      name: 'Daisy Day Blush',
      category: categories[2]._id,
      description: 'Still looking for that perfect gift? Think pink! This blushing bouquet is a lovely indulgence when you want them to feel pampered and special. Delight them with Gerbera daisies, Stargazer lilies, and more arranged in a classic vase.',
      image: 'Daisy_day_blush.webp',
      price: 19.99,
      quantity: 1000
    },
    {
      name: 'Passionate Faith Sympathy',
      category: categories[3]._id,
      description:
        'A symbol of life everlasting, this standing wreath is a classic way to provide comfort and love during a difficult time. Celebrate the life and legacy of a loved one with our Passionate Faith Sympathy Wreath™.This standing sympathy wreath features red roses, white carnations, and fresh greenery.',
      image: 'Passionate_faith_sympathy.webp',
      price: 42.99,
      quantity: 100
    },
    {
      name: 'Soothing Spa Basket',
      category: categories[5]._id,
      description:'Ahhhh—a day at the spa. Give the gift of blissful relaxation with this soothing basket of goodies. They’ll feel so loved and pampered!Treat them to scented body wash, body lotion, a lovely scented candle, an exfoliating loofah, and more. Items may differ from those pictured due to local availability.',
      image: 'soothing_spa_basket.webp',
      price: 57.99,
      quantity: 100
    },
    {
      name: 'High-Rise Prize',
      category: categories[4]._id,
      description:'Take your gift to new heights! Sleek and dazzling, this showstopper makes a big statement. It’s sure to wow your loved one or dear friend—no matter the occasion.Stunning birds of paradise stand out among lilies, spray roses, and more.',
      image: 'high-rise-prize.webp',
      price: 29.99,
      quantity: 600
    }
  ]);

  console.log('products seeded');

  await User.create({
    firstName: 'John',
    lastName: 'Alex',
    email: 'John@testmail.com',
    password: 'password12345',
    orders: [
      {
        products: [products[0]._id, products[0]._id, products[1]._id]
      }
    ]
  });

  await User.create({
    firstName: 'Kyle',
    lastName: 'Grimes',
    email: 'Kyle@testmail.com',
    password: 'password12345'
  });

  console.log('users seeded');

  process.exit();
});
