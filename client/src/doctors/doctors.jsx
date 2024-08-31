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
      zip: '',
      country: ''
    },
    specialization: '',
    qualification: [''],
    years_of_experience: '',
    consultation_fees: '',
    hospital_affiliation: '',
    employee_id: '',
    department: '',
    position: '',
    date_of_joining: '',
    license_validity: '',
    languages_spoken: [''],
    profile_picture_url: '',
    biography: '',
    awards: [{ name: '', year: '' }],
    emergency_contact: {
      name: '',
      relationship: '',
      contact_number: ''
    }
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
    axios.post('http://localhost:3001/api/hi', newDoctor)
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
            zip: '',
            country: ''
          },
          specialization: '',
          qualification: [''],
          years_of_experience: '',
          consultation_fees: '',
          hospital_affiliation: '',
          employee_id: '',
          department: '',
          position: '',
          date_of_joining: '',
          license_validity: '',
          languages_spoken: [''],
          profile_picture_url: '',
          biography: '',
          awards: [{ name: '', year: '' }],
          emergency_contact: {
            name: '',
            relationship: '',
            contact_number: ''
          }
        });
      })
      .catch(error => {
        console.error('There was an error adding the doctor!', error);
      });
  };

  const handleCancel = () => {
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
        zip: '',
        country: ''
      },
      specialization: '',
      qualification: [''],
      years_of_experience: '',
      consultation_fees: '',
      hospital_affiliation: '',
      employee_id: '',
      department: '',
      position: '',
      date_of_joining: '',
      license_validity: '',
      languages_spoken: [''],
      profile_picture_url: '',
      biography: '',
      awards: [{ name: '', year: '' }],
      emergency_contact: {
        name: '',
        relationship: '',
        contact_number: ''
      }
    });
  };

  return (
    <div className="App">
      <h1>Doctor Directory</h1>
      <table className="doctor-table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Specialization</th>
            <th>Experience</th>
            <th>Department</th>
            <th>Consultation Fees</th>
            <th>Biography</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {doctors.map(doctor => (
            <tr key={doctor._id}>
              <td>{doctor.first_name} {doctor.last_name}</td>
              <td>{doctor.specialization}</td>
              <td>{doctor.years_of_experience} years</td>
              <td>{doctor.department}</td>
              <td>Rs. {doctor.consultation_fees}</td>
              <td>{doctor.biography}</td>
              <td><button>Update</button></td>
            </tr>
          ))}
        </tbody>
      </table>
      <button className='add-doctor' onClick={() => setShowForm(true)}>Add Doctor</button>

      {showForm && (
        <div className="form-popup">
          <form onSubmit={handleSubmit} className="doctor-form">
            <h2>New Doctor Information</h2>
            
            <label>
              First Name:
              <input
                type="text"
                name="first_name"
                value={newDoctor.first_name}
                onChange={handleInputChange}
              />
            </label>
            
            <label>
              Last Name:
              <input
                type="text"
                name="last_name"
                value={newDoctor.last_name}
                onChange={handleInputChange}
              />
            </label>
            
            <label>
              Date of Birth:
              <input
                type="date"
                name="date_of_birth"
                value={newDoctor.date_of_birth}
                onChange={handleInputChange}
              />
            </label>
            
            <label>
              Gender:
              <select
                name="gender"
                value={newDoctor.gender}
                onChange={handleInputChange}
              >
                <option value="">Select Gender</option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
                <option value="Other">Other</option>
              </select>
            </label>
            
            <label>
              Contact Number:
              <input
                type="text"
                name="contact_number"
                value={newDoctor.contact_number}
                onChange={handleInputChange}
              />
            </label>
            
            <label>
              Email:
              <input
                type="email"
                name="email"
                value={newDoctor.email}
                onChange={handleInputChange}
              />
            </label>
            
            <label>
              Street:
              <input
                type="text"
                name="street"
                value={newDoctor.address.street}
                onChange={handleAddressChange}
              />
            </label>
            
            <label>
              City:
              <input
                type="text"
                name="city"
                value={newDoctor.address.city}
                onChange={handleAddressChange}
              />
            </label>
            
            <label>
              State:
              <input
                type="text"
                name="state"
                value={newDoctor.address.state}
                onChange={handleAddressChange}
              />
            </label>
            
            <label>
              Zip Code:
              <input
                type="text"
                name="zip"
                value={newDoctor.address.zip}
                onChange={handleAddressChange}
              />
            </label>
            
            <label>
              Country:
              <input
                type="text"
                name="country"
                value={newDoctor.address.country}
                onChange={handleAddressChange}
              />
            </label>
            
            <label>
              Specialization:
              <input
                type="text"
                name="specialization"
                value={newDoctor.specialization}
                onChange={handleInputChange}
              />
            </label>
            
            <label>
              Qualification:
              {newDoctor.qualification.map((qualification, index) => (
                <div key={index}>
                  <input
                    type="text"
                    value={qualification}
                    onChange={(e) => handleDynamicInputChange(index, 'qualification', e)}
                  />
                  {index > 0 && (
                    <button type="button" onClick={() => removeDynamicInput(index, 'qualification')}>Remove</button>
                  )}
                </div>
              ))}
              <button type="button" onClick={() => addDynamicInput('qualification')}>Add Qualification</button>
            </label>
            
            <label>
              Years of Experience:
              <input
                type="number"
                name="years_of_experience"
                value={newDoctor.years_of_experience}
                onChange={handleInputChange}
              />
            </label>
            
            <label>
              Consultation Fees:
              <input
                type="number"
                name="consultation_fees"
                value={newDoctor.consultation_fees}
                onChange={handleInputChange}
              />
            </label>
            
            <label>
              Hospital Affiliation:
              <input
                type="text"
                name="hospital_affiliation"
                value={newDoctor.hospital_affiliation}
                onChange={handleInputChange}
              />
            </label>
            
            <label>
              Employee ID:
              <input
                type="text"
                name="employee_id"
                value={newDoctor.employee_id}
                onChange={handleInputChange}
              />
            </label>
            
            <label>
              Department:
              <input
                type="text"
                name="department"
                value={newDoctor.department}
                onChange={handleInputChange}
              />
            </label>
            
            <label>
              Position:
              <input
                type="text"
                name="position"
                value={newDoctor.position}
                onChange={handleInputChange}
              />
            </label>
            
            <label>
              Date of Joining:
              <input
                type="date"
                name="date_of_joining"
                value={newDoctor.date_of_joining}
                onChange={handleInputChange}
              />
            </label>
            
            <label>
              License Validity:
              <input
                type="date"
                name="license_validity"
                value={newDoctor.license_validity}
                onChange={handleInputChange}
              />
            </label>
            
            <label>
              Languages Spoken:
              {newDoctor.languages_spoken.map((language, index) => (
                <div key={index}>
                  <input
                    type="text"
                    value={language}
                    onChange={(e) => handleDynamicInputChange(index, 'languages_spoken', e)}
                  />
                  {index > 0 && (
                    <button type="button" onClick={() => removeDynamicInput(index, 'languages_spoken')}>Remove</button>
                  )}
                </div>
              ))}
              <button type="button" onClick={() => addDynamicInput('languages_spoken')}>Add Language</button>
            </label>
            
            <label>
              Profile Picture URL:
              <input
                type="text"
                name="profile_picture_url"
                value={newDoctor.profile_picture_url}
                onChange={handleInputChange}
              />
            </label>
            
            <label>
              Biography:
              <textarea
                name="biography"
                value={newDoctor.biography}
                onChange={handleInputChange}
              />
            </label>
            
            <label>
              Awards:
              {newDoctor.awards.map((award, index) => (
                <div key={index}>
                  <input
                    type="text"
                    name="name"
                    placeholder="Award Name"
                    value={award.name}
                    onChange={(e) => {
                      const updatedAwards = [...newDoctor.awards];
                      updatedAwards[index].name = e.target.value;
                      setNewDoctor({ ...newDoctor, awards: updatedAwards });
                    }}
                  />
                  <input
                    type="number"
                    name="year"
                    placeholder="Year"
                    value={award.year}
                    onChange={(e) => {
                      const updatedAwards = [...newDoctor.awards];
                      updatedAwards[index].year = e.target.value;
                      setNewDoctor({ ...newDoctor, awards: updatedAwards });
                    }}
                  />
                  {index > 0 && (
                    <button type="button" onClick={() => {
                      const updatedAwards = newDoctor.awards.filter((_, i) => i !== index);
                      setNewDoctor({ ...newDoctor, awards: updatedAwards });
                    }}>Remove</button>
                  )}
                </div>
              ))}
              <button type="button" onClick={() => {
                setNewDoctor({ ...newDoctor, awards: [...newDoctor.awards, { name: '', year: '' }] });
              }}>Add Award</button>
            </label>
            
            <h3>Emergency Contact</h3>
            <label>
              Name:
              <input
                type="text"
                name="name"
                value={newDoctor.emergency_contact.name}
                onChange={handleEmergencyContactChange}
              />
            </label>
            
            <label>
              Relationship:
              <input
                type="text"
                name="relationship"
                value={newDoctor.emergency_contact.relationship}
                onChange={handleEmergencyContactChange}
              />
            </label>
            
            <label>
              Contact Number:
              <input
                type="text"
                name="contact_number"
                value={newDoctor.emergency_contact.contact_number}
                onChange={handleEmergencyContactChange}
              />
            </label>
            
            <button type="submit">Submit</button>
            <button type="button" onClick={handleCancel}>Cancel</button>
          </form>
        </div>
      )}
    </div>
  );
}

export default Doctor;