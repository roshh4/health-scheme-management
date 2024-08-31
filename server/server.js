const Doctor = require('./schema/doctor_schema');
const Schemes = require('./schema/schemes_schema');

const express = require('express');
const app = express();
const port =  process.env.PORT || 3001;

app.use(express.json());

const cors = require('cors');
app.use(cors());

app.listen(port, () =>{
    console.log(`Server is running on the port ${port}`)
});

const mongoose = require('mongoose');
const url = "mongodb+srv://roshini:smartindiahackathon@healthdatamanagement.a8rwb.mongodb.net/HealthDataManagement";

mongoose.connect(url, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

app.get('/api/doctors', async (req, res) => {
    try {
        const doctors = await Doctor.find();
        res.json(doctors);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

app.get('/api/schemes', async (req, res) => {
    try {
        const schemes = await Schemes.find();
        res.json(schemes);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

app.post('/api/hi', async (req, res) => {
    try {
      console.log('Request received:', req.body); // Log request body for debugging
  
      // Create a new doctor with the data received from the request
      const doctor = new Doctor(req.body);
  
      // Save the new doctor to the database
      const savedDoctor = await doctor.save();
  
      // Send the saved doctor back as a response
      res.json(savedDoctor);
    } catch (err) {
      console.error('Error adding doctor:', err); // Log error for debugging
      res.status(400).json({ message: err.message });
    }
  });
  