import React from "react";
import { Link } from 'react-router-dom';

const Product3 = () => {
  return (
    <div className="about">
      <div className="container">
        <div className="row">
          <div className="col-6 p-25 inline_right">
            <h3>HOT DEAL</h3>
            <h1>FULL SIZE LASHTOPIA MASCARA DUO</h1>
            <p>
            Experience our fan favorite volumizing mascara
             with this limited-edition duo, at a special value for the holidays
             </p>
            <div className="about__btn">
              <a href="" className="btn btn-smart">
                BUY NOW (20% off)
              </a>
            </div>
          </div>
          <div className="col-6 inline_right" >
            <div className="about__img">
              <img src="/img/product3.jpg" alt="Hot Deal" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product3;
