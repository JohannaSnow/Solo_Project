var express = require('express');
var bodyParser = require('body-parser');
var urlencodedparser = bodyParser.urlencoded( { extended: true } );
var path = require('path');
var app = express();
var mongoose = require('mongoose');
var portDecision = process.env.PORT || 8000;

//json body parser and urlencodedparser
app.use(bodyParser.json());
app.use(urlencodedparser);

//use router
var boozeRouter = require('./routers/boozeRouter');
app.use('/booze', boozeRouter);

//set up Mongodb
var mongoURI = 'mongodb://localhost:27017/GFAR';
var mongoDB = mongoose.connect(mongoURI).connection;

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

// app.get( '/:id', function( req, res ){
//   console.log ('id hit');
// res.sendFile( path.resolve( 'public/views/partials/index.html' ) );
// });



// app.get('/home.html', function( req, res ){
//   console.log ('home is hit');
//   res.sendFile ( path.resolve( 'public/views/partials/home.html' ) );
// });
//
// app.get('/aboutUs.html', function( req, res ){
//   console.log ('about us is hit');
//   res.sendFile ( path.resolve( 'public/views/partials/aboutUs.html' ) );
// });




app.use( express.static( 'public' ) );
