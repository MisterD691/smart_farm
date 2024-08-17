const express = require("express");
const router = express.Router();

const {
  add,
  getById,
  getByUser,
  getByArticle,
  getAll,
  update,
  remove
} = require("../controllers/rating");

router.post("/add", add);
router.get("/getById/:id", getById);
router.get("/getByUser/:userId", getByUser);
router.get("/getByArticle/:productId", getByArticle);
router.get("/getAll", getAll);
router.put("/update/:id", update);
router.delete("/delete/:id", remove);

module.exports = router;
