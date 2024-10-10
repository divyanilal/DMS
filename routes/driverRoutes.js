import express from 'express';
import { createDriver, getDrivers, updateDriver, deleteDriver } from '../controllers/driverController.js';
import { authMiddleware } from '../middleware/authMiddleware.js';

const router = express.Router();

// Protect the routes with authentication middleware
router.use(authMiddleware);
/**
 * @swagger
 * tags:
 *   name: Drivers
 *   description: Driver management routes
 */

/**
 * @swagger
 * /drivers:
 *   get:
 *     summary: Get all drivers
 *     tags: [Drivers]
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: List of drivers
 *       403:
 *         description: Forbidden
 */

/**
 * @swagger
 * /drivers:
 *   post:
 *     summary: Create a new driver
 *     tags: [Drivers]
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       201:
 *         description: Driver created successfully
 *       400:
 *         description: Invalid request
 */

/**
 * @swagger
 * /drivers/{driverId}:
 *   put:
 *     summary: Update a driver by ID
 *     tags: [Drivers]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - name: driverId
 *         in: path
 *         required: true
 *         description: Driver ID
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Driver updated successfully
 *       404:
 *         description: Driver not found
 */

/**
 * @swagger
 * /drivers/{driverId}:
 *   delete:
 *     summary: Delete a driver by ID
 *     tags: [Drivers]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - name: driverId
 *         in: path
 *         required: true
 *         description: Driver ID
 *         schema:
 *           type: string
 *     responses:
 *       204:
 *         description: Driver deleted successfully
 *       404:
 *         description: Driver not found
 */


router.post('/', createDriver);
router.get('/', getDrivers);
router.put('/:driverId', updateDriver);
router.delete('/:driverId', deleteDriver);

export default router;
