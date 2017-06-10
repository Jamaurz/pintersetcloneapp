var path = require('path');
var passport = require('passport');
var app = require('express').Router();
var db = require('../utils/DataBaseUtils');

app.get('/', function (req, res) {
    res.sendFile(path.join(__dirname, '../../public/index.html'));
});

app.post('/getimgsowner', function(req, res) {
    var user = req.user.twitter.id;
    db.getImgsOwner(user, function(data) {
        res.send(data);
    });
});

app.get('/getimgs', function(req, res) {
    db.getImgs(function(data) {
        res.send(data);
    });
});

app.post('/removeimg', function(req, res) {
    var id = req.body.id;
    db.removeImg(id, function(data) {
        res.send(data);
    });
});

app.post('/addimage', function (req, res) {
    if(req.user) {
        db.addimage(req.body.image, req.user.twitter, function(data) {
            res.send(data);  
        });
    } else {
        res.send(false);
    }
});

app.get('/info', function (req, res) {
    if(req.user){
        res.send(req.user.twitter.displayName);    
    } else {
        req.send(false);   
    }
});

app.get('/logout', function (req, res) {
	req.logout();
	res.redirect('/');
});

app.get('/auth/twitter', passport.authenticate('twitter'));

// handle the callback after twitter has authenticated the user
app.get('/auth/twitter/callback',
    passport.authenticate('twitter', {
        successRedirect : '/',
        failureRedirect : '/'
    }));
        

module.exports = app;
