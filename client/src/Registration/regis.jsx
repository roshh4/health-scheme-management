import React from 'react'
import './regis.css'

const regis = () => {
  return (
    <div className='wrapper'>
        <form action=''>
            <h1>Registration</h1>
            <div className='input'>
                <input className='input_box' type='text' placeholder='Name' required/>
            </div>
            <div className='input'>
                <input className='input_box' min="1" type='number' placeholder='Age' required/>
            </div>

            <div className='drp'>
                  <select className='dropdown'>
                  <option>Gender</option>
                      <option>Male</option>
                      <option>Female</option>
                      <option>Third Gender</option>
                  </select>
            </div>
            <div className='input'>
              <input className='input_box' type='text' placeholder='Aadhaar Number' required/>
            </div>
            <div className='sub'>
            <button type='submit'>Register</button>
            </div>
            
        </form>
        </div>
  )
}

export default regis