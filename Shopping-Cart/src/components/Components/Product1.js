import React from "react";
import { Link } from 'react-router-dom';

const Product1 = () => {
  return (
    <div className="about">
      <div className="container">
        <div className="row">
          <div className="col-6 p-25 inline_left">
            <h3>HOT DEAL</h3>
            <h1>MINI SKIN-COMFORTING DUO</h1>
            <p>
            Soothe your skin with this limited-edition,
             travel-size PURENESS Cleanser and Moisturizer duo - gentle enough for even the most sensitive skin
            </p>
            <Link to="/shop">
            <div className="about__btn">
              <a href="" className="btn btn-smart">
                BUY NOW (40% off)
              </a>
            </div></Link>
          </div>
          <div className="col-6 inline_right" >
            <div className="about__img">
              <img src="/img/product1.jpg" alt="Hot Deal" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product1;
