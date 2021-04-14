const express = require('express');
const comicsController = require('../controllers/comicsController');

const router = express.Router();

router.get('/', comicsController.comics_get_all);
router.get('/:id', comicsController.comics_get_one);
router.post('/', comicsController.comics_post);
router.put('/:id', comicsController.comics_put);
router.delete('/:id', comicsController.comics_delete);

module.exports = router;
