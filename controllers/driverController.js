import Driver from '../models/Driver.js';


export const createDriver = async (req, res) => {
    const driverId = Math.random().toString(36).substring(2, 8);
    const { name, email, phone, vehicleType, status } = req.body;

    const newDriver = new Driver({ driverId, name, email, phone, vehicleType, status });
    try {
        await newDriver.save();
        res.status(201).json(newDriver);
    } catch (error) {
        res.status(400).json({ error: 'Error creating driver' });
    }
};

export const getDrivers = async (req, res) => {
    try {
        const drivers = await Driver.find();
        res.json(drivers);
    } catch (error) {
        res.status(400).json({ error: 'Error fetching drivers' });
    }
};

// Implement updateDriver and deleteDriver similarly
// Update Driver
export const updateDriver = async (req, res) => {
    try {
        const { driverId } = req.params;  // Get driverId from request parameters
        const updatedDriver = await Driver.findByIdAndUpdate(driverId, req.body, { new: true });  // Update the driver

        if (!updatedDriver) {
            return res.status(404).json({ message: 'Driver not found' });
        }

        return res.status(200).json(updatedDriver);
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
};

// Delete Driver
export const deleteDriver = async (req, res) => {
    try {
        const { driverId } = req.params;  // Get driverId from request parameters
        const deletedDriver = await Driver.findOneAndDelete({ _id: driverId });  // Use _id field

        if (!deletedDriver) {
            return res.status(404).json({ message: 'Driver not found' });
        }

        return res.status(200).json({ message: 'Driver deleted successfully' });
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
};