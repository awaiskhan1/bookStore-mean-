var express = require('express');
var mongoose = require('mongoose');
var cors = require('cors');
mongoose.connect('mongodb://localhost/mean-angular6', { promiseLibrary: require('bluebird') })
  .then(() =>  console.log('connection successful'))
  .catch((err) => console.error(err));


var createError = require('http-errors');
var path = require('path');
var bodyParser = require('body-parser');
var logger = require('morgan');
var favicon = require('serve-favicon');

var bookRoute = require('./routes/book');
var userRoute = require('./routes/user');
var photoRoute = require('./routes/photo');
var app = express();

app.use(cors());
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// configure the app to use bodyParser()
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json());
// app.use(express.static(path.join(__dirname, 'dist/mean-angular6')));
app.use(express.static(path.join(__dirname, '../')));
app.use('/', express.static(path.join(__dirname, '../')));

app.use('/api/book/', bookRoute);
app.use('/api/user/', userRoute);
app.use('/api/profile/', photoRoute);
// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});
// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};
  // render the error page
  res.status(err.status || 500);
  res.send(err.status);
});
module.exports = app;