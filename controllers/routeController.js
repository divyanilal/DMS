import Route from '../models/Route.js';

export const createRoute = async (req, res) => {
    const routeId = Math.random().toString(36).substring(2, 8);
    const { orderId, steps, status } = req.body;

    const newRoute = new Route({ routeId, orderId, steps, status });
    try {
        await newRoute.save();
        res.status(201).json(newRoute);
    } catch (error) {
        res.status(400).json({ error: 'Error creating route' });
    }
};

export const getRoutes = async (req, res) => {
    try {
        const routes = await Route.find();
        res.json(routes);
    } catch (error) {
        res.status(400).json({ error: 'Error fetching routes' });
    }
};

// Implement updateRoute and delete
// Implement updateRoute and deleteRoute similarly
export const updateRoute = async (req, res) => {
    const { routeId } = req.params;
    const updates = req.body;

    try {
        const updatedRoute = await Route.findOneAndUpdate({ routeId }, updates, { new: true });
        if (!updatedRoute) return res.status(404).json({ error: 'Route not found' });
        res.json(updatedRoute);
    } catch (error) {
        res.status(400).json({ error: 'Error updating route' });
    }
};

export const deleteRoute = async (req, res) => {
    const { routeId } = req.params;

    try {
        const deletedRoute = await Route.findOneAndDelete({ routeId });
        if (!deletedRoute) return res.status(404).json({ error: 'Route not found' });
        res.json({ message: 'Route deleted successfully' });
    } catch (error) {
        res.status(400).json({ error: 'Error deleting route' });
    }
};
