import express from 'express';
import { createRoute, getRoutes, updateRoute, deleteRoute } from '../controllers/routeController.js';
import { authMiddleware } from '../middleware/authMiddleware.js';

const router = express.Router();

router.use(authMiddleware); // Protect the routes

router.post('/', createRoute);
router.get('/', getRoutes);
router.put('/:routeId', updateRoute);
router.delete('/:routeId', deleteRoute);

export default router;
