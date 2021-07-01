const express = require('express');
const router = express.Router();

const styleCtrl = require('../controllers/style');
const multer = require('../middleware/multer-config');
const auth = require('../middleware/auth');

router.post('/', styleCtrl.createStyle);

router.get('/', styleCtrl.getAllStyle);

router.delete('/:id', styleCtrl.deleteStyle);

module.exports = router;
