const Topic = require('../models/topic');

const recommendTopics = async (currentUser, similarUsers) => {
    const potentialTopics = await Topic.find({ _id: { $nin: currentUser.ratings.map(rating => rating.topic) } });
  
    const predictions = [];

    for (const potentialTopic of potentialTopics) {
      let numerator = 0;
      let denominator = 0;
  
      for (const similarUser of similarUsers) {
        const similarity = similarUser.similarity;
        const rating = similarUser.user.ratings.find(rating => rating.topic.equals(potentialTopic._id));

        if (rating) {
          numerator += (rating.score * similarity);
          denominator += similarity
        }
      }
  
        const prediction = numerator / denominator;
        predictions.push({ topicId: potentialTopic._id, score: prediction });
    }
  
    const recommendedTopics = predictions.sort((a, b) => a.score - b.score).slice(0, 4);

    return recommendedTopics;
  }
 
module.exports = recommendTopics;

