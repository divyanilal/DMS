import mongoose from 'mongoose';

const routeSchema = new mongoose.Schema({
    routeId: { type: String, unique: true },
    orderId: { type: mongoose.Schema.Types.ObjectId, ref: 'Order' },
    steps: [{ location: String, timestamp: Date }],
    status: { type: String, enum: ['pending', 'in-progress', 'completed'], default: 'pending' },
    createdAt: { type: Date, default: Date.now },
    updatedAt: { type: Date, default: Date.now },
});

const Route = mongoose.model('Route', routeSchema);
export default Route;
