const express = require("express");
const router = express.Router();

const {
  add,
  getById,
  getAll,
  update,
  remove
} = require("../controllers/category");

router.post("/add", add);
router.get("/getById/:id", getById);
router.get("/getAll", getAll);
router.put("/update/:id", update);
router.delete("/delete/:id", remove);

module.exports = router;
