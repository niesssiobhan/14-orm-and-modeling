'use strict';

const express = require('express');
const modelFinder = require('../middleware/model-finder.js');
const router = express.Router();

router.param('model', modelFinder);

router.get('/api/v1/:model', handleGetAll);
router.post('/api/v1/:model', handlePost);

router.get('/api/v1/:model/:id', handleGetOne);
router.put('/api/v1/:model/:id', handlePut);
router.delete('/api/v1/:model/:id', handleDelete);

/**
 *
 * Function get request to mongo database
 * @param request api request object
 * @param response api response object
 * @param next
 */
function handleGetAll(request,response,next) {
  request.model.get()
    .then( data => {
      const output = {
        count: data.length,
        results: data,
      };
      response.status(200).json(output);
    })
    .catch( next );
}

/**
 *
 * Function get request based on parameter in the database
 * @param request api request object
 * @param res api response object
 * @param next
 */
function handleGetOne(request,res,next) {
  let id = request.params.id;
  request.model.get(id)
    .then( result => res.status(200).json(result[0]) )
    .catch( next );
}

/**
 *
 * Function for posting to the database
 * @param request api request object
 * @param response api response object
 * @param next
 */
function handlePost(request,response,next) {
  request.model.post(request.body)
    .then( result => response.status(200).json(result) )
    .catch( next );
}

/**
 *
 * Function for updating based on the parameter to the database
 * @param request api request object
 * @param response api response object
 * @param next
 */
function handlePut(request,response,next) {
  request.model.put(request.params.id, request.body)
    .then( result => response.status(200).json(result) )
    .catch( next );
}

/**
 *
 * Function for deleting form the databse
 * @param request api request object
 * @param response api response object
 * @param next
 */
function handleDelete(request,response,next) {
  request.model.delete(request.params.id)
    .then( result => response.status(200).json(result) )
    .catch( next );
}

module.exports = router;