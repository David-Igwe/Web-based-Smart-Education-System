//ENVIRONMENT VARIABLES
if (process.env.NODE_ENV !== "production") {
    require('dotenv').config();
};

///SETTING UP EXPRESS AND MONGOOSE
const express = require('express');
const app = express();
const mongoose = require('mongoose');
const dbUrl = process.env.DB_URL;
mongoose.connect(dbUrl);
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'Connection error'));
db.once('open', () => {
    console.log('Database connected');
});

//SETTING UP EJS AND EJS-MATE
const path = require('path');
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, '/views'));
const ejsMate = require('ejs-mate');
app.engine('ejs', ejsMate);

//SETTING UP CLOUDINARY and MULTER
const cloudinary = require('cloudinary').v2;
const { CloudinaryStorage } = require('multer-storage-cloudinary');

cloudinary.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUNDINARY_API_SECRET
});

const storage = new CloudinaryStorage({
    cloudinary,
    params: {
        folder: 'Project',
        allowedFormats: ['jpeg', 'jpg', 'png']
    }
});

const multer = require('multer');
const upload = multer({ storage });

//SETTING UP METHOD-OVERRIDE
const methodOverride = require('method-override');
app.use(methodOverride('_method'));

//FORM DATA MIDDLEWARE
app.use(express.urlencoded({ extended: true }));

//SERVING STATIC ASSETS
app.use(express.static(path.join(__dirname, 'assets')));

//EXPRESS-SESSION CONFIGURATION
const MongoStore = require('connect-mongo');
const session = require('express-session');
const store = MongoStore.create({
    mongoUrl: dbUrl,
    crypto: { secret: process.env.SESSION_SECRET },
    touchAfter: 24 * 60 * 60
});
store.on("error", function (e) {
    console.log("Session Store Error", e);
});
const sessionConfig = {
    store,
    name: 'session',
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: true,
    cookie: {
        httpOnly: true,
        expires: 1000 * 60 * 60 * 24 * 7
    }
};
app.use(session(sessionConfig));



//MODELS
const User = require('./models/user');
const Course = require('./models/course');
const Topic = require('./models/topic');

//UTILITIES
const collaborative = require('./collaborative');
const contentBased = require('./content-based');
const {shuffleArray, mergeArrays} = require('./utilities');

//CONFIGURING PASSPORT AUTHENTICATION
const passport = require('passport');
const LocalStrategy = require('passport-local');
app.use(passport.initialize());
app.use(passport.session());
passport.use(new LocalStrategy(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

//FLASH CONFIGURATION
const flash = require('connect-flash');
app.use(flash());
app.use((req, res, next) => {
    res.locals.error = req.flash('error');
    res.locals.currentUser = req.user;
    res.locals.course = {};
    next();
});


//WRAPPER FUNCTION
function catchAsync(fn) {
    return (req, res, next) => {
        fn(req, res, next).catch(err => next(err));
    };
};

//ROUTE HANDLERS
app.get('/', catchAsync(async (req, res) => {
    let recommendedTopics = [];
    // COLLABORATIVE FILTERING
    // if(req.user){
    //     const similarUsers = await collaborative.getSimilarUsers(req.user._id, 3);
    //     const topics = await collaborative.recommendTopics(req.user, similarUsers);
    //     recommendedTopics = await Topic.find({_id: {$in : topics.map(topic => topic.topicId)}}).populate('course');
    //     shuffleArray(recommendedTopics);
    // }

    //CONTENT-BASED FILTERING
    // if(req.user){
    //     const topics = await contentBased.recommendTopics(req.user);
    //     recommendedTopics = await Topic.find({_id: {$in : topics}}).populate('course');
    // }

    //HYBRID
    if(req.user){
        const similarUsers = await collaborative.getSimilarUsers(req.user._id, 3);
        const topics = await collaborative.recommendTopics(req.user, similarUsers);
        const collaborativeTopics = topics.map(topic => topic.topicId);
        const contentBasedTopics = await contentBased.recommendTopics(req.user);

        hybridTopics = mergeArrays(collaborativeTopics, contentBasedTopics);
        shuffleArray(hybridTopics);
        hybridTopics = hybridTopics.slice(0, 4);
        recommendedTopics = await Topic.find({_id: {$in : hybridTopics}}).populate('course')
    }

    const courses = await Course.find({});
    res.render('index', { courses, recommendedTopics });
}));

app.get('/courses/:id', catchAsync(async (req, res) => {
    if (req.user) {
        const id = req.params.id;
        const course = await Course.findById({ _id: id }).populate('topics');
        res.render('course', { course });
    } else {
        res.redirect('/login');
    };

}));

app.post('/courses/:courseId/:topicId/:topicScore', catchAsync(async (req, res) => {
    const userId = req.user._id;
    const { topicId, topicScore } = req.params;
    const rating = {
        topic: topicId,
        score: topicScore
    };
    const user = await User.findById(userId);
    user.ratings.push(rating);
    await user.save();
    res.send(user.ratings);
}));

app.get('/signup', (req, res) => {
    res.render('signup');
});

app.post('/signup', upload.single('image'), catchAsync(async (req, res, next) => {
    let { username, firstname, lastname, level, matNo, email, password } = req.body.user;
    const { path, filename } = req.file;
    username = `${lastname} ${firstname}`;
    const image = { url: path, filename };
    const userInfo = { username, firstname, lastname, image, level, matNo, email };
    const newUser = await User.register(userInfo, password);
    req.login(newUser, function (err) {
        if (err) { return next(err) };
        res.redirect('/');
    });
}));

app.get('/login', (req, res) => {
    res.render('login');
});

app.post('/login', passport.authenticate('local', { failureFlash: true, failureRedirect: '/login' }), (req, res) => {
    res.redirect('/');
});

app.get('/logout', (req, res) => {
    req.logout((err) => {
        if (err) return next(err);
    });
    res.redirect('/');
});



//DEFAULT PAGE
app.all('*', (req, res, next) => {
    const err = new Error('Not Found');
    err.status = 404;
    next(err);
});

//ERROR HANDLING ROUTE
app.use((err, request, response, next) => {
    const { status = 500 } = err;
    if (!err.message) err.message = 'Something Went Wrong';
    response.status(status).send(err);
});

//LISTENING FOR CONNECTIONS TO THE SERVER
app.listen(3000, () => {
    console.log('Listening on port 3000');
});