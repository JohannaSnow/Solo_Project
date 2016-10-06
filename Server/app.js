var express = require('express');
var bodyParser = require('body-parser');
var urlencodedParser = bodyParser.urlencoded( { extended: true } );
var path = require('path');
var app = express();
var mongoose = require('mongoose');
//var PetModel = require('../models.PetModel'); //not necessary to have this here, need it in routers though!
var portDecision = process.env.PORT || 8000;

//json body parser
app.use(bodyParser.json());


//connect to database
var connection = require('../modules/connection');
mongoose.connect(connection);

//listen and port decision
app.listen(portDecision, function(){
  console.log('I can hear you', portDecision);
});

// // app.get --  serves the index -- get params
app.get( '/', function( req, res ){
  console.log ('base url hit');
res.sendFile( path.resolve( 'public/index.html' ) );
});

app.get('/vodka', function( req, res ){
  console.log ('vodka is hit');
  res.sendFile ( path.resolve( ' public/partials/vodka.html' ) );
});


app.use( express.static( 'public' ) );
