var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var urlencodedparser = bodyParser.urlencoded({extended: false});

// require model
var booze = require('../Models/boozeModel');

// use body-parser
router.use(urlencodedparser);
// router.use(bodyParser.json());         ////why oh why does this break the server?//////



// get route
// router.get('/:id', function(req, res){
//   console.log('in router get');
  router.get('/test', function(req, res) {
  console.log('in test');
//////////test test test test test test test test test test testity test test test ///////////////
  var booze = new boozeModel({
    name: 'Absolut',
    description: 'smooth',
    origin: 'Sweden',
    ingredients: 'winter wheat',
    abv: 40,
    safe: false,
    image: "http://pernod-ricard.com/files/gamme/i1g1_small_13.png"
  });


    booze.save(function(err) {
      if(err){
        console.log(err);
        res.sendStatus(500); // nope!
      }else{
        console.log('Absolut saved!');
        res.sendStatus(201); // 201 - created
      }
    });
// });

// GET /booooooozee
router.get('/', function(req, res) {
  console.log('in booze get');

  boozeModel.find({}, function(err, boozeResults) {
    if(err){
      console.log(err);
      res.sendStatus(500);
    }else{
      console.log('this is the booze you were looking for!');
      res.send(boozeResults);
    }
  });
});






  // console.log(req.params);
  // // post route
  // router.get('/', function(req, res){
  //   console.log('in router post');
  //
  //   var receivedBooze = req.body;
  //   console.log('req.body:', receivedBooze);
  //
  //   // create newBooze
  //   var newBooze = new Booze({
  //     name: receivedBooze.name,
  //     description: receivedBooze.description,
  //     origin: receivedBooze.origin,
  //     ingredients: receivedBooze.ingredients,
  //     abv: receivedBooze.abv,
  //     safe: receivedBooze.safe,
  //     image: receivedBooze.image
  //   }); // end create newBooze
  //   console.log('Schema:', sendBooze);
  // find booze
  // booze.find({accountNum: req.params.id}, function(err, dbResults){
  //   if(err){
  //     console.log(err);
  //     res.sendStatus(500);
  //   } else {
  //     console.log(dbResults);
  //     res.send(dbResults);
  //   }
// }); // end find booze
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
