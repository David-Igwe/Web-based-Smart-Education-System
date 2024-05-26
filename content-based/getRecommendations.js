const Topic = require('../models/topic');
const shuffleArray = require('../utilities/shuffleArray');

const recommendTopics = async function(user) {
    let ratings = user.ratings.filter(rating => rating.score < 3);
    shuffleArray(ratings);
    const potentialTopics = [];
    const similarTopics = [];
    let recommendedTopics = [];

    for(rating of ratings){
        const topic = await Topic.findById(rating.topic, '_id similarTopics');
        potentialTopics.push(topic);
        recommendedTopics.push(topic._id);
    };

    if(recommendedTopics.length >= 5){
        shuffleArray(recommendedTopics);
        recommendedTopics = recommendedTopics.slice(0, 4);
        return recommendedTopics;
    };

    for(potentialTopic of potentialTopics){
        similarTopics.push(...potentialTopic.similarTopics); 
    };

    for(similarTopic of similarTopics){
        if(similarTopic.id){
            recommendedTopics.push(similarTopic.id);
        }; 
    };

    shuffleArray(recommendedTopics);
    recommendedTopics = recommendedTopics.slice(0, 4)
    
    return recommendedTopics;
};


module.exports = recommendTopics;