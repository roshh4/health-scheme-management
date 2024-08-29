import React from 'react'
import './admin.css'

const admin = () => {
    return(
        <div className='menu'>
            <div className='logo'>
                <img src={img1} alt=""/>
            </div>
            <div className='menu_list'>
                <a href='#' className='item'>
                    Hospitals
                </a>
            </div>
        </div>
    )
}
export default admin