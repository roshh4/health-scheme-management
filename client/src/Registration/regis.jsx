import React from 'react'
import './regis.css'

const regis = () => {
  return (
    <div>
        <form action=''>
            <h1>Registration</h1>
            <div className='input_box'>
                <input type='text' placeholder='Name' required/>
            </div>
            <div className='input_box'>
                <input type='text' placeholder='Age' required/>
            </div>

            <div className='dropdown'>
              <div className='dropdown_btn'>Gender</div>
                <div className='dropdown_content'>
                  <div className='dropdown_item'>
                    Male
                  </div>
                  <div className='dropdown_item'>
                    Female
                  </div>
                  <div className='dropdown_item'>
                    Third Gender
                  </div>
                </div>
                </div>

            <button type='submit'>Register</button>
        </form>
    </div>
  )
}

export default regis