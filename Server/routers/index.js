// /* Index router - serves the index.html page. */
var express = require('express');
var router = express.Router();
var path = require('path');

router.get('/', function(req, res) {
  console.log(path.join(__dirname, '../public/views/index.html'));
  var indexFile = path.join(__dirname, '../public/views/index.html');
  res.sendFile(indexFile);
});

module.exports = router;
