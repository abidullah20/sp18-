import React from "react";
import { Link } from 'react-router-dom';

const Product4 = () => {
  return (
    <div className="about">
      <div className="container">
        <div className="row">
          <div className="col-6">
            <div className="about__img">
              <img src="/img/product4.jpg" alt="Hot deal" />
            </div>
          </div>
          <div className="col-6 p-25 inline_right">
            <h3>HOT DEAL</h3>
            <h1>PORELESS AT ANY AGE</h1>
            <p>
            Minimize the look of pores with this
             limited-edition, travel-size skincare kit that's perfect for all skin types
            </p><Link to="/shop">
            <div className="about__btn">
              <a href="" className="btn btn-smart">
                BUY NOW(25% OFF)
              </a>
            </div></Link>
          </div>
        </div>
      </div>
    </div>

    



  );
};

export default Product4;
