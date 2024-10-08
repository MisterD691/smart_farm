const express = require("express");
const router = express.Router();

const {
  add,
  getById,
  getByClient,
  getAll,
  update,
  remove,
} = require("../controllers/order");

router.post("/add", add);
router.get("/getById/:id", getById);
router.get("/getByClient/:clientId", getByClient);
router.get("/getAll", getAll);
router.put("/update/:id", update);
router.delete("/delete/id", remove);

module.exports = router;
