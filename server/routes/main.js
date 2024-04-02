import express from 'express';
import { createUser, deleteUserById, getAllUsers, getUserById, updateUserById } from '../controllers/user';
import {createProduct, getAllProducts, getProductById, updateProductById, deleteProductById} from '../controllers/product';
import { createOrder, getAllOrders, getOrderById } from '../controllers/order';
const router = express.Router();

// USER APIS
router.post('/user', createUser);
router.get('/user', getAllUsers);
router.get('/user/:userId', getUserById);
router.put('/user/:userId', updateUserById);
router.delete('/user/:userId', deleteUserById);

// PRODUCT APIS
router.post('/product', createProduct);
router.get('/product', getAllProducts);
router.get('/product/:id', getProductById);
router.put('/product/:id', updateProductById);
router.delete('/product/:id', deleteProductById);
export default router;

// ORDER APIS
router.post('/order', createOrder);
router.get('/order', getAllOrders);
router.get('/order/:orderId', getOrderById);
