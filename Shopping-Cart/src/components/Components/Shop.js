import React from "react";
import { Link } from 'react-router-dom';

const Shop = () => {
  return (
    <div className="shop">
      <div className="container">
        <div className="shop__text">
          <div>
            <h1>BUY ITEMS WORTH MORE THAN $50 AND GET FREE SHIPPING</h1>
            <Link to="/shop">
            <div className="shop__btn">
              <a href="" className="btn btn-smart">
                SEE PRODUCTS
              </a>
            </div></Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Shop;
