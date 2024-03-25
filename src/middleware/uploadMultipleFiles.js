const multer = require('multer');
const path = require('path');

// Multer Configuration
const uploadMultipleImages = (folderPath) => {
  const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, path.join('uploads', folderPath)); // Destination folder where files will be stored
    },
    filename: function (req, file, cb) {
      cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname)); // Naming files
    }
  });

  const upload = multer({ 
    storage: storage,
    limits: { fileSize: 10 * 1024 * 1024 }, // Limiting file size (10MB here)
    fileFilter: function (req, file, cb) {
      // Allowed file types
      const filetypes = /jpeg|jpg|png|gif/;
      const extname = filetypes.test(path.extname(file.originalname).toLowerCase());
      const mimetype = filetypes.test(file.mimetype);
      if (mimetype && extname) {
        return cb(null, true);
      } else {
        cb('Error: Images Only!');
      }
    }
  });

  // Middleware function for handling image upload
  return upload.fields([
    { name: 'image1', maxCount: 1 },
    { name: 'image2', maxCount: 1 },
    { name: 'image3', maxCount: 1 },
    { name: 'image4', maxCount: 1 },
    { name: 'image5', maxCount: 1 }
  ]);
};

module.exports = uploadMultipleImages;
