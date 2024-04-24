const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const Doctor = require('./models/doctor');

const doctorRoutes = require('./routes/doctorRoutes');
const appointmentRoutes = require('./routes/appointmentRoutes');

const app = express();

// Middleware
app.use(bodyParser.json());

// Connect to MongoDB Atlas
mongoose.connect('mongodb+srv://RahulWaghela:testuser123@cluster0.wcnvqgq.mongodb.net/appointmentSystem?retryWrites=true&w=majority')
    .then(async () => {
        console.log('Connected to MongoDB Atlas');

        // Insert dummy doctor data
        await Doctor.insertMany([
            {
                name: 'Dr. Smith',
                specialty: 'Cardiology',
                max_patients: 5,
                availability: ["18:00 - 19:00", "19:00 - 20:00"]
            },
            {
                name: 'Dr. Johnson',
                specialty: 'Dermatology',
                max_patients: 4,
                availability: ["17:00 - 18:00", "18:00 - 19:00"]
            }
        ]);        
        console.log('data inserted');
        
        // Routes
        app.use('/api/doctors', doctorRoutes);
        app.use('/api/appointments', appointmentRoutes);

        // Start the server
        app.listen(6545, () => {
            console.log('Server started on port 6545');
        });
    })
    .catch(err => console.error('Could not connect to MongoDB Atlas:', err));
