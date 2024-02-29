const multer = require("multer");
const path = require("path");
// const upload = require("../uploads");
module.exports = {
  storage: multer.diskStorage({
    destination: path.resolve(__dirname, "..", "uploads"),
    filename: (req, file, cb) => {
      cb(null, `${Date.now()}-${file.originalname}`);
    },
  }),
};
