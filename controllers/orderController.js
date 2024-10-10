import Order from '../models/Order.js';

export const createOrder = async (req, res) => {
    const orderId = Math.random().toString(36).substring(2, 8);
    const { customerName, deliveryAddress, orderStatus, totalAmount } = req.body;

    const newOrder = new Order({ orderId, customerName, deliveryAddress, orderStatus, totalAmount });
    try {
        await newOrder.save();
        res.status(201).json(newOrder);
    } catch (error) {
        res.status(400).json({ error: 'Error creating order' });
    }
};

export const getOrders = async (req, res) => {
    try {
        const orders = await Order.find();
        res.json(orders);
    } catch (error) {
        res.status(400).json({ error: 'Error fetching orders' });
    }
};

// Implement updateOrder and deleteOrder similarly
// Update Order
export const updateOrder = async (req, res) => {
    try {
        const { orderId } = req.params;  // Get orderId from request parameters
        const updatedOrder = await Order.findByIdAndUpdate(orderId, req.body, { new: true });  // Update the order

        if (!updatedOrder) {
            return res.status(404).json({ message: 'Order not found' });
        }

        return res.status(200).json(updatedOrder);
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
};
// Delete Order
export const deleteOrder = async (req, res) => {
    try {
        const { orderId } = req.params;
        const deletedOrder = await Order.findOneAndDelete({ orderId });

        if (!deletedOrder) {
            return res.status(404).json({ message: 'Order not found' });
        }

        return res.status(200).json({ message: 'Order deleted successfully' });
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
};