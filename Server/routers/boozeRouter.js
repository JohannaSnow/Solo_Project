var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var urlencodedparser = bodyParser.urlencoded({extended: false});
// var path = require('path');


// require model
var booze = require('../Models/boozeModel');

// use body-parser
router.use(urlencodedparser);
router.use(bodyParser.json());


//get route
router.get('/:id', function(req, res){
  console.log('in router get');


    booze.find({type: req.params.id}, function(err, boozeResults) {
    if(err){
      console.log(err);
      res.sendStatus(500);
    }else{
      console.log('this is the booze you were looking for!');
      res.send(boozeResults);
    }
  });
  });



module.exports = router;
