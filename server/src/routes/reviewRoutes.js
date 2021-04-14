const express = require('express');
const reviewController = require('../controllers/reviewController');

const router = express.Router();

router.get('/', reviewController.review_get);
router.post('/', reviewController.review_post);
router.put('/:id', reviewController.review_put);
router.delete('/:id', reviewController.review_delete);

module.exports = router;
