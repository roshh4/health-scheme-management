import React from 'react';
import './mid.css';

function Pmsby() {
  return (
    <div>
      <div className="header">
        <div className="infohead">
          <h2>Information</h2>
        </div>
        <div>
          <div className="eligibilhead">
            <h2>Eligiblity Criteria:</h2>
          </div>
          <div>
            <div className="applybtn">
              <div className="btntitle">
                <input type="text" placeholder="Patient ID" />
                <br />
                <button className="btnend">To Apply</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Pmsby;