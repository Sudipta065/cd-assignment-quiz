import React, { Component } from "react";
import logo from "../img/upskill.PNG";
class Navbar extends Component {
  render() {
    return (
      <>
        {" "}
        <div className="navbar-section">
          <div className="logo-div">
            <img src={logo} alt="" />
          </div>
          <div className="nav-items-div">
            <div className="nav-item nav-item-active">
              <a href="#">Home </a>
            </div>
            <div className="nav-item">
              <a href="#">Training</a>
            </div>
            <div className="nav-item">
              <a href="#">Video Lessons</a>
            </div>
            <div className="nav-item">
              <a href="#">Earn with upskill</a>
            </div>
          </div>
          <div className="sign-in-div">
            <div className="sign-in-group">
              <i className="fas fa-user-circle"></i>
              <div>
                <a href="./sign-in.html"> Sign In</a>
              </div>
            </div>
            <button className="sign-up-btn">Sign Up</button>
          </div>
        </div>
      </>
    );
  }
}
export default Navbar;
