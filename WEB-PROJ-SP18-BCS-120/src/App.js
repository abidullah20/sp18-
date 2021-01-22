import React, { Component } from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './components/Home'
import Cart from './components/Cart'
import HomePage from './components/HomePage'
import CheckDet from "./components/CheckDet"
//import { cricket, football, basket, Baseball, badminton, tennis } from './components/Category'
import cricket from './components/Category/1Cricket';
import football from './components/Category/2Football';
import basket from './components/Category/3BasketBall';
import Baseball from './components/Category/4BaseBall';
import badminton from './components/Category/5Badminton';
import tennis from './components/Category/6Tennis';
import Categories from './components/Components/Categories'

class App extends Component {
  render() {
    return (
       <BrowserRouter>
            <div className="App">
            
              <Navbar/>
          <Switch>
            <Route exact path="/" component={ HomePage}/>
            <Route path="/Shop" component={Home}/>
            <Route path="/cart" component={Cart} />
            <Route path="/Det" component={CheckDet} />
            <Route path="/cric" component={cricket} />
            <Route path="/FB" component={football} />
            <Route path="/BB" component={basket} />
            <Route path="/BSB" component={Baseball} />
            <Route path="/BD" component={badminton} />
            <Route path="/TN" component={tennis} />
            <Route path="/Category" component={Categories} />
            

            
                  </Switch>
             </div>
       </BrowserRouter>
      
    );
  }
}

export default App;
