'use strict';

const productSchema = require('./products-schema.js');
const dataModel = require('./model.js');

class Products extends dataModel {}

module.exports = new productSchema(productsSchema);