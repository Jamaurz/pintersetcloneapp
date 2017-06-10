var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var Image = new Schema({
    title: String,
    source: String,
    ownername: String,
    owner: String
});

module.exports = mongoose.model('Image', Image);