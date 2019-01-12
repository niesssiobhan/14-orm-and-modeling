'use strict';

const mongoose = require('mongoose');
require('mongoose-schema-jsonschema')(mongoose);

const categories = mongoose.Schema({
  name: { type:String, required:true },
  type: { type:String, required:true },
}, {toObject:{virtuals:true}, toJSON:{virtuals:true}});

categories.virtual('products', {
  ref: 'products',
  localField: 'name',
  foreignField: 'category',
  justOne: false,
});

categories.pre('find', function(){
  try {
    this.populate('products');
  }
  catch(e) {console.log('f error', e);}
});

categories.pre('save', function(next) {
  if (this.name === 'cars'){
    this.name = 'vehicle';
  }
  next();
});

module.exports = mongoose.model('categories', categories);