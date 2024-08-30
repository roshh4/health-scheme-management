import React from 'react';
import './state.css';

const StateSchemes = () => {
  return (
    <div>
      <div className="text">
        <h1>State Government Schemes</h1>
      </div>
      <div className="line1">
        {[
          'Tamilnadu',
          'Kerala',
          'Andhra Pradesh',
          'Karnataka',
          'Telangana',
          'Puduchery'
        ].map((state, index) => (
          <div className="card" key={index}>
            <div className="image"></div>
            <div className="content">
              <a href="#">
                <span className="title">{state}</span>
              </a>
              <p></p>
              <a className="action" href="#">
                To View Schemes
                <span aria-hidden="true">→</span>
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default StateSchemes;
