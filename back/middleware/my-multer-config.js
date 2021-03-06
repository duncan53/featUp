const multer = require('multer');

const MIME_TYPES = {
  'image/jpg': 'jpg',
  'image/jpeg': 'jpg',
  'image/png': 'png',
  'audio/ogg': 'ogg',
  'audio/webm': 'opus',
  'application/pdf': 'pdf',
  'audio/*': 'opus'
};

const storage = multer.diskStorage({
  destination: (req, file, callback) => {
    callback(null, 'files');
  },
  filename: (req, file, callback) => {
    let name = file.originalname.split(' ').join('_');
    name = name.replace('.pdf', '')
    const extension = MIME_TYPES[file.mimetype];
    callback(null, name + Date.now() + '.' + extension);
  }
});

module.exports = multer({storage: storage}).single('myFile');
