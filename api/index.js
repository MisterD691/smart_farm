require("dotenv").config();
const express = require("express");

const cors = require("cors");
const bodyParser = require("body-parser");
const db = require("./src/helpers/mongoose");

const app = express();

const category = require("./src/routes/category");
const article = require("./src/routes/article");
const item = require("./src/routes/item");
const payment = require("./src/routes/payment");
const order = require("./src/routes/order");
const user = require("./src/routes/user");
const report = require("./src/routes/report");
const rating = require("./src/routes/rating");

app.use(express.static("public"));
app.use(cors());
app.use(
  express.json({
    extended: true,
    limit: "60mb",
  }),
);
app.use(bodyParser.urlencoded({ extended: false }));

// Routes
app.use("/user", user);
app.use("/payment", payment);
app.use("/category", category);
app.use("/article", article);
app.use("/item", item);
app.use("/order", order);
app.use("/report", report);
app.use("/rating", rating);
app.use("*", (_, res, __) => res.status(404).send("Resource not found"));

const port = process.env.PORT || 3006;

db.once("open", () => {
  app.listen(port, () =>
    console.log(`Listening on port ${port} ...`),
  );
});
