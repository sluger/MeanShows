var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var Show = mongoose.model('Show');

router.get('/api/v1/shows', function(req, res, next) {
  Show.find(function(err, shows){
    if(err){
      return next(err);
    }
    res.json(shows);
  });
});

router.get('*', function(req, res) {
    res.sendfile('./public/index.html');
});

module.exports = router;
