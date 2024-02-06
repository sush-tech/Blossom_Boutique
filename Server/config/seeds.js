const db = require('./connection');
const { User, Product, Category } = require('../models');
const cleanDB = require('./cleanDB');

db.once('open', async () => {
  await cleanDB('Category', 'categories');
  await cleanDB('Product', 'products');
  await cleanDB('User', 'users');

  const categories = await Category.insertMany([
    { name: 'Valentines Day' },
    { name: 'Deal Of The Day' },
    { name: 'Birthday' },
    { name: 'Sympathy' },
    { name: 'Flowers' },
    { name: 'Plants & Gifts' }
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
      image: 'Client/public/images/12-classic-red-roses.webp',
      category: categories[0]._id,
      price: 39.99,
      quantity: 500
    },
    {
      name: 'Florists Choice Daily Deal',
      category: categories[1]._id,
      description:'Can’t decide? How about a surprise! Designer’s Choice Daily Deal is a creative mix of seasonal blooms arranged with the designer’s freshest selection. You get a perfect arrangement every time. Your arrangement will include the florists choice of fresh flowers.',
      image: 'deal-of-the-day.webp',
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
  //   {
  //     name: 'Tales at Bedtime',
  //     category: categories[3]._id,
  //     description:
  //       'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum ornare diam quis eleifend rutrum. Aliquam nulla est, volutpat non enim nec, pharetra gravida augue. Donec vitae dictum neque. Pellentesque arcu lorem, fringilla non ligula ac, tristique bibendum erat. Ut a semper nibh. Quisque a mi et mi tempor ultricies. Maecenas eu ipsum eu enim hendrerit accumsan at euismod urna.',
  //     image: 'bedtime-book.jpg',
  //     price: 9.99,
  //     quantity: 100
  //   },
  //   {
  //     name: 'Spinning Top',
  //     category: categories[4]._id,
  //     description: 'Ut vulputate hendrerit nibh, a placerat elit cursus interdum.',
  //     image: 'spinning-top.jpg',
  //     price: 1.99,
  //     quantity: 1000
  //   },
  //   {
  //     name: 'Set of Plastic Horses',
  //     category: categories[4]._id,
  //     description:
  //       'Sed a mauris condimentum, elementum enim in, rhoncus dui. Phasellus lobortis leo odio, sit amet pharetra turpis porta quis.',
  //     image: 'plastic-horses.jpg',
  //     price: 2.99,
  //     quantity: 1000
  //   },
  //   {
  //     name: 'Teddy Bear',
  //     category: categories[4]._id,
  //     description:
  //       'Vestibulum et erat finibus erat suscipit vulputate sed vitae dui. Ut laoreet tellus sit amet justo bibendum ultrices. Donec vitae felis vestibulum, congue augue eu, finibus turpis.',
  //     image: 'teddy-bear.jpg',
  //     price: 7.99,
  //     quantity: 100
  //   },
  //   {
  //     name: 'Alphabet Blocks',
  //     category: categories[4]._id,
  //     description:
  //       'Morbi consectetur viverra urna, eu fringilla turpis faucibus sit amet. Suspendisse potenti. Donec at dui ac sapien eleifend hendrerit vel sit amet lectus.',
  //     image: 'alphabet-blocks.jpg',
  //     price: 9.99,
  //     quantity: 600
  //   }
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
