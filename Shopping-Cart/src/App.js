import React, { Component } from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './components/Home'
import Cart from './components/Cart'
import HomePage from './components/HomePage';
import EyeProducts from './components/EyeProducts';
import Categories from './components/Components/Categories'
import FaceProducts from './components/FaceProducts'
import HairProducts from './components/HairProducts'
import LipsProducts from './components/LipsProducts'
import NailProducts from './components/NailProducts'
import BestProd from './components/BestProd'

class App extends Component {
  render() {
    return (
       <BrowserRouter>
            <div className="App">
            
              <Navbar/>
                <Switch>
                    <Route exact path="/" component={HomePage}/>
                    <Route path="/cart" component={Cart}/>
                    <Route path="/shop" component={Home}/>
                    <Route path="/eye" component={EyeProducts}/>
                    <Route path="/Category" component={Categories}/>
                    <Route path="/face" component={FaceProducts}/>
                    <Route path="/hair" component={HairProducts}/>
                    <Route path="/nail" component={NailProducts}/>
                    <Route path="/lip" component={LipsProducts}/>
                    <Route path="/best" component={BestProd}/>

                  </Switch>
             </div>
       </BrowserRouter>
      
    );
  }
}

export default App;
