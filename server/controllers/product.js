import Product from '../models/product';

const createProduct = async(req, res) => {
  try {
    let product = new Product(req.fields);
    await product.save();
    res.send("Create product successfully!");
  } catch (error) {
    res.status(500).send(error);
  }
}

const getAllProducts = async (req, res) => {
  try {
    const { min, max, name } = req.query;
    const filter = {};
    if(name) {
      filter.name = name;
    }
    if(min && max) {
      filter.price = { $gte: min, $lte: max }
    }
    let products = await Product.find(filter);
    res.send(products);
  } catch (error) {
    res.status(500).send(error);
  }
}

const getProductById = async (req, res) => {
  try {
    const id = req.params.id;
    let product = await Product.findById(id);
    res.send(product);
  } catch (error) {
    res.status(500).send(error);
  }
}

const updateProductById = async (req, res) => {
  try {
    const id = req.params.id;
    let productUpdate = req.fields;
    const result = await Product.updateOne({_id: id}, {$set: productUpdate});
    res.send(productUpdate);
  } catch (error) {
    res.status(500).send(error);
  }
}

const deleteProductById = async (req, res) => {
  try {
    const id = req.params.id;
    await Product.deleteOne({_id: id});
    res.send(`productId=${id} deleted!`);
  } catch (error) {
    res.status(500).send(error);
  }
}

export {createProduct, getAllProducts, getProductById, updateProductById, deleteProductById}
