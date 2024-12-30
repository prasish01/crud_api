const express = require("express");
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const Product = require("./models/productModel");
const productRoute = require("./routes/productRoute");

const app = express();

dotenv.config({ path: "./config.env" });

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/api/products", productRoute);

mongoose
  .connect(process.env.DB_URL)
  .then(() => {
    console.log("Connected to database!");
    app.listen(3000, () => {
      console.log("Server is running on port 3000");
    });
  })
  .catch(() => {
    console.log("Connection failed");
  });

app.get("/", (_, res) => {
  res.send("Hello, World!");
});
app.post("/api/products", async (req, res) => {
  try {
    const product = await Product.create(req.body);
    res.status(200).json(product);
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: err.message });
  }
});
