import Order from "../models/order";
import Product from '../models/product';
import mongoose, { Schema } from 'mongoose';


const createOrder = async (req, res) => {
  try {
    try {
      let productIds = req.fields.products.map(prod => {
        return prod.productId;
      });
      let productExists = await Product.find({
        _id: {
          $in: productIds
        }
      }) 
      if (productExists?.length < req.fields.products?.length) {
        res.status(404).send('Some product is not found')
      }
      const order = new Order({
        _id: new mongoose.Types.ObjectId(),
        products: productExists
      })
      await order.save();
      res.send("Create order successfully!");
    } catch (error) {
      console.log('error: ', error);
    }
   
  } catch (error) {
    res.status(500).send(error);
  }
}

const getAllOrders = async(req, res) => {
  try {
    const orders = await Order.find();
    res.send(orders);
  } catch (error) {
    res.status(500).send(error);
  }
}

const getOrderById = async(req, res) => {
  try {
    const id = req.params.orderId;
    const order = await Order.findById(id);
    res.send(order);
  } catch (error) {
    res.status(500).send(error);
  }
}

export { createOrder, getAllOrders, getOrderById }
