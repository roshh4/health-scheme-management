import React, { useState, useEffect } from "react";
import "./schmes.css";
import { Link } from "react-router-dom";
import axios from "axios";

function Schemes() {
  const [schemes, setSchemes] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:3001/api/schemes')
      .then(response => {
        setSchemes(response.data);
      })
      .catch(error => {
        console.error("There was an error fetching the schemes!", error);
      });
  }, []);

  return (
    <>
      <div className="text">
        <h1>Central Government Schemes</h1>
      </div>
      <div className="line1">
        {schemes.map((scheme, index) => (
          <div className="card" key={index}>
            <div className="image"></div>
            <div className="content">
              <a href="#">
                <span className="title">{scheme.name}</span>
              </a>
              <p className="desc">{scheme.description}</p>
              <Link to={`/home/schemes/${index}`}>
                Find out more
                <span aria-hidden="true">→</span>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default Schemes;