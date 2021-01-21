import React, { Component } from 'react';
import { connect } from 'react-redux'
import { addToCart } from './actions/cartActions'
import { Link } from 'react-router-dom';

 class BestProd extends Component{
    
    handleClick = (id)=>{
        this.props.addToCart(id); 
    }

    render(){
        let itemList = this.props.items.map(item=>{
            if((item.id % 3 == 0) || (item.id % 5 == 0)){
            return(
                
                <div className="card" key={item.id}>
                        <div className="card-image">
                            <img src={item.img} alt={item.title}/>
                            <span className="card-title">{item.title}</span>
                            <span to="/" className="btn-floating halfway-fab waves-effect waves-light red" onClick={()=>{this.handleClick(item.id)}}><i className="material-icons">add</i></span>
                        </div>

                        <div className="card-content">
                            <p>{item.desc}</p>
                            <p><b>Price: {item.price} Rs.</b></p>
                        </div>
                 </div>

            )}
        })

        return(
            <div className = "ProdP">
            <div className="container">
            
            <Link to="/Category">
            <div className="banner__btn">
            
              <a href="/" className="btn btn-smart">

                Product Category
              </a>
            </div></Link>

                <h3 className="center">Best Products</h3>
                <div className="box">
                    {itemList}
                </div>
            </div></div>
        )
    }
}
const mapStateToProps = (state)=>{
    return {
      items: state.items
    }
  }
const mapDispatchToProps= (dispatch)=>{
    
    return{
        addToCart: (id)=>{dispatch(addToCart(id))}
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(BestProd)