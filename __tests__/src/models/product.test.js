'use strict';

const rootDir = process.cwd();
const product = require(`${rootDir}/src/models/products.js`);

const supergoose = require('../supergoose.js');

beforeAll(supergoose.startDB);
afterAll(supergoose.stopDB);

describe('Products Model', () => {
  it('can post() a new product', () => {
    let obj = {name:'Teagan', description:'toddler', type:'lady'};
    let product = new Products();
    return product.post(obj)
      .then(record => {
        Object.keys(obj).forEach(key =>{
          expect(record[key]).toEqual(obj[key]);
        });
      });
  });

  it('can get() a product', () => {
    let obj = {name:'Teagan', description:'toddler', type:'lady'};
    let product = new Products();
    return product.post(obj)
      .then(record => {
        return product.get(record._id)
          .then(product => {
            Object.keys(obj).forEach(key =>{
              expect(product[0][key]).toEqual(obj[key]);
            });
          });
      });
  });
  
});