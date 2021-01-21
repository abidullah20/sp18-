import React from "react";
import { Link } from 'react-router-dom';

const Product2 = () => {
  return (
    <div className="about">
      <div className="container">
        <div className="row">
          <div className="col-6">
            <div className="about__img">
              <a href="./lips.html" target="_blank">  
                <img src="/img/product2.jpg" alt="Hot deal" />
            </a>
            </div>
          </div>
          <div className="col-6 p-25">
            <h3>HOT DEAL</h3>
            <h1>CLEAN TREATS 4-PIECE CLEAN BEAUTY KIT</h1>
            <p>
            This exclusive, limited-edition clean beauty makeup
             kit includes 4 must-haves for a party-ready look, plus an eco friendly makeup bag made from recycled 
             plastic bottles.
            </p>
            <Link to="/shop">
            <div className="about__btn">
              <a href="" className="btn btn-smart">
                BUY NOW(50% OFF)
              </a>
            </div></Link>
          </div>
        </div>
      </div>
    </div>

    



  );
};

export default Product2;
