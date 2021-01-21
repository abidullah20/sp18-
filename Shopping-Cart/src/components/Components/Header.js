import React from 'react'
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div className="banner">
      <div className="banner__content">
        <div className="container">
          <div className="banner__text">
            <h3>YOUR MINERALS</h3>
            <h3>BARE MINERALS</h3>
            <p>
            Don’t forget to check out the following products with amazing discounts and deals.
            Shop 100 % original makeup, skincare, fragrance and hair care products from Kryolan,
             Janssen, ST London,  Gosh, Framesi and more top brands.
            </p>
            <Link to="/shop">
            <div className="banner__btn">
              <a href="" className="btn btn-smart">

                SEE PRODUCTS
              </a>
            </div></Link>
          </div>
        </div>
      </div>
    </div>
    )
}

export default Header;
