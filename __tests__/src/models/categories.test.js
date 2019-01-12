'use strict';

const rootDir = process.cwd();
const category = require(`${rootDir}/src/models/categories.js`);

const supergoose = require('../supergoose.js');

beforeAll(supergoose.startDB);
afterAll(supergoose.stopDB);

describe('Categories Model', () => {
  it('can post() a new category', () => {
    let obj = {name:'test', description:'a test!'};
    return category.post(obj)
      .then(record => {
        Object.keys(obj).forEach(key =>{
          expect(record[0][key]).toEqual(obj[key]);
        });
      })
      .catch(e => console.error('ERR', e) );
  });

  it('can get() a category', () => {
    let obj = {name:'test', description:'a test!'};
    return category.post(obj)
      .then(record => {
        return category.get(record._id)
          .then(category => {
            Object.keys(obj).forEach(key =>{
              expect(category[0][key]).toEqual(obj[key]);
            });
          });
      });
  });
 
  it('can put() a category', () => {
    let obj = {name:'test', description:'a test!'};
    return category.post(obj)
      .then(record => {
        record._id = 4;
        category.put(4, obj);
        return category.get(record._id)
          .then(category => {
            Object.keys(obj).forEach(key => {
              expect(category[0][key]).toEqual(obj[key]);
            });
          });
      });
  });
  
  it('can delete() a category', () => {
    let obj = {name:'Teagan', description:'toddler', type:'lady'};
    return category.post(obj)
      .then(record => {
        record._id = 4;
        category.delete(4);
        return category.get(record._id)
          .then(category => {
            expect(category).toBeNull;
          });
      });
  });
});