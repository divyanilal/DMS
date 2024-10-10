import express from 'express';
import { createDriver, getDrivers, updateDriver, deleteDriver } from '../controllers/driverController.js';
import { authMiddleware } from '../middleware/authMiddleware.js';

const router = express.Router();


router.use(authMiddleware); // Protect the routes

router.post('/', createDriver);
router.get('/', getDrivers);
router.put('/:driverId', updateDriver);
router.delete('/:driverId', deleteDriver);

export default router;
