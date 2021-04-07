const Binary = require('../algorithms/search/Binary');

const search = (req, res) => {
  const { target } = req.body;

  if (!target) {
    return res.status(400).json({
      message: 'No searching string specified.',
    });
  }

  const searchAlgorithm = new Binary();
  return res.json(searchAlgorithm.search(target));
};

module.exports = search;
