import React from "react";
import { Link } from 'react-router-dom';

const Discount4 = () => {
  return (
    <div className="discount">
      <h1 className="discounts"> </h1>
      <div className="container">
        <div className="row">
        <div className="col-6 inline_right" >
            <div className="discount__img">
              <img className="zoom" src="/img/reakt2.png" alt="bm1" />
            </div>
          </div>
          <div className="col-6 p-25 inline_left">
            
            <h1>The RE-AKT 200 HELMET is <span className="Live">Live!!</span></h1>
            <p>
              <span className="strike">$150 </span>    <span className="red">$100</span>
            </p>
            <div className="discount__btn">
              <a href="" className="btn btn-smart">
                <Link to="/Shop">GET NOW</Link>
              </a>
            </div>
          </div>
          <div className="col-6 inline_right" >
            <div className="discount__img">
              <img className="zoom" src="/img/reakt1.png" alt="bm2" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Discount4;
