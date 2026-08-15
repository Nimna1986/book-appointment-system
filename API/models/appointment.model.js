import mongoose from 'mongoose';

const appointmentSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Please enter your name'],
        minlength: 3,
        maxlength: 50,
        trim: true,
    },
    date: {
        type: Date,
        required: [true, 'Booking Date is required'],
        validate: {
            validator: (val) => val >= new Date(),
            message: 'Your booking should be in the future',
        }
    },
    time: {
        type: String,
        required: [true, 'Booking time should be provided'],
    },
    reason: {
        type: String,
        required: [true, 'Please enter the reason'],
    }
}, {timestamps: true});

const Appointment = mongoose.model('Appointment', appointmentSchema);

export default Appointment;