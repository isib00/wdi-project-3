const mongoose = require('mongoose');
const env = require('../config/environment');
const Fish = require('../models/fish');
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
    username: 'Alex',
    email: 'alex@superdude.org.uk',
    password: 'pass'
  }, {
    _id: userIds[0],
    username: 'Grant',
    email: 'grant_is_great@btinternet.com',
    password: 'pass'
  }, {
    _id: userIds[2],
    username: 'Rob',
    email: 'rob@rob',
    password: 'pass'
  }
];

const fishData = [
  {
    // Created by Alex
    createdBy: userIds[1],
    name: 'Cod',
    latinName: 'Codus Fishiae',
    imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/b/bb/Blue_walleye.jpg',
    comments: [
      {
        user: userIds[0],
        text: 'This is cod awful 👎'
      }, {
        user: userIds[2],
        text: 'Leave this fish alone! It\'s great'
      }
    ]
  },
  {
    // Created by Grant
    createdBy: userIds[0],
    name: 'Herring',
    latinName: 'Herringa Ferosciae',
    imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/c/c5/Clupea_harengus_Gervais.flipped.jpg'
  }, {
    // Created by Alex
    createdBy: userIds[1],
    name: 'Clown Fish',
    latinName: 'Nemus Circiiandi',
    imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/2/29/Clown_Fish_Swimming.jpg'
  }
];
Fish.collection.drop();
User.collection.drop();

Fish.create(fishData)
  .then(fishes => {
    console.log(`Created ${fishes.length} fishes`);
    User.create(userData)
      .then(users => {
        console.log(`Created ${users.length} users`);
        mongoose.connection.close();
      });
  });
