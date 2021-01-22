import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div className="banner">
      <div className="banner__content">
        <div className="container">
          <div className="banner__text">
            <h3>GettySports.pk</h3>
            <h1>Sports Goods</h1>
            <p>
              Premium Sports goods from Pakistan Delivered all over the world(Free delivery in Pakistan),
              standard charges in other regions.
            </p>
            <div className="banner__btn">
                <a href="" className="btn btn-smart">
                  <Link to="/Shop"> ORDER NOW</Link>
               
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
    )
}

export default Header;
