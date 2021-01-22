import React from "react";
import { Link } from 'react-router-dom';

const Categories = () => {
  return (
    <div className="categories">
      <h1 className="soc">Browse by Sports</h1>
      <div className="container">
        <div className="row-pz">
          <div className="col-4">
            <div className="category">
              <div className="category__img">
                <img src="/img/cricket.jpg" alt="not found" />
              </div>
              <h1 className="category__heading">Cricket</h1>
              
              <div className="discount__btn">
                <a href="" className="btn btn-smart">
                  <Link to="/cric">EXPLORE</Link>
              

              </a>
            </div>
            </div>
          </div>

          <div className="col-4">
            <div className="category">
              <div className="category__img">
                <img src="/img/fifa.jpg" alt="not found" />
              </div>
              <h1 className="category__heading">Football</h1>
              
              <div className="discount__btn">
              <a href="" className="btn btn-smart">
              <Link to="/FB">EXPLORE</Link>

              </a>
            </div>
            </div>
          </div>

          <div className="col-4">
            <div className="category">
              <div className="category__img">
                <img src="/img/basketball.jpg" alt="not found" />
              </div>
              <h1 className="category__heading">Basketball</h1>
              
              <div className="discount__btn">
              <a href="" className="btn btn-smart">
              <Link to="/BB">EXPLORE</Link>

              </a>
            </div>
            </div>
          </div>

          <div className="col-4">
            <div className="category">
              <div className="category__img">
                <img src="/img/baseball.jpg" alt="not found" />
              </div>
              <h1 className="category__heading">Baseball</h1>
              
              <div className="discount__btn">
              <a href="" className="btn btn-smart">
              <Link to="/BSB">EXPLORE</Link>

              </a>
            </div>
            </div>
          </div>

          <div className="col-4">
            <div className="category">
              <div className="category__img">
                <img src="/img/bad.jpg" alt="not found" />
              </div>
              <h1 className="category__heading">Badminton</h1>
              
              <div className="discount__btn">
              <a href="" className="btn btn-smart">
              <Link to="/BD">EXPLORE</Link>

              </a>
            </div>
            </div>
          </div>

          <div className="col-4">
            <div className="category">
              <div className="category__img">
                <img src="/img/tennis.jpg" alt="not found" />
              </div>
              <h1 className="category__heading">Tennis</h1>
              
              <div className="discount__btn">
              <a href="" className="btn btn-smart">
              <Link to="/TN">EXPLORE</Link>

              </a>
            </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Categories;
