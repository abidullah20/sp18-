import React from "react";
import { Link } from 'react-router-dom';

const Categories = () => {
  return (
    <div className="categories">
      <div className="container">
        <div className="row-pz">
          <div className="col-4">
            <div className="category">
              <div className="category__img">
                <img src="/img/cat1.webp" alt="category" />
              </div>
              <h1 className="category__heading">Lips Products</h1>
              <p className="category__text">
              Do you prefer bold lips or love the light lipstick shades? Makeupcity Shop is the right place to
               feed
               your passion for stunning lipsticks.We all know lipsticks make a considerable difference and 
               finish off your makeup look. And we are proud to have a massive lipstick collection so that 
               makeup enthusiasts like you find the perfect shades.
              </p>
              <Link to="/lip">
              <div className="about__btn">
              <a href="" className="btn btn-smart">
                SEE PRODUCTS
                
              </a>
            </div></Link>
            </div>
          </div>

          <div className="col-4">
            <div className="category">
              <div className="category__img">
                <img src="/img/cat2.webp" alt="Category" />
              </div>
              <h1 className="category__heading">Nail Products</h1>
              <p className="category__text">
              Who doesn’t admire gorgeous nail paint?

              Nail polish colors with excellent quality were hard to find. But Makeupcity Shop fixed it for 
              you!

              Makeupcity Shop welcomes you to take a tour of our nail polish collection. Did you know that our
               collection 
              ranges from pastels to dark nail polish colors?  We bet you can find colors that match your every
               outfit.
              </p>
              <Link to="/nail">
              <div className="about__btn">
              <a href="" className="btn btn-smart">
                SEE PRODUCTS
              </a>
            </div></Link>
            </div>
          </div>

          <div className="col-4">
            <div className="category">
              <div className="category__img">
                <img src="/img/cat3.webp" alt="category" />
              </div>
              <h1 className="category__heading">Hair Products  </h1>
              <p className="category__text">
              Hair needs your attention, just like your skin. So, are you up to take some good care of your hair?

              Be it, men or women, taking care of your hair prevents hair loss 
              </p>
              <Link to="/hair">
              <div className="about__btn">
              <a href="" className="btn btn-smart">
                SEE PRODUCTS
              </a>
            </div></Link>
            </div>
          </div>

          <div className="col-4">
            <div className="category">
              <div className="category__img">
                <img src="/img/cat4.webp" alt="category" />
              </div>
              <h1 className="category__heading">Skin Products</h1>
              <p className="category__text">
              Skincare is absolutely essential! Proper skin care
               and maintaining a healthy routine will help in making the skin firm, tough, and beautiful. When you start
                the skin care business, apart from the names, you require the right skincare slogan to help your business
                 up. Perfect beauty taglines will help you to attract customers and eventually, your business will start 
                 observing profits..
              </p>
              <Link to="/face">
              <div className="about__btn">
              <a href="" className="btn btn-smart">
                SEE PRODUCTS
              </a>
            </div></Link>
            </div>
          </div>

          <div className="col-4">
            <div className="category">
              <div className="category__img">
                <img src="/img/cat5.webp" alt="category" />
              </div>
              <h1 className="category__heading">Eye Products</h1>
              <p className="category__text">
              Eye shadow palettes from widely known brands are just one click away. For makeup lovers or makeup
               artists, eye shadow palettes are essential to creating breathtakingly gorgeous looks.

              Makeup city is the right outlet to find international eye shades. We have both single eye shadows 
              and palettes. Our massive collection has something for everyone.
               </p>
               <Link to="/eye">
              <div className="about__btn">
              <a href="" className="btn btn-smart">
                SEE PRODUCTS
              </a>
            </div></Link>
            </div>
          </div>

          <div className="col-4">
            <div className="category">
              <div className="category__img">
                <img src="/img/cat6.webp" alt="category" />
              </div>
              <h1 className="category__heading">Top Rated Products</h1>
              <p className="category__text">
                Don't forget to check out our top rated beauty products. You will find product of every
                category with modest prices and even better discounts. Click the button  below right now.
              </p>
              <Link to="/best">
              <div className="about__btn">
              <a href="" className="btn btn-smart">
                SEE PRODUCTS
              </a>
            </div></Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Categories;
