# Web-based Smart Education System

This project is a web application predicated upon the power of three kinds of recommendation algorithms (collaborative-filtering recommendation algorithm, content-based recommendation algorithm, and the hybrid recommendation algorithm). By default, the hybrid recommendation algorithm (which is a combination of the previous two) is used, but in the [app.js](/app.js) file, the code for the remaining two are commented out.

```
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
```

One can easily comment out the hybrid section and un-comment any one you wish to use.

> [!CAUTION]
> Do not use more than one algorithm at the same time

## Recommendation Algorithms
For more on recommendation algorithms, [click here](https://en.wikipedia.org/wiki/Recommender_system#:~:text=A%20recommender%20system%2C%20or%20a,pertinent%20to%20a%20particular%20user.)
