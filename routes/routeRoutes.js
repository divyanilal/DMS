import express from 'express';
import { createRoute, getRoutes, updateRoute, deleteRoute } from '../controllers/routeController.js';
import { authMiddleware } from '../middleware/authMiddleware.js';

const router = express.Router();

// Protect the routes with authentication middleware
router.use(authMiddleware);

/**
 * @swagger
 * tags:
 *   name: Routes
 *   description: Route management routes
 */

/**
 * @swagger
 * /routes:
 *   get:
 *     summary: Get all routes
 *     tags: [Routes]
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: List of routes
 *       403:
 *         description: Forbidden
 */

/**
 * @swagger
 * /routes:
 *   post:
 *     summary: Create a new route
 *     tags: [Routes]
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       201:
 *         description: Route created successfully
 *       400:
 *         description: Invalid request
 */

/**
 * @swagger
 * /routes/{routeId}:
 *   put:
 *     summary: Update a route by ID
 *     tags: [Routes]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - name: routeId
 *         in: path
 *         required: true
 *         description: Route ID
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Route updated successfully
 *       404:
 *         description: Route not found
 */

/**
 * @swagger
 * /routes/{routeId}:
 *   delete:
 *     summary: Delete a route by ID
 *     tags: [Routes]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - name: routeId
 *         in: path
 *         required: true
 *         description: Route ID
 *         schema:
 *           type: string
 *     responses:
 *       204:
 *         description: Route deleted successfully
 *       404:
 *         description: Route not found
 */


router.post('/', createRoute);
router.get('/', getRoutes);
router.put('/:routeId', updateRoute);
router.delete('/:routeId', deleteRoute);

export default router;
