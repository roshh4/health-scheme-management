import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './doctors.css';

function Doctor() {
  const [doctors, setDoctors] = useState([]);
  const [showForm, setShowForm] = useState(false);
  const [newDoctor, setNewDoctor] = useState({
    first_name: '',
    last_name: '',
    date_of_birth: '',
    gender: '',
    contact_number: '',
    email: '',
    address: {
      street: '',
      city: '',
      state: '',
      zip_code: ''
    },
    specialization: '',
    qualification: [''],
    years_of_experience: '',
    consultation_fees: '',
    availability: {
      days: [''],
      time: ''
    },
    languages_spoken: [''],
    profile_picture_url: '',
    biography: '',
    awards: [''],
    emergency_contact: {
      name: '',
      relationship: '',
      contact_number: ''
    },
    hospital_affiliation: '',
    department: '',
    position: '',
    date_of_joining: '',
    license_validity: ''
  });

  useEffect(() => {
    axios.get('http://localhost:3001/api/doctors')
      .then(response => {
        setDoctors(response.data);
      })
      .catch(error => {
        console.error('There was an error fetching the doctors!', error);
      });
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewDoctor(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleAddressChange = (e) => {
    const { name, value } = e.target;
    setNewDoctor(prevState => ({
      ...prevState,
      address: {
        ...prevState.address,
        [name]: value
      }
    }));
  };

  const handleAvailabilityChange = (e) => {
    const { name, value } = e.target;
    setNewDoctor(prevState => ({
      ...prevState,
      availability: {
        ...prevState.availability,
        [name]: value
      }
    }));
  };

  const handleDynamicInputChange = (index, type, e) => {
    const { value } = e.target;
    const updatedList = [...newDoctor[type]];
    updatedList[index] = value;
    setNewDoctor(prevState => ({
      ...prevState,
      [type]: updatedList
    }));
  };

  const addDynamicInput = (type) => {
    setNewDoctor(prevState => ({
      ...prevState,
      [type]: [...prevState[type], '']
    }));
  };

  const removeDynamicInput = (index, type) => {
    const updatedList = newDoctor[type].filter((_, i) => i !== index);
    setNewDoctor(prevState => ({
      ...prevState,
      [type]: updatedList
    }));
  };

  const handleEmergencyContactChange = (e) => {
    const { name, value } = e.target;
    setNewDoctor(prevState => ({
      ...prevState,
      emergency_contact: {
        ...prevState.emergency_contact,
        [name]: value
      }
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post('http://localhost:3001/api/doctors', newDoctor)
      .then(response => {
        setDoctors([...doctors, response.data]);
        setShowForm(false); 
        setNewDoctor({
          first_name: '',
          last_name: '',
          date_of_birth: '',
          gender: '',
          contact_number: '',
          email: '',
          address: {
            street: '',
            city: '',
            state: '',
            zip_code: ''
          },
          specialization: '',
          qualification: [''],
          years_of_experience: '',
          consultation_fees: '',
          availability: {
            days: [''],
            time: ''
          },
          languages_spoken: [''],
          profile_picture_url: '',
          biography: '',
          awards: [''],
          emergency_contact: {
            name: '',
            relationship: '',
            contact_number: ''
          },
          hospital_affiliation: '',
          department: '',
          position: '',
          date_of_joining: '',
          license_validity: ''
        });
      })
      .catch(error => {
        console.error('There was an error adding the doctor!', error);
      });
  };

  return (
    <div className="App">
        {/* RAMYA */}
      <h1>Doctor Directory</h1>
      <ul className="doctor-list">
        {doctors.map(doctor => (
          <li key={doctor._id} className="doctor-list-item">
            <div>
              <div className="doctor-info">
                <h2>{doctor.first_name} {doctor.last_name}</h2>
              </div>
              <div className="doctor-details">
                <p>Specialization: {doctor.specialization}</p>
                <p>Experience: {doctor.years_of_experience} years</p>
                <p>Department: {doctor.department}</p>
                <p>Consultation Fees: Rs. {doctor.consultation_fees}</p>
                <p>Biography: {doctor.biography}</p>
              </div>
            </div>
            <button>hi</button>
          </li>
        ))}
      </ul>
      <button className='add-doctor' onClick={() => setShowForm(true)}>Add Doctor</button>

      {showForm && (
        <div className="form-popup">
          <form onSubmit={handleSubmit} className="doctor-form">
            <h2>New Doctor Information</h2>
            <input
              type="text"
              name="first_name"
              placeholder="First Name"
              value={newDoctor.first_name}
              onChange={handleInputChange}
              required
            />
            <input
              type="text"
              name="last_name"
              placeholder="Last Name"
              value={newDoctor.last_name}
              onChange={handleInputChange}
              required
            />
            <h3>Date of Birth</h3>
            <input
              type="date"
              name="date_of_birth"
              placeholder="Date of Birth"
              value={newDoctor.date_of_birth}
              onChange={handleInputChange}
              required
            />
            <h3>Gender</h3>
            <select
              name="gender"
              value={newDoctor.gender}
              onChange={handleInputChange}
              required
            >
              <option value="">Select Gender</option>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
              <option value="Other">Other</option>
            </select>
            <input
              type="text"
              name="contact_number"
              placeholder="Contact Number"
              value={newDoctor.contact_number}
              onChange={handleInputChange}
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={newDoctor.email}
              onChange={handleInputChange}
              required
            />
            <h3>Address</h3>
            <input
              type="text"
              name="street"
              placeholder="Street"
              value={newDoctor.address.street}
              onChange={handleAddressChange}
              required
            />
            <input
              type="text"
              name="city"
              placeholder="City"
              value={newDoctor.address.city}
              onChange={handleAddressChange}
              required
            />
            <input
              type="text"
              name="state"
              placeholder="State"
              value={newDoctor.address.state}
              onChange={handleAddressChange}
              required
            />
            <input
              type="text"
              name="zip_code"
              placeholder="ZIP Code"
              value={newDoctor.address.zip_code}
              onChange={handleAddressChange}
              required
            />
            <input
              type="text"
              name="specialization"
              placeholder="Specialization"
              value={newDoctor.specialization}
              onChange={handleInputChange}
              required
            />
            <h3>Qualifications</h3>
            {newDoctor.qualification.map((qual, index) => (
              <div key={index}>
                <input
                  type="text"
                  value={qual}
                  onChange={(e) => handleDynamicInputChange(index, 'qualification', e)}
                  placeholder={`Qualification ${index + 1}`}
                  required
                />
                <button type="button" onClick={() => removeDynamicInput(index, 'qualification')}>Remove</button>
              </div>
            ))}
            <button type="button" onClick={() => addDynamicInput('qualification')}>Add Another Qualification</button>
            <input
              type="number"
              name="years_of_experience"
              placeholder="Years of Experience"
              value={newDoctor.years_of_experience}
              onChange={handleInputChange}
              required
            />
            <input
              type="number"
              name="consultation_fees"
              placeholder="Consultation Fees"
              value={newDoctor.consultation_fees}
              onChange={handleInputChange}
              required
            />
            <h3>Availability</h3>
            {newDoctor.availability.days.map((day, index) => (
              <div key={index}>
                <input
                  type="text"
                  value={day}
                  onChange={(e) => handleDynamicInputChange(index, 'availability.days', e)}
                  placeholder={`Available Day ${index + 1}`}
                  required
                />
                <button type="button" onClick={() => removeDynamicInput(index, 'availability.days')}>Remove</button>
              </div>
            ))}
            <button type="button" onClick={() => addDynamicInput('availability.days')}>Add Another Day</button>
            <input
              type="text"
              name="time"
              placeholder="Available Time"
              value={newDoctor.availability.time}
              onChange={handleAvailabilityChange}
              required
            />
            <h3>Hospital Affiliation</h3>
            <select
              name="hospital_affiliation"
              value={newDoctor.hospital_affiliation}
              onChange={handleInputChange}
              required
            >
              <option value="">Select Hospital Affiliation</option>
              <option value="Apollo">Apollo</option>
              <option value="Chettinad">Chettinad</option>
            </select>
            <input
              type="text"
              name="department"
              placeholder="Department"
              value={newDoctor.department}
              onChange={handleInputChange}
              required
            />
            <input
              type="text"
              name="position"
              placeholder="Position"
              value={newDoctor.position}
              onChange={handleInputChange}
              required
            />
            <h3>Date of Joining</h3>
            <input
              type="date"
              name="date_of_joining"
              placeholder="Date of Joining"
              value={newDoctor.date_of_joining}
              onChange={handleInputChange}
              required
            />
            <h3>License Validity</h3>
            <input
              type="date"
              name="license_validity"
              placeholder="License Validity"
              value={newDoctor.license_validity}
              onChange={handleInputChange}
              required
            />
            <h3>Languages Spoken</h3>
            {newDoctor.languages_spoken.map((language, index) => (
              <div key={index}>
                <input
                  type="text"
                  value={language}
                  onChange={(e) => handleDynamicInputChange(index, 'languages_spoken', e)}
                  placeholder={`Language ${index + 1}`}
                  required
                />
                <button type="button" onClick={() => removeDynamicInput(index, 'languages_spoken')}>Remove</button>
              </div>
            ))}
            <button type="button" onClick={() => addDynamicInput('languages_spoken')}>Add Another Language</button>
            <input
              type="text"
              name="profile_picture_url"
              placeholder="Profile Picture URL"
              value={newDoctor.profile_picture_url}
              onChange={handleInputChange}
              required
            />
            <textarea
              name="biography"
              placeholder="Biography"
              value={newDoctor.biography}
              onChange={handleInputChange}
              required
            />
            <h3>Awards</h3>
            {newDoctor.awards.map((award, index) => (
              <div key={index}>
                <input
                  type="text"
                  value={award}
                  onChange={(e) => handleDynamicInputChange(index, 'awards', e)}
                  placeholder={`Award ${index + 1}`}
                  required
                />
                <button type="button" onClick={() => removeDynamicInput(index, 'awards')}>Remove</button>
              </div>
            ))}
            <button type="button" onClick={() => addDynamicInput('awards')}>Add Another Award</button>
            <h3>Emergency Contact</h3>
            <input
              type="text"
              name="name"
              placeholder="Name"
              value={newDoctor.emergency_contact.name}
              onChange={handleEmergencyContactChange}
              required
            />
            <input
              type="text"
              name="relationship"
              placeholder="Relationship"
              value={newDoctor.emergency_contact.relationship}
              onChange={handleEmergencyContactChange}
              required
            />
            <input
              type="text"
              name="contact_number"
              placeholder="Contact Number"
              value={newDoctor.emergency_contact.contact_number}
              onChange={handleEmergencyContactChange}
              required
            />
            <button type="submit">Submit</button>
            <button type="button" onClick={() => setShowForm(false)}>Cancel</button>
          </form>
        </div>
      )}
    </div>
  );
}

export default Doctor;
