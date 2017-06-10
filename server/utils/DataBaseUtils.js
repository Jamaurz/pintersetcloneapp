var mongoose = require('mongoose');
var User = require('../models/user.js');
var Image = require('../models/image.js');

exports.find = function() {
    var res = User.find();
    return res;
}

exports.getImgsOwner = function(owner, callback) {
    Image.find({owner: owner}, function(err, doc) {
        if(err) throw err;
        callback(doc);
    });
}

exports.getImgs = function(callback) {
    Image.find(function(err, doc) {
        if(err) throw err;
        callback(doc);
    });
}

exports.removeImg = function(id, callback) {
    Image.findById(id, function (err, doc) {
        if (err) throw err;
    
        doc.remove(callback);
    })
}

exports.addimage = function(image, user, callback) {
        var newImage = new Image();
        newImage.title = image.title;
        newImage.source = image.source;
        newImage.owner = user.id;
        newImage.ownername = user.displayName;
        newImage.save(function(err) {
            if(err) throw err;
            callback(true);
        });
}