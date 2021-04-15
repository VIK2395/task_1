const Review = require('../models/Review');
const reviews = require('../database/Database').getData.reviews;

const review_get_all = (req, res) => {
  res.json(reviews);
};

const review_get_one = (req, res) => {
  const index = reviews.findIndex((item) => item.reviewId === req.params.id);
  if (index === -1) {
    return res.status(404).json({ message: 'Review with such an id not found' });
  }
  res.json(reviews[index]);
};

const review_post = (req, res) => {
  const item = new Review(req.body);
  reviews.push(item);
  res.status(201).json(item);
};

// PUT - fully overwrite a model, PATCH - just modifies a field of a model
const review_put = (req, res) => {
  const index = reviews.findIndex((item) => item.reviewId === req.params.id);
  if (index === -1) {
    return res.status(404).json({ message: 'Review with such an id not found' });
  }
  reviews[index] = new Review(req.body);
  res.json(reviews[index]);
};

const review_delete = (req, res) => {
  const index = reviews.findIndex((item) => item.reviewId === req.params.id);
  if (index === -1) {
    return res.status(404).json({ message: 'Review with such an id not found' });
  }
  reviews.splice(index, 1);
  res.json({ message: 'Review deleted' });
};

module.exports = {
  review_get_all,
  review_get_one,
  review_post,
  review_put,
  review_delete,
};
