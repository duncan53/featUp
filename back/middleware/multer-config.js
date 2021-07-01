const multer = require('multer');

const MIME_TYPES = {
  'image/jpg': 'jpg',
  'image/jpeg': 'jpg',
  'image/png': 'png',
  'application/pdf': 'pdf',
  'audio/mp3': 'mp3',
  'audio/wave': 'wav'
};

const storage = multer.diskStorage({
  destination: (req, file, callback) => {
    callback(null, 'files');
  },
  filename: (req, file, callback) => {
    let name = file.originalname.split(' ').join('_');
    name = name.split('.')[0] + Date.now();
    const extension = MIME_TYPES[file.mimetype];
    callback(null, name + '.' + extension);
  }
});

module.exports = multer({storage: storage}).fields([{
  name: 'musicSrc'
}, {
  name: 'cover'
}]);
