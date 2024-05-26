const mongoose = require('mongoose');
const passportLocalMongoose = require('passport-local-mongoose');
const Schema = mongoose.Schema;


const ratingSchema = new Schema({
    topic: { type: Schema.Types.ObjectId, ref: 'Topic' },
    score: Number
}, {_id: false})

const userSchema = new Schema({
    firstname: {
        type: String,
        required: true
    },
    lastname: {
        type: String,
        required: true
    },
    image: {
        url: String,
        filename: String
    },
    level: {
        type: Number,
        required: true
    },
    matNo: {
        type: String,
        unique: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    isTeacher: {
        type: Boolean,
        default: false
    },
    ratings: [ratingSchema]
});

userSchema.virtual('img').get(function () {
    return this.image.url.replace('/upload', '/upload/w_1200,ar_2:2,c_auto');
});

userSchema.plugin(passportLocalMongoose);

const User = mongoose.model('user', userSchema);

module.exports = User;