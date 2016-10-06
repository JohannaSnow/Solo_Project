var express = require('express');
var bodyParser = require('body-parser');
var urlencodedParser = bodyParser.urlencoded( { extended: true } );
var path = require('path');
var app = express();
var mongoose = require('mongoose');
//var PetModel = require('../models.PetModel'); //not necessary to have this here, need it in routers though!
var portDecision = process.env.PORT || 8000;

//json body parser and urlencodedparser
app.use(bodyParser.json());
app.use(urlencodedparser);

//use router
var boozeRouter = require('./routers/boozeRouter');
app.use('/booze', boozeRouter);

//set up Mongodb
var mongoURI = 'mongodb://localhost:27017/GFARdb';         //////*******DOUBLE CHECK THIS/ DO YOU WaNT TO CHANGE IT TO A BOOZE DB INSTEAD???///////****
var mongoDB = mongoose.connect(mongoURI).connection;

//connect to database
var connection = require('../modules/connection');
mongoose.connect(connection);

// db error handling
mongoDB.on('error', function(err){
  console.log('mongoDB connection error:', err);
});
mongoDB.once('open', function(){
  console.log('mongoDB connection open');
});

//listen and port decision
app.listen(portDecision, function(){
  console.log('I can hear you', portDecision);
});

// // app.get --  serves the index -- get params
app.get( '/', function( req, res ){
  console.log ('base url hit');
res.sendFile( path.resolve( 'public/index.html' ) );
});

// app.get('/vodka', function( req, res ){
//   console.log ('vodka is hit');
//   res.sendFile ( path.resolve( ' public/partials/vodka.html' ) );
// });


app.use( express.static( 'public' ) );
