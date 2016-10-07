/* Booze Model - Mongoose Schema*/
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var boozeSchema = new Schema({
  name: {type:String, required: true},
  type: {type:String, required: true},
  description: {type: String},
  origin: {type:String, required: true},
  ingredients: {type:String, required: true},
  abv: Number,
  safe: Boolean,
  image: {type: String, default: "http://winegifted.com/wp-content/uploads/2015/10/tequila-cat.jpeg"}
});

var boozeModel = mongoose.model('booze', boozeSchema);
module.exports = boozeModel;
