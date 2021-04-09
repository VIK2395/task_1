const SearchAlgorithmFactory = require('../algorithms/SearchAlgorithmFactory');
const SortAlgorithmFactory = require('../algorithms/SortAlgorithmFactory');

const algirithms = (req, res) => {
  const { algorithmtype, algorithmname, field, order, target } = req.query;

  if (!algorithmtype || !algorithmname) {
    return res.status(400).json({
      message: "No algorithm's type or name specified.",
    });
  }

  if (algorithmtype === 'sort') {
    const sortAlgorithm = sortAlgorithmFactory.create(algorithmname);
    // case of field
    return res.json(sortAlgorithm.sort(field, order));
  }

  if (algorithmtype === 'search') {
    // sort data before search if binary algorithm used
    if (algorithmname === 'binary' || algorithmname === 'binarywithsubstring') {
      // case of field
      SortAlgorithmFactory.create('quick').sort(field, 'asc');
    }
    const searchAlgorithm = SearchAlgorithmFactory.create(algorithmname);
    return res.json(searchAlgorithm.search(field, target));
  }

  return res.json({ message: 'Incorrect request parameters' });
};

module.exports = algirithms;
