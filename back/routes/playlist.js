const express = require('express');
const router = express.Router();

const playlistCtrl = require('../controllers/playlist');
const multer = require('../middleware/multer-config');
const auth = require('../middleware/auth');

router.post('/', auth, playlistCtrl.createPlaylist);

router.put('/music/:id', auth, playlistCtrl.addMusic);

router.get('/', auth, playlistCtrl.getAllPlaylist);
router.get('/:id', auth, playlistCtrl.getMyPlaylist);

router.delete('/:id', auth, playlistCtrl.deletePlaylist);

module.exports = router;
