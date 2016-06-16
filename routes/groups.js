var express = require('express');
var router = express.Router();

var unirest = require('unirest');

/* GET users listing. */
router.get('/', function(req, res, next) {
    var prefix = req.query.prefix || '';
    Request = unirest.get(process.env.endpoint + '/api/1/groups?prefix=' + req.query.prefix)
    .headers({'Accept': 'application/json', 'Content-Type': 'application/json'});

    Request.auth({
      user: process.env.apiUsername,
      pass: process.env.apiPassword,
      sendImmediately: true
    });
    Request.end(function(response){
      res.status(200).send(response.body);
    });
});

router.get('/:groupid', function(req, res, next) {
    var groupid = req.params.groupid || '';

    Request = unirest.get(process.env.endpoint + '/api/1/groups/' + groupid)
    .headers({'Accept': 'application/json', 'Content-Type': 'application/json'});

    Request.auth({
      user: process.env.apiUsername,
      pass: process.env.apiPassword,
      sendImmediately: true
    });
    Request.end(function(response){
      res.status(200).send(response.body);
    });
});

module.exports = router;
