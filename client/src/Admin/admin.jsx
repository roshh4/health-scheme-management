import React from 'react';
import Sidebar from './sidebar';
import Hp_ranks from './hp_ranks';
import Sch_ranks from './sch_ranks';
import State_ranks from './state_ranks';
import './admin.css';

const admin = () => {
  return (
    <div className='dashboard'>
        <Sidebar />
        <div className="dashboard_content">
            <Hp_ranks />
            <Sch_ranks />
            <State_ranks />
        </div>
    </div>
  )
}

export default admin
