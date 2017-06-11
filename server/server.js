// PACKAGES //
var path = require('path');
var fs = require('fs');
var express = require('express');
var cors = require('cors');
var bodyParser = require('body-parser');
var passport = require('passport');
var cookieParser = require('cookie-parser');
var session = require('express-session');
var mongoose = require('mongoose');

require('dotenv').load();

// IMPORTS //
var indexRoutes = require('./routes/index');

// CREATE APP //
var app = express();
require('./config/passport')(passport);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());

// Allow requests from any origin
app.use(cors({ origin: '*' }));

// MIDDLEWARE //
app.use(express.static(path.join(__dirname, '../public')));

mongoose.connect(process.env.MONGO_URI);
mongoose.Promise = global.Promise;

app.use(session({
	secret: 'secret',
	resave: false,
	saveUninitialized: true
}));

app.use(passport.initialize());
app.use(passport.session());

// ROUTES //
app.use('/', indexRoutes);

// ERROR HANDLER //
app.use(function (err, req, res, next) {
  res.status(err.status || 500);
});

module.exports = app;
