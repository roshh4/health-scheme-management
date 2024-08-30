import React, { useState, useEffect } from 'react';
import axios from 'axios';
import "./doctors.css";

function Doctor() {
  const [doctors, setDoctors] = useState([]);

  useEffect(() => {
      axios.get('http://localhost:3001/api/doctors')
          .then(response => {
              setDoctors(response.data);
          })
          .catch(error => {
              console.error('There was an error fetching the doctors!', error);
          });
  }, []);

  const getDoctorinfo = () => {
    console.log(`Button clicked for doctor with ID`);
  }

  return (
      <div className="App">
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
                  </li>
              ))}
          </ul>
          <button className='add doctor' onClick={() => getDoctorinfo()}/>
      </div>
  );
}

export default Doctor;