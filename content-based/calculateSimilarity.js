const calculateSimilarity = docVectors => {
    // number of results that you want to return.
    const MAX_SIMILAR = 5; 
    // min cosine similarity score that should be returned.
    const MIN_SCORE = 0.2;
    const data = {};
  
    for (let i = 0; i < docVectors.length; i += 1) {
      const documentVector = docVectors[i];
      const { id } = documentVector;
  
      data[id] = [];
    }
  
    for (let i = 0; i < docVectors.length; i += 1) {
      for (let j = 0; j < i; j += 1) {
        const idi = docVectors[i].id;
        const vi = docVectors[i].vector;
        const idj = docVectors[j].id;
        const vj = docVectors[j].vector;
        const similarity = vi.getCosineSimilarity(vj);
  
        if (similarity > MIN_SCORE) {
          data[idi].push({ id: idj, score: similarity });
          data[idj].push({ id: idi, score: similarity });
        }
      }
    }
  
    // finally sort the similar documents by descending order
    Object.keys(data).forEach(id => {
      data[id].sort((a, b) => b.score - a.score);
  
      if (data[id].length > MAX_SIMILAR) {
        data[id] = data[id].slice(0, MAX_SIMILAR);
      }
    });
  
    return data;
};

module.exports = calculateSimilarity;

//The recommended topics were saved to the database in order to minimize the amount of computation done by the request handling middleware, in a bid to improve performance.
