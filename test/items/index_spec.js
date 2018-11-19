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
    size: 'medium',
    colour: 'red',
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
    size: 'large',
    colour: 'Grey',
    comments: [
      {
        text: 'Nice one man!',
        user: userIds[2]
      }
    ]
  }
];

describe('Items INDEX', () => {

  beforeEach(done => {
    Item.remove({})
      .then(() => Item.create(itemData))
      .then(() => done());
  });

  it('should return a 200 response', done => {
    api.get('/api/items')
      .end((err, res) => {
        expect(res.status).to.eq(200);
        done();
      });
  });

});
