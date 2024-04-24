const express = require('express');
const router = express.Router();
const Appointment = require('../models/appointment');
const Doctor = require('../models/doctor');

// Book appointment
// Book appointment
// Book appointment
router.post('/book', async (req, res) => {
    const { doctor_id, patient_name, time_slot, date } = req.body;
//   console.log()
    try {
        const doctor = await Doctor.findById(doctor_id);
        console.log(doctor)
        if (!doctor) {
            return res.status(404).json({ message: 'Doctor not found' });
        }

        if (!doctor.availability.includes(time_slot)) {
            return res.status(400).json({ message: 'Doctor is not available at the specified time' });
        }

        const appointmentsCount = await Appointment.countDocuments({ doctor_id, date });
        if (appointmentsCount >= doctor.max_patients) {
            return res.status(400).json({ message: 'Doctor has reached the maximum number of patients for the day' });
        }

        const appointment = new Appointment({ doctor_id, patient_name, time_slot, date });
        await appointment.save();
        
        res.status(201).json(appointment);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});

module.exports = router;
