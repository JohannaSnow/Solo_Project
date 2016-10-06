var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var urlencodedparser = bodyParser.urlencoded({extended: false});

// require model
var booze = require('../Models/booze');

// use body-parser
router.use(urlencodedparser);
router.use(bodyParser.json());

// get route
router.get('/:id', function(req, res){
  console.log('in router get');

  console.log(req.params);

  
