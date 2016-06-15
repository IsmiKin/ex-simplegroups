var express = require('express');
var router = express.Router();

var unirest = require('unirest');

/* GET users listing. */
router.get('/', function(req, res, next) {
    var prefix = req.query.prefix || '';
    Request = unirest.get(process.env.kjuesEndpoint + '/api/1/groups?prefix=' + req.query.prefix)
    .headers({'Accept': 'application/json', 'Content-Type': 'application/json'});

    Request.auth({
      user: process.env.kjuesUsername,
      pass: process.env.kjuesPassword,
      sendImmediately: true
    });
    Request.end(function(response){
      console.log("returning smth");
      res.status(200).send(response.body);
    });
});

module.exports = router;
