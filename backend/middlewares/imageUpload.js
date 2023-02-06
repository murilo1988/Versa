const multer = require("multer");
const path = require("path");

// destination image store

const imageStorege = multer.diskStorage({
  destination: function (req, res, cb) {
    let folder = "";
    if (req.baseUrl.includes("users")) {
      folder = "users";
    } else if (req.baseUrl.includes("photos")) {
      folder = "photos";
    }

    cb(null, `uploads/${folder}/`);
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + path.extname(file.originalname));
  },
});

const imageUpload = multer({
  fileFilter(req, file, cb) {
    if (file.originalname.match(/\.(png | jpg)$/)) {
      //upload only png and jpg formats
      return cb(new Error("Somente formatos png e jpg por favor"));
    }
    cb(undefined, true);
  },
});
module.exports = { imageUpload };
