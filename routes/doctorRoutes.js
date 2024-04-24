const express = require('express');
const router = express.Router();
const Doctor = require('../models/doctor');


// List all doctors
router.get('/', async (req, res) => {
    try {
        const doctors = await Doctor.find();
        res.json(doctors);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});
router.post('/', async (req, res) => {
    try {
        const doctor = new Doctor(req.body);
        await doctor.save();
        res.status(201).json(doctor);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});
// Get doctor by ID
router.get('/:id', async (req, res) => {
    try {
        const doctor = await Doctor.findById(req.params.id);
        if (!doctor) {
            return res.status(404).json({ message: 'Doctor not found' });
        }
        res.status(200).json(doctor);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});
// Get doctor ID by name
router.get('/findByName/:name', async (req, res) => {
    try {
        const doctor = await Doctor.findOne({ name: req.params.name });
        if (!doctor) {
            return res.status(404).json({ message: 'Doctor not found' });
        }
        res.json({ doctor_id: doctor._id });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

module.exports = router;
