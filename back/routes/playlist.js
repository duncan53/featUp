const express = require('express');
const router = express.Router();

const playlistCtrl = require('../controllers/playlist');
const multer = require('../middleware/multer-config');
const auth = require('../middleware/auth');

router.post('/upload', auth, multer, playlistCtrl.createPlaylist);

router.get('/', playlistCtrl.getAllPlaylist);
router.get('/:id', playlistCtrl.getMyPlaylist);

router.delete('/:id', auth, playlistCtrl.deletePlaylist);

module.exports = router;
