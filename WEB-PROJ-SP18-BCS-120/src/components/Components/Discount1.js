import React from "react";
import { Link } from 'react-router-dom';

const Discount1 = () => {
  return (
    <div className="discount">
      <h1 className="discounts"> NEW AT THE STORE</h1>
      <div className="container">
        <div className="row">
        <div className="col-6 inline_right" >
            <div className="discount__img">
              <img className="zoom" src="/img/bluemax1.jpg" alt="bm1" />
            </div>
          </div>
          <div className="col-6 p-25 inline_left">
            
            <h1>The Gary Nicholls Blue Max is <span className="Live">Live!!</span></h1>
            <p>
            <span className="strike">12000 Rs </span>    <span className="red">9500 Rs</span>

            </p>
            <div className="discount__btn">
              <a href="" className="btn btn-smart">
                <Link to="/Shop">GET NOW</Link>
                
              </a>
            </div>
          </div>
          <div className="col-6 inline_right" >
            <div className="discount__img">
              <img className="zoom" src="/img/bluemax2.jpg" alt="bm2" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Discount1;
