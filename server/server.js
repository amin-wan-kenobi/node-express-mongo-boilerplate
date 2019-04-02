require('./config/config');

const _ = require('lodash');
const express = require('express');
const bodyParser = require('body-parser');
var { mongoose } = require('./db/mongoose.js');
const { ObjectID } = require('mongodb');

var app = express();
const port = process.env.PORT;

app.use(bodyParser.json());
app.use(bodyParser.text());

/**
 * @api {GET} /api/v3/ Get No Information
 * @apiGroup NO_USE
 * @apiVersion 3.0.0
 * @apiName NoAPI
 * @apiDescription This API does not do anything and it is for test only
 * @apiHeaderExample {string} Header-Example:
 * "Content-Type":"application/json"
 * @apiSuccess (Success-Response-body) {number} status Status should be 200 (Example)
 * @apiSuccess (Success-Response-body) {string} message Message should be Happy Coding
 * @apiSuccess (Success-Response-body) {json} passedQueries anydata passed as query parameters will be in json format
 * @apiSuccessExample {json} Success-Response-Body:
 * {
 *     status: 200,
 *     message: 'Happy Coding',
 *     passedQueries: {
 *          q1: 'value1',
 *          q2: 'value2'
 *     } 
 * }
 * @apiError (401) {json} ERROR Error query was received
 * @apiError (500) {json} NETWROK_ISSUE check the network
 * 
 * @apiErrorExample {json} Error-Response-Body:
 * {
 *  "error": {
 *      "code": "SOME_CODE",
 *      "message": "SOME_MESSAGE"
 *  }
 * }
 */
app.get('/', (req, res) => {
    if(req.query && req.query.error){
        res.status(401).send({
            error: {
                code: '1001',
                message: 'Error in query parameter'
            }
        })
    }else{
        res.send({
            status: 200,
            message: 'Happy Coding',
            passedQueries: req.query
        });
    }
});


app.listen(port, () => console.log(`Server started and listening to Port ${port}`));


module.exports = { app };