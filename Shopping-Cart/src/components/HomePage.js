import React from 'react';
import './App.css'
import Header from "./Components/Header";
import Product1 from "./Components/Product1";
import Shop from "./Components/Shop";
import Product2 from "./Components/Product2";
import Product3 from "./Components/Product3";
import Product4 from "./Components/Product4";

import Categories from "./Components/Categories";



function HomePage() {
  return (
    <div >
      <Header />
      <Product1 />
      <Product2 />
     <Product3 />
     <Product4 />
     <Shop />
      <Categories />
    </div>
  );
}

export default HomePage;
