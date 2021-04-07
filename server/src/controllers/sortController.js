const sortAlgorithmFactory = require('../algorithms/SortAlgorithmFactory');

const sort = (req, res) => {
  const { algorithm } = req.query;

  console.log('from sort');
  console.log('algorithm: ', algorithm);

  if (!algorithm) {
    return res.status(400).json({
      message: 'Incorrect algorithm name.',
    });
  }

  const sortAlgorithm = sortAlgorithmFactory.create(algorithm);
  return res.json(sortAlgorithm.sort());
};

module.exports = sort;
