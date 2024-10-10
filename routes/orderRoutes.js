import express from 'express';
import { createOrder, getOrders, updateOrder, deleteOrder } from '../controllers/orderController.js';

const router = express.Router();

/**
 * @swagger
 * tags:
 *   name: Orders
 *   description: Order management routes
 */

/**
 * @swagger
 * /orders:
 *   get:
 *     summary: Get all orders
 *     tags: [Orders]
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: List of orders
 *       403:
 *         description: Forbidden
 */

/**
 * @swagger
 * /orders:
 *   post:
 *     summary: Create a new order
 *     tags: [Orders]
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       201:
 *         description: Order created successfully
 *       400:
 *         description: Invalid request
 */

/**
 * @swagger
 * /orders/{orderId}:
 *   put:
 *     summary: Update an order by ID
 *     tags: [Orders]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - name: orderId
 *         in: path
 *         required: true
 *         description: Order ID
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Order updated successfully
 *       404:
 *         description: Order not found
 */

/**
 * @swagger
 * /orders/{orderId}:
 *   delete:
 *     summary: Delete an order by ID
 *     tags: [Orders]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - name: orderId
 *         in: path
 *         required: true
 *         description: Order ID
 *         schema:
 *           type: string
 *     responses:
 *       204:
 *         description: Order deleted successfully
 *       404:
 *         description: Order not found
 */


router.post('/', createOrder);
router.get('/', getOrders);
router.put('/:orderId', updateOrder); // Ensure this matches the path in Swagger
router.delete('/:orderId', deleteOrder); // Ensure this matches the path in Swagger

export default router;
