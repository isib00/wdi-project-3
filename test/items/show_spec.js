/* global api, expect, describe, it, beforeEach */

const Item = require('../../models/item');


const userIds = [
  '5be9860fcb16d525543ceda1',
  '5be9860fcb16d525543ceda2',
  '5be9860fcb16d525543ceda3'
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
    size: '6',
    colour: 'white',
    //Users can comment on items
    comments: [
      {
        text: 'Nice Joe! I love these shoes!!',
        user: userIds[0]
      }
    ]
  }
];

let itemId;

describe('Items SHOW', () => {

  beforeEach(done => {
    Item.remove({})
      .then(() => Item.create(itemData))
      .then(item => {
        itemId = item._id;
        done();
      });
  });




});
