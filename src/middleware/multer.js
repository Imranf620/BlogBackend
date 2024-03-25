const multer = require('multer');

const dynamicDestination = (req, file, cb) => {
  const folderName = req.params.folderName;
  const destination = `./uploads/${folderName}/`;
  cb(null, destination);
};

const storage = multer.diskStorage({
  destination: dynamicDestination,
  filename: function (req, file, cb) {
    cb(null, Date.now() + '-' + file.originalname);
  }
});

module.exports = multer({ storage: storage }).single('image');
