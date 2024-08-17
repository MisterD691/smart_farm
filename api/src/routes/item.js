const express = require("express");
const router = express.Router();

const {
  add,
  addAll,
  getById,
  getByOrder,
  getByArticle,
  getAll,
  update,
  remove
} = require("../controllers/item");

router.post("/add", add);
router.post("/addAll", addAll);
router.get("/getById/:id", getById);
router.get("/getByOrder/:orderId", getByOrder);
router.get("/getByArticle/:productId", getByArticle);
router.get("/getAll", getAll);
router.put("/update/:id", update);
router.delete("/delete/:id", remove);

module.exports = router;
