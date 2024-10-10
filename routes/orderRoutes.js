import express from 'express';
import { createOrder, getOrders, updateOrder, deleteOrder } from '../controllers/orderController.js';
import { authMiddleware } from '../middleware/authMiddleware.js';

const router = express.Router();


router.use(authMiddleware); // Protect the routes

router.post('/', createOrder);
router.get('/', getOrders);
router.put('/:orderId', updateOrder);
router.delete('/:orderId', deleteOrder);

export default router;
