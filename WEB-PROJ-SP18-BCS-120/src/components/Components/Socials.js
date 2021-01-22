import React from "react";

const Socials = () => {
  return (
    
    <div className="socials">
      <h1 className="soc">SOCIALS</h1>
      <div className="container">
      
        <div className="row">
          <div className="col-3">
            <div className="social">
              <a href=""><img src="./img/fb.png"></img></a>
              <a href=""><p>facebook.com/gettysports</p></a>
            </div>
          </div>
          <div className="col-3">
            <div className="social">
            <a href=""><img src="./img/insta.png"></img></a>
            <a href=""><p>@gettysports</p></a>
            </div>
          </div>
          <div className="col-3">
            <div className="social">
            <a href=""><img src="./img/twitter.png"></img></a>
            <a href=""><p>twitter.com/gettysports</p></a>
            </div>
          </div>
          <div className="col-3">
            <div className="social">
            <a href=""><img src="./img/sc.jpg"></img></a>
            <a href=""><p>@gettysports</p></a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Socials;
