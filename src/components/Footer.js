import React, { Component } from "react";
import foot from "../img/ict.png";
class Footer extends Component {
  render() {
    return (
      <>
        <div className="footer">
          <div className="footer-section-1">
            <div className="footer-header">About us</div>
            <div className="footer-section-1-content">
              Upskill is a peer to peer skill sharing platform. It enables
              individuals and organizations to share skills and exchange
              technical knowledge to bridge the skills gap in Bangladesh.
            </div>
            <div className="footer-img-div">
              <img src={foot} />
            </div>
          </div>
          <div className="footer-section-2">
            <div className="footer-header">Helpful Links</div>
            <div className="footer-section-2-content">
              <a href="#">FAQ</a>
              <a href="#">Terms and Conditions</a>
              <a href="#"> PrivacyStatement</a>
              <a href="#"> About Upskill</a>
            </div>
          </div>
          <div className="footer-section-3">
            <div className="footer-header">Contact</div>
            <div className="footer-section-3-content">
              {" "}
              <div className="foot-address">
                {" "}
                Upskill Training Center <br></br>
                Flat- 4B, House- 516/3, Lane- 10 <br></br>
                Baridhara DOHS
              </div>
              <div className="foot-number"> 01727 234132 </div>
              <div className="foot-email">sanan.upskill@gmail.com</div>
            </div>
          </div>
          <div className="footer-section-4">
            <div className="footer-header">Subscribe to our newsletter</div>
            <div className="footer-section-4-content">
              <input
                className="footer-input-box"
                placeholder="Type your mail"
              />
              <button className="footer-btn">subscribe</button>
            </div>
          </div>
        </div>
      </>
    );
  }
}
export default Footer;
