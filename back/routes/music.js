const express = require('express');
const router = express.Router();

const musicCtrl = require('../controllers/music');
const multer = require('../middleware/multer-config');
const auth = require('../middleware/auth');

router.post('/', auth, multer, musicCtrl.createMusic);

router.get('/', auth, musicCtrl.getAllMusic);
router.get('/my', auth,  musicCtrl.getMyMusic);

router.delete('/:id', auth, musicCtrl.deleteMusic);

module.exports = router;
