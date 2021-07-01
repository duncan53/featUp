const express = require('express');
const router = express.Router();

const colabCtrl = require('../controllers/colab');
const multer = require('../middleware/multer-config');
const auth = require('../middleware/auth');

router.post('/', auth, colabCtrl.createColab);

router.get('/', colabCtrl.getAllColab);
router.get('/:id', colabCtrl.getMyColab);

router.delete('/:id', auth, colabCtrl.deleteColab);

module.exports = router;
