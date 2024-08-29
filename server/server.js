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


const doctorSchema = new mongoose.Schema({
    first_name: { type: String, required: true },
    last_name: { type: String, required: true },
    date_of_birth: { type: Date, required: true },
    gender: { type: String, required: true },
    contact_number: { type: String, required: true },
    email: { type: String, required: true },
    address: {
        street: String,
        city: String,
        state: String,
        zip: String,
        country: String
    },
    specialization: { type: String, required: true },
    qualification: { type: [String], required: true },
    years_of_experience: { type: Number, required: true },
    consultation_fees: { type: Number, required: true },
    availability: {
        days: { type: [String], required: true }, // e.g., ['Monday', 'Wednesday']
        time: {
            start: { type: String, required: true }, // e.g., '09:00 AM'
            end: { type: String, required: true } // e.g., '05:00 PM'
        }
    },
    hospital_affiliation: { type: mongoose.Schema.Types.ObjectId, ref: 'Hospital', required: true },
    employee_id: { type: String, required: true },
    department: { type: String, required: true },
    position: { type: String, required: true },
    date_of_joining: { type: Date, required: true },
    license_validity: { type: Date, required: true },
    languages_spoken: { type: [String], required: true },
    profile_picture_url: { type: String, required: true },
    biography: { type: String, required: true },
    awards: [{
        name: String,
        year: Number
    }],
    emergency_contact: {
        name: String,
        relationship: String,
        phone: String
    }
});

const Doctor = mongoose.model('Doctor', doctorSchema);

app.get('/api/doctors', async (req, res) => {
    try {
        const doctors = await Doctor.find();
        res.json(doctors);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});