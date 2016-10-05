/* Booze Model - Mongoose Schema*/
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var boozeSchema = new Schema({
  name: {type:String, required: true},
  description: {type: String},
  origin: {type:String, required: true},
  ingredients: {type:String, required: true},
  abv: Number,
  Safe: Boolean,
  image: {type: String, default: "http://www.nyan.cat/images/cat/4.gif"}
});

var boozeModel = mongoose.model('booze', boozeSchema);
module.exports = boozeModel;
