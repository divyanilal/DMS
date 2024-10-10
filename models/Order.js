import mongoose from 'mongoose';

const orderSchema = new mongoose.Schema({
    orderId: { type: String, unique: true },
    customerName: { type: String, required: true },
    deliveryAddress: { type: String, required: true },
    orderStatus: { type: String, enum: ['pending', 'dispatched', 'delivered', 'canceled'], default: 'pending' },
    totalAmount: { type: Number, required: true },
    createdAt: { type: Date, default: Date.now },
    updatedAt: { type: Date, default: Date.now },
});

const Order = mongoose.model('Order', orderSchema);
export default Order;
