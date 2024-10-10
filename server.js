import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';
import connectDB from './config/db.js';
import authRoutes from './routes/aut

hRoutes.js';
import orderRoutes from './routes/orderRoutes.js';
import driverRoutes from './routes/driverRoutes.js';
import routeRoutes from './routes/routeRoutes.js';
import bodyParser from 'body-parser';

dotenv.config();
const app = express();
const PORT = process.env.PORT || 5000;

// Connect to MongoDB
connectDB();

// Middleware
app.use(cors());
app.use(bodyParser.json());
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Routes
// Define a root route
app.get('/', (req, res) => {
    res.send('Welcome to the Delivery Management System API');
});
app.use('/api/auth', authRoutes);
app.use('/api/orders', orderRoutes);
app.use('/api/drivers', driverRoutes);
app.use('/api/routes', routeRoutes);

// Start server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
