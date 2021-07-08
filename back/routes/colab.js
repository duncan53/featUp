const express = require('express');
const router = express.Router();

const colabCtrl = require('../controllers/colab');
const multer = require('../middleware/multer-config');
const auth = require('../middleware/auth');

router.post('/', auth, colabCtrl.createColab);

router.get('/', auth, colabCtrl.getAllColab);
router.get('/my', auth, colabCtrl.getMyColab);
router.get('/other', auth, colabCtrl.getAllColabNotMe);

router.put('/addResponse/:id', auth, colabCtrl.addResponse);

router.delete('/:id', auth, colabCtrl.deleteColab);

module.exports = router;
