//CONNECTING TO MONGOOSE
const mongoose = require('mongoose');
const dbUrl = 'mongodb://127.0.0.1:27017/Project';
mongoose.connect(dbUrl)
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error'));
db.once('open', () => {
    console.log('Database connected');
});


//REQUIRING MODULES
const User = require('../models/user');
const Topic = require('../models/topic');
const Course = require('../models/course');
const courses = require('./courses');
const csc411 = require('./topics/CSC411')
const csc413 = require('./topics/CSC413')
const csc415 = require('./topics/CSC415')
const csc422 = require('./topics/CSC422')
const csc432 = require('./topics/CSC432')

//NEW COURSES
const seedDB = async function() {
    await Course.deleteMany({});
    await Course.insertMany(courses);

    // await Topic.deleteMany({});
    // await Topic.insertMany([...csc411, ...csc413, ...csc415, ...csc422, ...csc432])

    mongoose.connection.close();
};




seedDB();