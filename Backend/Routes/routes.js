const express = require("express");
const router = express.Router();
const {
  getAllCollections,
  getOneCollection,
  createCollection,
  updateAllCollections,
  updateOneCollection,
  deleteCollection,
} = require("../Controllers/controllers");



router.get("/", getAllCollections);

router.get("/:id", getOneCollection);

router.post("/", createCollection);

router.put("/:id", updateAllCollections);

router.patch("/:id", updateOneCollection);

router.delete("/:id", deleteCollection);

module.exports = router;
