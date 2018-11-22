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
    itemName: 'Converse Allstar',
    imageUrl: 'https://d2h1pu99sxkfvn.cloudfront.net/b0/6321596/452430685_yXiTgmeIpK/P8.jpg',
    seller: 'Joe',
    categories: ['shoes, converse, man, woman, white'],
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
    itemName: 'Fluffy Bag',
    imageUrl: 'https://d2h1pu99sxkfvn.cloudfront.net/b0/2595907/393861769_0w7VdRx9l4/P8.jpg',
    seller: 'Anaïs',
    categories: ['bag, woman, yellow'],
    price: 65,
    uploadDate: 16/11/18,
    location: 'Chelsea',
    sizes: 'Onesize',
    colour: 'Yellow',
    //Users can comment on items
    comments: [
      {
        text: 'I love this model! It has always been my dream to own a Fluffy bag...',
        user: userIds[1]
      }
    ]
  },
  {
    // Created by Rafa
    createdBy: userIds[0],
    itemName: 'Supreme Sweater',
    imageUrl: 'hhttps://d2h1pu99sxkfvn.cloudfront.net/b0/2956179/447645345_HoWuSyhCY9/P8.jpg',
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
    imageUrl: 'https://d2h1pu99sxkfvn.cloudfront.net/b0/11275837/447558980_bWFakhlw87/P8.jpg',
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
    imageUrl: 'https://d2h1pu99sxkfvn.cloudfront.net/b0/83775/450585046_bRuKFOrj6J/P8.jpg',
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
    imageUrl: 'https://d2h1pu99sxkfvn.cloudfront.net/b0/9188814/442624682_8S569zTGmR/P8.jpg',
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
    itemName: 'Moschino Crossbody Bag',
    imageUrl: 'https://d2h1pu99sxkfvn.cloudfront.net/b0/10495940/446691501_a37gdJuYVN/P8.jpg',
    seller: 'Anaïs',
    categories: ['accsories, moschino, woman'],
    price: 450,
    uploadDate: 21/11/18,
    location: 'Chelsea',
    sizes: 'M',
    colour: 'Red',
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
    itemName: 'Adidas Shoes',
    imageUrl: 'https://d2h1pu99sxkfvn.cloudfront.net/b0/9689892/394340219_9CIyRe0K2w/P8.jpg',
    seller: 'Rafa',
    categories: ['shoes, adidas, man, green'],
    price: 1800,
    uploadDate: 21/11/18,
    location: 'Mayfair',
    sizes: '7',
    colour: 'Green',
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
    imageUrl: 'https://d2h1pu99sxkfvn.cloudfront.net/b0/10104977/450420483_S3mZNwTDPX/P8.jpg',
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
    imageUrl: 'https://d2h1pu99sxkfvn.cloudfront.net/b0/125324/449903590_cyF658Y2iJ/P8.jpg',
    seller: 'Joe',
    categories: ['accesories, socks, woman, men'],
    price: 55,
    uploadDate: 21/11/18,
    location: 'Aldgate East',
    sizes: 'M',
    colour: 'Yellow',
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
    imageUrl: 'https://d2h1pu99sxkfvn.cloudfront.net/b0/5643935/448032463_Gt37kITYiX/P8.jpg',
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
        user: userIds[2]
      }
    ]
  },
  {
    // Created by Rafa
    createdBy: userIds[0],
    itemName: 'NASA Baseball Cap',
    imageUrl: 'https://d2h1pu99sxkfvn.cloudfront.net/b0/4690975/389452263_8KI4MbBiAD/P8.jpg',
    seller: 'Rafa',
    categories: ['accesories, cap, woman, men'],
    price: 135,
    uploadDate: 21/11/18,
    location: 'Aldgate East',
    sizes: 'M',
    colour: 'Black',
    //Users can comment on items
    comments: [
      {
        text: 'Lovely!',
        user: userIds[1]
      }
    ]
  },
  {
    // Created by Rafa
    createdBy: userIds[0],
    itemName: 'Vintage Jacket',
    imageUrl: 'https://d2h1pu99sxkfvn.cloudfront.net/b0/9792232/445189427_ZnxSMBhimz/P8.jpg',
    seller: 'Rafa',
    categories: ['jackets, men'],
    price: 255,
    uploadDate: 21/11/18,
    location: 'Aldgate East',
    sizes: 'M',
    colour: 'Blue',
    //Users can comment on items
    comments: [
      {
        text: 'I want to have it!',
        user: userIds[1]
      }
    ]
  },
  {
    // Created by Rafa
    createdBy: userIds[0],
    itemName: 'Off-White Belt',
    imageUrl: 'https://d2h1pu99sxkfvn.cloudfront.net/b0/5070913/451844768_bFDSKuEBrx/P8.jpg',
    seller: 'Rafa',
    categories: ['accesories, men, women'],
    price: 43,
    uploadDate: 21/11/18,
    location: 'Aldgate East',
    sizes: 'S',
    colour: 'Yellow',
    //Users can comment on items
    comments: [
      {
        text: 'Best brand for belts!',
        user: userIds[1]
      }
    ]
  },
  {
    // Created by Joe
    createdBy: userIds[1],
    itemName: 'Black Hat ',
    imageUrl: 'https://d2h1pu99sxkfvn.cloudfront.net/b0/4987896/438329364_vLMOFyt7Ra/P8.jpg',
    seller: 'Joe',
    categories: ['accesories, men, women'],
    price: 22,
    uploadDate: 21/11/18,
    location: 'Aldgate East',
    sizes: 'M',
    colour: 'Black',
    //Users can comment on items
    comments: [
      {
        text: 'Puhhhhh!',
        user: userIds[0]
      }
    ]
  },
  {
    // Created by Joe
    createdBy: userIds[1],
    itemName: 'Christmas Sweater',
    imageUrl: 'https://d2h1pu99sxkfvn.cloudfront.net/b0/10698607/451885559_gGVzCv0d2O/P8.jpg',
    seller: 'Joe',
    categories: ['knitwear, sweater, men, women, christmas'],
    price: 58,
    uploadDate: 21/11/18,
    location: 'Aldgate East',
    sizes: 'M',
    colour: 'Grey',
    //Users can comment on items
    comments: [
      {
        text: 'My grandma has the same one!',
        user: userIds[2]
      }
    ]
  },
  {
    // Created by Joe
    createdBy: userIds[1],
    itemName: 'Cateye Sunglasses',
    imageUrl: 'https://d2h1pu99sxkfvn.cloudfront.net/b0/9982763/401213473_sdH6hrv14x/P8.jpg',
    seller: 'Joe',
    categories: ['glasses, women, summer'],
    price: 23,
    uploadDate: 21/11/18,
    location: 'Aldgate East',
    sizes: 'Onesize',
    colour: 'Blue',
    //Users can comment on items
    comments: [
      {
        text: 'Love them!',
        user: userIds[2]
      }
    ]
  },
  {
    // Created by Anaïs
    createdBy: userIds[2],
    itemName: 'Vintage Camera',
    imageUrl: 'https://d2h1pu99sxkfvn.cloudfront.net/b0/4573675/442137470_R9A1XgYKSV/P8.jpg',
    seller: 'Anaïs',
    categories: ['accessories, camera, women, men'],
    price: 250,
    uploadDate: 21/11/18,
    location: 'Chelsea',
    sizes: 'M',
    colour: 'Black',
    //Users can comment on items
    comments: [
      {
        text: 'Great item!',
        user: userIds[1]
      }
    ]
  },
  {
    // Created by Anaïs
    createdBy: userIds[2],
    itemName: 'Mac Lipstick',
    imageUrl: 'https://d2h1pu99sxkfvn.cloudfront.net/b0/10023738/451215613_PUupMY91n2/P8.jpg',
    seller: 'Anaïs',
    categories: ['accessories, makeup, women, mac'],
    price: 21,
    uploadDate: 21/11/18,
    location: 'Chelsea',
    sizes: 'Onesize',
    colour: 'Pink',
    //Users can comment on items
    comments: [
      {
        text: 'I love the color!',
        user: userIds[0]
      }
    ]
  },
  {
    // Created by Anaïs
    createdBy: userIds[2],
    itemName: 'Sparkling Dress',
    imageUrl: 'https://d2h1pu99sxkfvn.cloudfront.net/b0/4013754/439384219_IBs5XL8p3N/P8.jpg',
    seller: 'Anaïs',
    categories: ['dress, sparkle, women, green'],
    price: 65,
    uploadDate: 21/11/18,
    location: 'Chelsea',
    sizes: 'S',
    colour: 'Green',
    //Users can comment on items
    comments: [
      {
        text: 'Shine like a star!',
        user: userIds[1]
      }
    ]
  },
  {
    // Created by Anaïs
    createdBy: userIds[2],
    itemName: 'Faux Fur Jacket',
    imageUrl: 'https://d2h1pu99sxkfvn.cloudfront.net/b0/805921/417870224_z4Vp0Zrxwn/P8.jpg',
    seller: 'Anaïs',
    categories: ['jacket, faux-fur, women, blue'],
    price: 35,
    uploadDate: 21/11/18,
    location: 'Chelsea',
    sizes: 'S',
    colour: 'Blue',
    //Users can comment on items
    comments: [
      {
        text: 'So cosy!',
        user: userIds[0]
      }
    ]
  },
  {
    // Created by Anaïs
    createdBy: userIds[2],
    itemName: 'Banana Boxershorts',
    imageUrl: 'https://d2h1pu99sxkfvn.cloudfront.net/b0/40785/395506705_mjqKns82FG/P8.jpg',
    seller: 'Anaïs',
    categories: ['boxershorts, banana, men, blue, yellow'],
    price: 35,
    uploadDate: 21/11/18,
    location: 'Chelsea',
    sizes: 'M',
    colour: 'Blue',
    //Users can comment on items
    comments: [
      {
        text: 'I love bananas!',
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
