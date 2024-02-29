const express = require("express");
const router = express.Router();
const edutrenController = require("../controller/edutrenController");
const uploadConfig = require("../config/upload");
const multer = require("multer");

const upload = multer(uploadConfig);

// routing role
router.post("/role", upload.single("image"), edutrenController.postData);
router.get("/roles", edutrenController.showAllData);
router.get("/role/:id", edutrenController.showRoleById);
router.get("/getImage/:filename", edutrenController.getImage);
router.delete("/role/:id", edutrenController.deleteRole);
router.put("/role/:id", upload.single("image"), edutrenController.editRole);

// routing bagian
router.post(
  "/role/:id/bagian",
  upload.single("image"),
  edutrenController.createBagian
);
router.delete("/role/:id/bagian/:idBagian", edutrenController.deleteBagian);
router.put(
  "/role/:id/bagian/:idBagian",
  upload.single("image"),
  edutrenController.updateBagian
);
router.get("/role/:id/bagian/:idBagian", edutrenController.showBagianById);
router.get("/role/:id/bagian", edutrenController.showAllBagian);

// routing episode
router.post("/role/:id/bagian/:idBagian", edutrenController.createTutorial);
router.get(
  "/role/:id/bagian/:idBagian/tutorial/:idTutorial",
  edutrenController.showTutorialById
);

router.get(
  "/role/:id/bagian/:idBagian/tutorial",
  edutrenController.showAllTutorial
);
router.delete(
  "/role/:id/bagian/:idBagian/tutorial/:idTutorial",
  edutrenController.deleteTutorial
);

router.put(
  "/role/:id/bagian/:idBagian/tutorial/:idTutorial",
  edutrenController.updateTutorial
);

module.exports = router;
