const express = require("express");
const router = express.Router();

const {
  add,
  getById,
  getByOrder,
  getAll,
  update,
  remove
} = require("../controllers/payment");

router.post("/add", add);
router.get("/getById/:id", getById);
router.get("/getByOrder/:categoryId", getByOrder);
router.get("/getAll", getAll);
router.put("/update/:id", update);
router.delete("/delete/:id", remove);

module.exports = router;
