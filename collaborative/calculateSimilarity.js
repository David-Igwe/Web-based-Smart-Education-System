const User = require('../models/user');

const calculateSimilarity = async function (userAId, userBId) {
    const userA = await User.findById(userAId);
    const userB = await User.findById(userBId);

    const commonTopics = userA.ratings.filter(rating => userB.ratings.some(rb => rb.topic.equals(rating.topic)));
    const topicIds = commonTopics.map(rating => rating.topic);

    const scoresA = topicIds.map(topicId => userA.ratings.find(rating => rating.topic.equals(topicId)).score);
    const scoresB = topicIds.map(topicId => userB.ratings.find(rating => rating.topic.equals(topicId)).score);

    const dotProduct = scoresA.reduce((acc, score, i) => acc + score * scoresB[i], 0);
    const squareSumA = Math.sqrt(scoresA.reduce((acc, score) => acc + score * score, 0));
    const squareSumB = Math.sqrt(scoresB.reduce((acc, score) => acc + score * score, 0));

    return dotProduct / (squareSumA * squareSumB);
};

module.exports = calculateSimilarity;