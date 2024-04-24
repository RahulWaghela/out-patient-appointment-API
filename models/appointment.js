const mongoose = require('mongoose');

const appointmentSchema = new mongoose.Schema({
    doctor_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Doctor',
        required: true
    },
    patient_name: {
        type: String,
        required: true
    },
    time_slot: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        required: true
    }
});

module.exports = mongoose.model('Appointment', appointmentSchema);
