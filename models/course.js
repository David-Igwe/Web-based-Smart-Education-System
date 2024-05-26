const mongoose = require('mongoose');
const Topic = require('../models/topic');
const Schema = mongoose.Schema;

const opts = { toJSON: { virtuals: true } };

const courseSchema = new Schema({
    courseName: String,
    courseCode: String,
    image: {
        url: String,
        filename: String
    },
    topics: [{type: Schema.Types.ObjectId, ref: 'topic'}]
}, opts);

courseSchema.virtual('img').get(function () {
    return this.image.url.replace('/upload', '/upload/w_1200,ar_3:2,c_fill,g_face');
});

const Course = mongoose.model('course', courseSchema);

module.exports = Course;