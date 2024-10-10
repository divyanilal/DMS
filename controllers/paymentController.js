// Dummy function to calculate payment based on completed orders
export const calculatePayment = async (driverId) => {
    const completedOrders = await Order.countDocuments({ driverId, orderStatus: 'delivered' });
    const payment = completedOrders * 20; // Assuming $20 per completed order
    return payment;
};
