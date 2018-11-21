const mongoose = require('mongoose');
const env = require('../config/environment');
const Item = require('../models/item');
const User = require('../models/user');
mongoose.connect(env.dbUri);


const userIds = [
  '5be9860fcb16d525543ceda1',
  '5be9860fcb16d525543ceda2',
  '5be9860fcb16d525543ceda3'
];

const userData = [
  {
    _id: userIds[1],
    username: 'Joe',
    email: 'joe@joe',
    password: 'pass',
    itemsForSale: ['Nike Air Force 1'],
    location: 'Aldgate East',
    comments: [
      {
        text: 'Best seller ever!',
        user: userIds[0]
      }
    ]
  }, {
    _id: userIds[0],
    username: 'Rafa',
    email: 'rafa@rafa',
    password: 'pass',
    itemsForSale: ['Supreme Sweater'],
    location: 'Mayfair',
    comments: [
      {
        text: 'Nice guy!',
        user: userIds[2]
      }
    ]
  }, {
    _id: userIds[2],
    username: 'Anaïs',
    email: 'anais@anais',
    password: 'pass',
    itemsForSale: ['Céline Handbag'],
    location: 'Chelsea',
    comments: [
      {
        text: 'I love her style!',
        user: userIds[0]
      }
    ]
  }
];


