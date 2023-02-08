const express = require("express");

const router = express.Router();

// controller
const {
  insertPhoto,
  deletePhoto,
  getAllPhotos,
  getUserPhotos,
  getPhotoById,
  updatePhoto,
  likePhoto,
  commentInsert,
} = require("../controllers/PhotoController");

// middlewares
const {
  photoInsertValidation,
  photoUpdateValidation,
  commentPhotoValidation,
} = require("../middlewares/photoValidation");
const authGuard = require("../middlewares/authGuard");
const validate = require("../middlewares/handleValidation");
const { imageUpload } = require("../middlewares/imageUpload");

// Routes
router.post(
  "/",
  authGuard,
  imageUpload.single("image"),
  photoInsertValidation(),
  validate,
  insertPhoto
);
router.delete("/:id", authGuard, deletePhoto);
router.get("/", authGuard, getAllPhotos);
router.get("/user/:id", authGuard, getUserPhotos);
router.get("/:id", authGuard, getPhotoById);
router.put("/:id", authGuard, photoUpdateValidation(), updatePhoto);
router.put("/like/:id", authGuard, likePhoto);
router.put(
  "/comment/:id",
  authGuard,
  commentInsert,
  commentPhotoValidation(),
  validate
);
//
module.exports = router;
