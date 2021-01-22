import React from 'react';
import './App.css'
import Header from "./Components/Header";
import Discount1 from "./Components/Discount1";
import Report from "./Components/Report";
import Discount2 from "./Components/Discount2";
import Socials from "./Components/Socials";
import Categories from "./Components/Categories";
import Discount3 from "./Components/Discount3";
import Discount4 from "./Components/Discount4";

function HomePage() {
  return (
    <div >
      <Header />
      <Categories />
      <Discount1 />
      <Discount2 />
      <Discount3 />
      <Discount4 />
      <Report />
      <Socials />
    </div>
  );
}

export default HomePage;