const User = require('../models/user');
const calculateSimilarity = require('./calculateSimilarity');


const getSimilarUsers = async function (userId, N) {
    const users = await User.find({ _id: { $ne: userId } });
    let similarity = 0;
    const similarities = [];
    for(let i = 0; i < users.length; i++){
        similarity = await calculateSimilarity(userId, users[i]._id);
        similarities.push(
            {user: users[i], similarity: similarity}
        );
    };

    const similarUsers = similarities.sort((a, b) => b.similarity - a.similarity).slice(0, N);
    return similarUsers;
};


module.exports = getSimilarUsers;