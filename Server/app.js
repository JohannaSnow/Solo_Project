var express = require('express');
var bodyParser = require('body-parser');
var urlencodedParser = bodyParser.urlencoded( { extended: true } );
var path = require('path');
var app = express();
//var mongoose = require('mongoose');
//var PetModel = require('../models.PetModel'); //not necessary to have this here, need it in routers though!
var portDecision = process.env.PORT || 8000;

//json body parser
app.use(bodyParser.json());

//listen and port decision
app.listen(portDecision, function(){
  console.log('I can hear you', portDecision);
});

// // app.get --  serves the index -- get params
app.get( '/', function( req, res ){
  console.log ('base url hit');
res.sendFile( path.resolve( 'public/index.html' ) );
});



app.use( express.static( 'public' ) );
