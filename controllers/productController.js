const Product = require("../models/productModel");

const getProducts = async (_, res) => {
  try {
    const products = await Product.find({});
    res.status(200).json(products);
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: err });
  }
};
const getProduct = async (req, res) => {
  try {
    const { id } = req.params;
    const product = await Product.findById(id);
    res.status(200).json(product);
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: err });
  }
};
const updateProduct = async (req, res) => {
  try {
    const { id } = req.params;
    const product = await Product.findByIdAndUpdate(id, req.body);
    if (!product) return res.status(404).json({ message: "Product not found" });
    const updatedProduct = await Product.findById(id);
    res.status(200).json(updatedProduct);
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: err });
  }
};

const deleteProduct = async (req, res) => {
  try {
    const { id } = req.params;
    const product = await Product.findByIdAndDelete(id);
    if (!product) return res.status(404).json({ message: "Product not found" });
    res.status(200).json({ message: "This product has been deleted" });
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: err });
  }
};

const createProduct = async (req, res) => {
  try {
    const product = await Product.create(req.body);
    res.status(200).json(product);
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: err.message });
  }
};
module.exports = {
  getProducts,
  getProduct,
  updateProduct,
  deleteProduct,
  createProduct,
};
