const Review = require('../models/Review');
const reviewCollection = require('../db/reviewCollection');

const review_get = (req, res) => {
  res.json(reviewCollection);
};

const review_post = (req, res) => {
  const { author, comicsDescribed, text } = req.body;
  const review = new Review(author, comicsDescribed, text);
  reviewCollection.push(review);
  res.status(201).json(review);
};

// PUT - fully overwrite a model, PATCH - just modifies a field of a model
const review_put = (req, res) => {
  const { author, comicsDescribed, text } = req.body;
  const index = reviewCollection.findIndex((item) => item.reviewId === req.params.id);
  if (index === -1) {
    return res.status(404).json({ message: 'Review with such an id not found' });
  }
  reviewCollection[index] = new Review(author, comicsDescribed, text);
  res.json(reviewCollection[index]);
};

const review_delete = (req, res) => {
  const index = reviewCollection.findIndex((item) => item.reviewId === req.params.id);
  if (index === -1) {
    return res.status(404).json({ message: 'Review with such an id not found' });
  }
  reviewCollection.splice(index, 1);
  res.json({ message: 'Review deleted' });
};

module.exports = {
  review_get,
  review_post,
  review_put,
  review_delete,
};
