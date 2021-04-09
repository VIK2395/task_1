const SearchAlgorithmFactory = require('../algorithms/SearchAlgorithmFactory');
const SortAlgorithmFactory = require('../algorithms/SortAlgorithmFactory');

const search = (req, res) => {
  const { target } = req.body;

  if (!target) {
    return res.status(400).json({
      message: 'No searching string specified.',
    });
  }

  const algorithm = 'binarywithsubstring'; // 'binary' | 'binarywithsubstring'
  const field = 'Airport';
  const target2 = 'Philadelp';

  // sort data before search if binary algorithm used
  if (algorithm === 'binary' || algorithm === 'binarywithsubstring') {
    const sortAlgorithm = SortAlgorithmFactory.create('quick');
    sortAlgorithm.sort(field, 'asc');
  }

  const searchAlgorithm = SearchAlgorithmFactory.create(algorithm);
  return res.json(searchAlgorithm.search(field, target2));
};

module.exports = search;
