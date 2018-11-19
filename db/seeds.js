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
    catgories: ['shoes, nike, man, woman, white'],
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
    catgories: ['bags, céline, woman, red'],
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
    catgories: ['sweater, supreme, man, grey'],
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
