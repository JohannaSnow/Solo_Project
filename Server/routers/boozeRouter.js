var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var urlencodedparser = bodyParser.urlencoded({extended: false});

// require model
var booze = require('../Models/boozeModel');

// use body-parser
router.use(urlencodedparser);
// router.use(bodyParser.json());

// get route
router.get('/:id', function(req, res){
  console.log('in router get');

  console.log(req.params);

  // find booze
  // booze.find({accountNum: req.params.id}, function(err, dbResults){
  //   if(err){
  //     console.log(err);
  //     res.sendStatus(500);
  //   } else {
  //     console.log(dbResults);
  //     res.send(dbResults);
  //   }
}); // end find booze
}); // end get route

// post route
router.post('/', function(req, res){
  console.log('in router post');

  var receivedBooze = req.body;
  console.log('req.body:', receivedBooze);

  // create newBooze
  var newBooze = new Booze({
    name: receivedBooze.name,
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
    }
  }); // end save newBooze
}); // end post route

// put route
router.put('/', function(req, res){
  console.log('in post router');

  var condition = {_id: req.body.id};
  var update = {booze: req.body.booze};

  // update selected booze
  Booze.update(condition, update, function(err){
    if(err){
      console.log(err);
      res.sendStatus(500);
    } else {
      console.log('newBooze stored');
      res.sendStatus(201);
    }
  }); // end update to booze
}); // end put route



module.exports = router;
