const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth');
const multer = require('../middleware/my-multer-config');

const userCtrl = require('../controllers/user');

router.get('/', auth, userCtrl.getAllUser)
router.get('/myinfo', auth, userCtrl.getMyInfo)

router.post('/signup', userCtrl.signup);
router.post('/login', userCtrl.login);

router.put('/sub/buy', auth, userCtrl.subToFeatUpPlus);
router.put('/image/change', auth, multer, userCtrl.changeImage);
router.put('/:id', auth, userCtrl.modifyUser);

router.delete('/:id', auth, userCtrl.deleteUser);

module.exports = router;
