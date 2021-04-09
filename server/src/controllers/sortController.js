const sortAlgorithmFactory = require('../algorithms/SortAlgorithmFactory');

const sort = (req, res) => {
  const { algorithmtype, algorithmname, field, order, target } = req.query;

  if (!algorithmname) {
    return res.status(400).json({
      message: "No algorithm's name specified.",
    });
  }

  const sortAlgorithm = sortAlgorithmFactory.create(algorithmname);
  return res.json(sortAlgorithm.sort('Airport', 'asc'));
};

module.exports = sort;
