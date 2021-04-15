const express = require('express');
const upload = require('../middleware/multer');
const characterController = require('../controllers/characterController');

const router = express.Router();

router.get('/', characterController.character_get_all);
router.get('/:id', characterController.character_get_one);
router.post('/', upload.single('image'), characterController.character_post);
router.put('/:id', upload.single('image'), characterController.character_put);
router.delete('/:id', characterController.character_delete);

module.exports = router;
