const express = require('express');
const router = express.Router();

const typeCtrl = require('../controllers/type');
const multer = require('../middleware/multer-config');
const auth = require('../middleware/auth');

router.post('/', typeCtrl.createType);

router.get('/', typeCtrl.getAllType);

router.delete('/:id', typeCtrl.deleteType);

module.exports = router;
