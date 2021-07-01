const express = require('express');
const router = express.Router();

const musicCtrl = require('../controllers/music');
const multer = require('../middleware/multer-config');
const auth = require('../middleware/auth');

router.post('/', multer, musicCtrl.createMusic);

router.get('/', musicCtrl.getAllMusic);
router.get('/:id', musicCtrl.getMyMusic);

router.delete('/:id', auth, musicCtrl.deleteMusic);

module.exports = router;
