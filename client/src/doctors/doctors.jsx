import React, { useState, useEffect } from 'react';
import axios from 'axios';

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

  return (
      <div className="App">
          <h1>Doctor Directory</h1>
          <div>
              {doctors.map(doctor => (
                  <div key={doctor._id}>
                      <img src={doctor.profile_picture_url} alt={`Rs{doctor.first_name} ${doctor.last_name}`} />
                      <h2>{doctor.first_name} {doctor.last_name}</h2>
                      <p>Specialization: {doctor.specialization}</p>
                      <p>Experience: {doctor.years_of_experience} years</p>
                      <p>Department: {doctor.department}</p>
                      <p>Consultation Fees: ${doctor.consultation_fees}</p>
                      <p>Biography: {doctor.biography}</p>
                  </div>
              ))}
          </div>
      </div>
  );
}

export default Doctor;
