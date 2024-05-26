const Topic = require('../models/topic');
const natural = require('natural');
const Vector = require('vector-object');
const TfIdf = natural.TfIdf;
const tfidf = new TfIdf();

const topicVectors = async function() {
    
    const topics = await Topic.find({})

    topics.forEach(topic => {
      tfidf.addDocument(topic.keywords);
    });
  
    const topicVectors = [];
  
    for (let i = 0; i < topics.length; i++) {
      const topic = topics[i];
      const obj = {};
  
      const items = tfidf.listTerms(i);
  
      for (let j = 0; j < items.length; j++) {
        const item = items[j];
        obj[item.term] = item.tfidf;
      }
  
      const topicVector = {
        id: topic.id,
        vector: new Vector(obj)
      };
  
      topicVectors.push(topicVector);
    }

    return topicVectors
};


module.exports = topicVectors