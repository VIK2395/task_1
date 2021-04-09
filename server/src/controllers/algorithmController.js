const SearchAlgorithmFactory = require('../algorithms/SearchAlgorithmFactory');
const SortAlgorithmFactory = require('../algorithms/SortAlgorithmFactory');

const algirithm = (req, res) => {
  const { algorithmtype, algorithmname, field, order, target } = req.query;

  if (!algorithmtype || !algorithmname) {
    return res.status(400).json({
      message: "No algorithm's type or name specified.",
    });
  }

  if (algorithmtype === 'sort') {
    const sortAlgorithm = SortAlgorithmFactory.create(algorithmname);
    return res.json(sortAlgorithm.sort(field, order));
  }

  if (algorithmtype === 'search') {
    if (algorithmname === 'binary' || algorithmname === 'binarywithsubstring') {
      SortAlgorithmFactory.create('quick').sort(field, 'asc');
    }
    const searchAlgorithm = SearchAlgorithmFactory.create(algorithmname);
    return res.json(searchAlgorithm.search(field, target));
  }

  return res.json({ message: 'Incorrect request parameters' });
};

module.exports = algirithm;
