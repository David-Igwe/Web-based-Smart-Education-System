const mongoose = require('mongoose');
const passportLocalMongoose = require('passport-local-mongoose');
const Schema = mongoose.Schema;

const ratingSchema = new Schema({
    topic: { type: Schema.Types.ObjectId, ref: 'Topic' },
    score: Number
}, {_id: false})

const testSchema = new Schema({
    matNo: String,
    ratings: [ratingSchema]
});

const Test = mongoose.model('test', testSchema);

module.exports = Test;