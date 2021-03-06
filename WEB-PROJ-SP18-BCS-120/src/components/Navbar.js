import React from 'react';
import { Link } from 'react-router-dom'
import './App.css'
 const Navbar = ()=>{
    return(
            <nav className="nav-wrapper">
                <div className="container">
                <Link to="/" className="brand-logo logo"><img src = "./img/logo.png" alt = "logo" /></Link>
                    
                <ul className="right">
                    <li><Link to="/">Home</Link></li>
                        <li><Link to="/Shop">Shop</Link></li>
                        <li><Link to="/cart">My cart</Link></li>
                        <li><Link to="/cart"><i className="material-icons">shopping_cart</i></Link></li>
                    </ul>
                </div>
            </nav>
   
        
    )
}

export default Navbar;