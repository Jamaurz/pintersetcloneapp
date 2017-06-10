var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var Event = new Schema({
    place: String,
    user: []
});

module.exports = mongoose.model('Event', Event);