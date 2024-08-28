import React from 'react'
import './regis.css'

const regis = () => {
  const options = [
    {label: "Male", value:"M"},
    {label: "Female", value:"F"},
    {label: "Third-Gender", value:"T"}
  ]
  return (
    <div className='wrapper'>
        <form action=''>
            <h1>Registration</h1>
            <div className='input_box'>
                <input type='text' placeholder='Name' required/>
            </div>
            <div className='input_box'>
                <input type='text' placeholder='Age' required/>
            </div>
            <div className='dropdown'>
                <h4>Gender</h4>
              
            </div>
            <button type='submit'>Register</button>
        </form>
    </div>
  )
}

export default regis