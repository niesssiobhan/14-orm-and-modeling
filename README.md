![CF](http://i.imgur.com/7v5ASc8.png) LAB
=================================================

## ORM and Modeling

### Author: Siobhan Niess

### Links and Resources
* [repo](https://github.com/niesssiobhan/14-orm-and-modeling)
* [travis](https://travis-ci.com/niesssiobhan/14-orm-and-modeling)
* [back-end](https://git.heroku.com/niess-14-lab.git) (when applicable)

#### Documentation
* [swagger](http://xyz.com) (API assignments only)
* [jsdoc](http://xyz.com) (All assignments)

### Modules
#### `index.js`
#### `app.js`
#### `categories.js`
#### `products.js`
#### `model.js`
#### `categories-schema.js`
#### `products-schema.js`
#### `model-finder.js`
#### `v1.js`
##### Exported Values and Methods

### Setup
#### `.env` requirements
* `PORT` - Port Number 3000
* `MONGODB_URI` - MONGODB_URI=mongodb://localhost:27017/store

#### Running the app
* theinstallastions that you will have to are going to be `htppie`, `nodemon`, `mongo db`
    * these are going to allow you to run the app
* in your terminal you are going to want to run the command `nodemon index.js`   
* open up another terminal window/tab and run the command `http :3000`
* to start up mongo db:
    * `start mongodb path <file path to database>`
    * `start mongodb` (this will be in another window/tab of your terminal)
    * `start dbs`
    * `run: db.products.find().pretty();` (this will be to print all itmes in db)
* GET: see all with categories or products or request an id
    * enter `http GET :3000/api/v1/categories` or `http GET :8080/api/v1/categories/<id>`
* POST: add an item to categories or products
    * category, enter `echo '{"name":"Category Name","description":"Category Description"}' |http POST :3000/api/v1/categories`
    * product, enter `echo '{"name":"Product Name","description":"Product Description"}' |http POST :3000/api/v1/products`
* PUT: update a record in products (/api/v1/products) or categories (/api/v1/categories).
    * update a product, enter `echo '{"name":"Product Name","description":"Product Description"}' |http PUT :3000/api/v1/products`
    * update a category, enter `echo '{"name":"Category Name","description":"Category Description"}' |http PUT :3000/api/v1/categories`
* DELETE: delete a record in categories or products
    * delete a record, enter http DELETE :3000/api/v1/products/<id>
  
#### Tests
* How do you run tests?
* What assertions were made?
* What assertions need to be / should be made?