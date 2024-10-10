import mongoose from 'mongoose';

const driverSchema = new mongoose.Schema({
    driverId: { type: String, unique: true },
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    phone: { type: String, required: true },
    vehicleType: { type: String, required: true },
    status: { type: String, enum: ['active', 'inactive'], default: 'active' },
    createdAt: { type: Date, default: Date.now },
    updatedAt: { type: Date, default: Date.now },
});

const Driver = mongoose.model('Driver', driverSchema);
export default Driver;
