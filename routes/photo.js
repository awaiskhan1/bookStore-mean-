var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var urlencodedParser = bodyParser.urlencoded({extended: false});
var multer  = require('multer')



var storage = multer.diskStorage({
	destination: function (req, file, cb) {
	cb(null, 'uploads')
	},
	filename: function (req, file, cb) {
	cb(null, file.fieldname + '-' + Date.now() + '.jpg')
	}
})

var upload = multer({ storage: storage }).single('profileImage')


router.post('/', function (req, res) {
	upload(req, res, function (err) {
		if (err instanceof multer.MulterError) {
		// A Multer error occurred when uploading.
		} else if (err) {
		// An unknown error occurred when uploading.
		}

		// Everything went fine.
		res.json({
			sucess:true,
			file:1
		})
	})
})

module.exports = router;