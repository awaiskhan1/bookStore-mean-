var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var urlencodedParser = bodyParser.urlencoded({extended: false});



var User = require('../models/User.js');

router.get('/', (req, res, next) => {
  User.find(function (err, products) {
    if (err) return next(err);
    res.json(products);
  });
});

/* SAVE USER */
router.post('/signup/', (req, res, next) =>{
  	User.create(req.body, (err, post) => {
    	if (err) return next(err);
    		res.json(post);
  	});
});
/* LOGIN USER */
router.post('/login/', (req, res, next) =>{
	let email = req.body.email;
	let password = req.body.password;
	User.findOne({email: email}, (err, post) => {
		if (err) return next(err);
			res.json(post);
	});
});

module.exports = router;