import React from "react";
import { Link } from 'react-router-dom';

const Discount2 = () => {
  return (
    <div className="discount">
      <div className="container">
        <div className="row">
          <div className="col-6">
            <div className="discount__img">
              <img className="zoom"src="/img/adizero1.jpg" alt="az1" />
            </div>
          </div>
          <div className="col-6 p-25">
            <h1>ADIZERO CLEATS are <span className="Live">Live!!</span></h1>
            <p>
            <span className="strike">10000 Rs </span>    <span className="red">7000 Rs</span> 
            </p>
            <div className="discount__btn">
              <a href="" className="btn btn-smart">
              <Link to="/Shop">GET NOW</Link>

              </a>
            </div>
          </div>
          <div className="col-6">
            <div className="discount__img">
              <img className="zoom" src="/img/adizero2.jpg" alt="az2" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Discount2;