const itemData = [
  {
    // Created by Joe
    createdBy: userIds[1],
    itemName: 'Nike Air Force 1',
    imageUrl: 'https://c.static-nike.com/a/images/t_PDP_1280_v1/f_auto/bzzopsvmjq8cmrc2z4rr/air-force-1-big-kids-shoe-Pw8c4R.jpg',
    seller: 'Joe',
    categories: ['shoes, nike, man, woman, white'],
    price: 80,
    uploadDate: 16/11/18,
    location: 'Aldgate East',
    sizes: '6',
    colour: 'White',
    //Users can comment on items
    comments: [
      {
        text: 'Nice Joe! I love these shoes!!',
        user: userIds[0]
      }
    ]
  },
  {
    // Created by Anaïs
    createdBy: userIds[2],
    itemName: 'Céline Handbag',
    imageUrl: 'https://www.purseblog.com/images/2017/08/Celine-Nano-Luggage-Tote-Red-2700.jpg',
    seller: 'Anaïs',
    categories: ['bags, céline, woman, red'],
    price: 1900,
    uploadDate: 16/11/18,
    location: 'Chelsea',
    sizes: 'M',
    colour: 'Red',
    //Users can comment on items
    comments: [
      {
        text: 'I love this model! It has always been my dream to own a Céline bag...',
        user: userIds[1]
      }
    ]
  },
  {
    // Created by Rafa
    createdBy: userIds[0],
    itemName: 'Supreme Sweater',
    imageUrl: 'http://streetwearmuse.com/image/cache/data/2017/Supreme/Sweaters/supreme-box-logo-sweater-gray-1-900x900.png',
    seller: 'Rafa',
    categories: ['sweater, supreme, man, grey'],
    price: 1000,
    uploadDate: 16/11/18,
    location: 'Mayfair',
    sizes: 'L',
    colour: 'Grey',
    comments: [
      {
        text: 'Nice one man!',
        user: userIds[2]
      }
    ]
  },
  {
    // Created by Anaïs
    createdBy: userIds[2],
    itemName: 'Chanel Espadrilles',
    imageUrl: 'https://cdn.shopify.com/s/files/1/1730/7399/products/chanellinenblacktipfront_800x800.jpg?v=1513530633',
    seller: 'Anaïs',
    categories: ['shoes, chanel, woman, beige'],
    price: 800,
    uploadDate: 21/11/18,
    location: 'Chelsea',
    sizes: '5.5',
    colour: 'Beige',
    //Users can comment on items
    comments: [
      {
        text: 'Craving these shoes!!!',
        user: userIds[0]
      }
    ]
  },
  {
    // Created by Anaïs
    createdBy: userIds[2],
    itemName: 'Hermès Silk Scarf',
    imageUrl: 'https://www.vintage-hermes-scarf.com/wp-content/uploads/2018/04/Paperoles-2017-H002079S-cw25-1.jpg',
    seller: 'Anaïs',
    categories: ['accesories, hermes, woman'],
    price: 1575,
    uploadDate: 21/11/18,
    location: 'Chelsea',
    sizes: '120cm * 120cm',
    colour: 'Multicoulour',
    //Users can comment on items
    comments: [
      {
        text: 'This would be so comfortable to wear around my neck!!!',
        user: userIds[1]
      }
    ]
  },
  {
    // Created by Anaïs
    createdBy: userIds[2],
    itemName: 'Vilebrequin Bikini',
    imageUrl: 'http://stylepuppe.com/wp-content/uploads/2012/04/REYERlooks_Vilebrequin_BikiniFleur_299Euro1.jpg',
    seller: 'Anaïs',
    categories: ['swimwear, vilbrequin, woman'],
    price: 300,
    uploadDate: 21/11/18,
    location: 'Chelsea',
    sizes: 'S',
    colour: 'Multicoulour',
    //Users can comment on items
    comments: [
      {
        text: 'I need to get this for my girlfriend. She would look so sexy in it !!!',
        user: userIds[1]
      }
    ]
  },
  {
    // Created by Anaïs
    createdBy: userIds[2],
    itemName: 'Uterqüe Crossbody Bag',
    imageUrl: 'https://i.pinimg.com/originals/23/c7/61/23c761d78c0415c111b0a000d415b9ae.jpg',
    seller: 'Anaïs',
    categories: ['accsories, uterque, woman'],
    price: 350,
    uploadDate: 21/11/18,
    location: 'Chelsea',
    sizes: 'M',
    colour: 'Black',
    //Users can comment on items
    comments: [
      {
        text: 'Perfect for clubbing!',
        user: userIds[0]
      }
    ]
  },
  {
    // Created by Rafa
    createdBy: userIds[0],
    itemName: 'Yeezy shoes',
    imageUrl: 'https://stockx.imgix.net/Adidas-Yeezy-Boost-350-V2-Zebra-Product.jpg?fit=fill&bg=FFFFFF&w=300&h=214&auto=format,compress&trim=color&q=90&dpr=2&updated_at=1538080256',
    seller: 'Rafa',
    categories: ['shoes, yeezy, man, white'],
    price: 1800,
    uploadDate: 21/11/18,
    location: 'Mayfair',
    sizes: '7',
    colour: 'White - Grey',
    comments: [
      {
        text: 'Love them!',
        user: userIds[2]
      }
    ]
  },
  {
    // Created by Joe
    createdBy: userIds[1],
    itemName: 'Nice Glasses that make you good Coders',
    imageUrl: 'http://www.wholesem.ac.uk/bartlett/casa/people/mphil-phd-students/Rob_Levy/Rob-Business-Small.jpg',
    seller: 'Joe',
    categories: ['accsories, glasses, woman, horn'],
    price: 5000,
    uploadDate: 21/11/18,
    location: 'Aldgate East',
    sizes: 'M',
    colour: 'Brown',
    //Users can comment on items
    comments: [
      {
        text: 'Damn he looks smart!',
        user: userIds[2]
      }
    ]
  },
  {
    // Created by Joe
    createdBy: userIds[1],
    itemName: 'Fingerless Gloves',
    imageUrl: 'https://d2droglu4qf8st.cloudfront.net/2016/12/310201/Punkys-Wristers-Crochet-Pattern_Large500_ID-1996149.jpg?v=1996149',
    seller: 'Joe',
    categories: ['accesories, gloves, woman, men'],
    price: 40,
    uploadDate: 21/11/18,
    location: 'Aldgate East',
    sizes: 'M',
    colour: 'Multicoulour',
    //Users can comment on items
    comments: [
      {
        text: 'So cozy!',
        user: userIds[2]
      }
    ]
  },
  {
    // Created by Joe
    createdBy: userIds[1],
    itemName: 'Banana Socks',
    imageUrl: 'https://images.asos-media.com/products/happy-socks-x-andy-warhol-socks/10250998-1-pink?$XL$?$XXL$&wid=300&fmt=jpeg&qlt=80,0&op_sharpen=0&resMode=sharp2&op_usm=1,0.4,6,1&iccEmbed=0&printRes=72',
    seller: 'Joe',
    categories: ['accesories, socks, woman, men'],
    price: 55,
    uploadDate: 21/11/18,
    location: 'Aldgate East',
    sizes: 'M',
    colour: 'Multicoulour',
    //Users can comment on items
    comments: [
      {
        text: 'I love bananas!',
        user: userIds[0]
      }
    ]
  },
  {
    // Created by Rafa
    createdBy: userIds[0],
    itemName: 'Baseball Cap',
    imageUrl: 'https://www.dhresource.com/0x0s/f2-albu-g6-M01-FB-F4-rBVaSFtgWT-ALa4LAAEOkvibEwk067.jpg/hot-brand-baseball-caps-be-cool-be-nice-popular.jpg',
    seller: 'Rafa',
    categories: ['accesories, cap, woman, men'],
    price: 186,
    uploadDate: 21/11/18,
    location: 'Aldgate East',
    sizes: 'M',
    colour: 'Black',
    //Users can comment on items
    comments: [
      {
        text: 'Stylish!',
        user: userIds[0]
      }
    ]
  }


];


//close to connection for the 3 types of models created and create items,
// usres, sellers:
Item.collection.drop();
User.collection.drop();


Item.create(itemData)
  .then(items => {
    console.log(`Created ${items.length} items`);
    User.create(userData)
      .then(users => {
        console.log(`Created ${users.length} users`);
        mongoose.connection.close();
      });
  });
