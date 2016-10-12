var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var urlencodedparser = bodyParser.urlencoded({extended: false});
// var path = require('path');

console.log('in booze router');

// require model
var Booze = require('../Models/boozeModel');

// use body-parser
router.use(urlencodedparser);
router.use(bodyParser.json());


//get route
router.get('/:id', function(req, res){
  console.log('in router get');


    Booze.find({type: req.params.id}, function(err, boozeResults) {
    if(err){
      console.log(err);
      res.sendStatus(500);
    }else{
      console.log('this is the booze you were looking for!');
      res.send(boozeResults);
    } // end else
  }); // end of find
}); // end of get


  // / // post route
  router.post('/', function(req, res){
    console.log('in router post');

    var receivedBooze = req.body;
    console.log('req.body:', receivedBooze);

  //   // create newBooze
    var newBooze = new Booze({
      name: receivedBooze.name,
      type: receivedBooze.type,
      description: receivedBooze.description,
      origin: receivedBooze.origin,
      ingredients: receivedBooze.ingredients,
      abv: receivedBooze.abv,
      safe: receivedBooze.safe,
      image: receivedBooze.image
    }); // end create newBooze
    console.log('Schema:', newBooze);

    // save newBooze to database
    newBooze.save(function(err){
      if(err){
        console.log(err);
        res.sendStatus(500);
      } else {
        console.log('newBooze stored');
        res.sendStatus(201);
      } // end else
    }); // end save newBooze
  }); // end post route

  // put route
router.put('/', function(req, res){
  console.log('in put router');

  var condition = {_id: req.body._id};
  var update = {name: req.body.name, type: req.body.type, description: req.body.description,
  origin: req.body.origin, ingredients: req.body.ingredients, abv: req.body.abv, safe: req.body.safe,
  image: req.body.image};

  // update selected booze
  Booze.update(condition, update, function(err){
    if(err){
      console.log(err);
      res.sendStatus(500);
    } else {
      console.log('booze updated');
      res.sendStatus(201);
    }
  }); // end update selected booze
}); // end put route


// delete route
router.delete('/', function(req, res){
  console.log('in delete router');



  // remove selected booze
  Booze.remove({_id: req.body._id}, function(err){
    if(err){
      console.log(err);
      res.sendStatus(200);
    } else {
      console.log('Booze deleted');
      res.sendStatus(204);
    }//end else
  }); // end remove selected booze
}); // end delete route

module.exports = router;
