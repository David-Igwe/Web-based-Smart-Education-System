const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const Course = require('../models/course');

const opts = { toJSON: { virtuals: true } };

const questionSchema = new Schema({
    question: String,
    options: [{
        text: String,
        isAnswer: Boolean,
    }],
    isCorrect: {
        type: Boolean,
        default: null
    }
}, {_id: false});

const topicSchema = new Schema({
    topicName: {
        type: String,
        required: true
    },
    url: {
        type: String,
        required: true
    },
    questions: [questionSchema],
    image: {
        url: String,
        filename: String
    },
    keywords: {
        type: String
    },
    similarTopics: [{
        id: Schema.Types.ObjectId,
        score: Number
    }],
    course: {type: Schema.Types.ObjectId, ref: 'course'}
}, opts);

topicSchema.virtual('img').get(function () {
    return this.image.url.replace('/upload', '/upload/w_1200,ar_3:2,c_fill,g_face');
});

const Topic = mongoose.model('topic', topicSchema);

module.exports = Topic;