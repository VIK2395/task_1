const express = require('express');
const characterController = require('../controllers/characterController');

const router = express.Router();

router.get('/', characterController.character_get_all);
router.get('/:id', characterController.character_get_one);
router.post('/', characterController.character_post);
router.put('/:id', characterController.character_put);
router.delete('/:id', characterController.character_delete);

module.exports = router;
