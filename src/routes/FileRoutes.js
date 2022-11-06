const express = require("express");
const router = express.Router();
const { upload } = require("../helpers/multerHelpers");

const {
  uploadFile,
  downloadAll,
  downloadOne,
  getAll,
} = require("../controllers/FileController");

router.post("/upload/all", upload.array("images", 4), uploadFile);

router.post("/upload", upload.single("images"), uploadFile);

router.get("/download/all", downloadAll);

router.get("/download", downloadOne);

// get files details from database
// router.get("/", getAll)

module.exports = router;
