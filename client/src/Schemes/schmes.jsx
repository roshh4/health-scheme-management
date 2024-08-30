import React from "react";
import "./schmes.css";
import { Link } from "react-router-dom";

function Schemes() {
  return (
    <>
      <div className="text">
        <h1>Central Government Schemes</h1>
      </div>
      <div className="line1">
        <div className="card">
          <div className="image"></div>
          <div className="content">
            <a href="#">
              <span className="title">
                Ayushman Bharat Pradhan Mantri Jan Arogya Yojana (AB-PMJAY)
              </span>
            </a>
            <p className="desc">
              Providing up to ₹5 lakh per family per year for secondary and tertiary hospital care. 
              It targets low-income families and aims to reduce out-of-pocket expenses on healthcare. 
            </p>
            <Link to="/home/schemes/Central/pmjay">
              Find out more
              <span aria-hidden="true">→</span>
            </Link>
          </div>
        </div>

        <div className="card">
          <div className="image"></div>
          <div className="content">
            <a href="#">
              <span className="title">
                Pradhan Mantri Suraksha Bima Yojana (PMSBY)
              </span>
            </a>
            <p className="desc">
              This scheme offers accidental death and disability insurance coverage for a nominal annual premium. 
              It's designed to provide financial support in case of accidental injuries or death.
            </p>
            <Link to="/home/schemes/Central/pmsby">
              Find out more
              <span aria-hidden="true">→</span>
            </Link>
          </div>
        </div>

        <div className="card">
          <div className="image"></div>
          <div className="content">
            <a href="#">
              <span className="title">
                Pradhan Mantri Jeevan Jyoti Bima Yojana (PMJJBY)
              </span>
            </a>
            <p className="desc">
              This is a life insurance scheme that offers a sum assured of ₹2 lakh in case of death due to any cause.
              It aims to provide financial security to families in case of the policyholder's demise.
            </p>
            <Link to='/home/schemes/Central/pmjjby'>
              Find out more
              <span aria-hidden="true">→</span>
            </Link>
          </div>
        </div>

        <div className="card">
          <div className="image"></div>
          <div className="content">
            <a href="#">
              <span className="title">
                Janani Suraksha Yojana (JSY)
              </span>
            </a>
            <p className="desc">
              This scheme is aimed at reducing maternal and neonatal mortality by promoting institutional delivery among pregnant women, particularly in rural areas.
              It provides cash incentives for deliveries in healthcare institutions. 
            </p>
            <Link to='/home/schemes/Central/jsy'>
              Find out more
              <span aria-hidden="true">→</span>
            </Link>
          </div>
        </div>

        <div className="card">
          <div className="image"></div>
          <div className="content">
            <a href="#">
              <span className="title">
                Mission Indradhanush
              </span>
            </a>
            <p className="desc">
              This is an immunization program focusing on increasing the coverage of vaccines for children and pregnant women, especially in underserved areas.
            </p>
            <Link to='/home/schemes/Central/indhra'>
              Find out more
              <span aria-hidden="true">→</span>
            </Link>
          </div>
        </div>

        <div className="card">
          <div className="image"></div>
          <div className="content">
            <a href="#">
              <span className="title">
                National AIDS Control Program (NACP)
              </span>
            </a>
            <p className="desc">
              This program aims to control the spread of HIV/AIDS through prevention, care, support, and treatment services.
            </p>
            <Link to="/home/schemes/Central/nacp">
              Find out more
              <span aria-hidden="true">→</span>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default Schemes;