const mongoose = require('mongoose');

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

module.exports = Doctor;