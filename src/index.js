import React from "react";
import ReactDOM from "react-dom";

import "./styles.css";
import MainQuiz from "./components/MainQuiz";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="contents">
        <div className="contents-left">
          <div className="content-left-container">
            <div className="content-left-head">Graphic Design</div>
            <div className="content-left-title">
              Photoshop Quiz <br></br>Questions And Answers
            </div>
            <div className="content-left-paragraph">
              A short quiz to test how well you know <br></br> Adobe Photoshop
            </div>
            <div className="content-left-footer">
              <div className="content-left-footer-left">
                <div className="content-left-footer-left-name">
                  By Bappi Ashraf
                </div>
                <div className="content-left-footer-left-date">
                  Oct 9th, 06:03:11 PM
                </div>
              </div>
              <div className="content-left-footer-right">
                <i class="fab fa-facebook-square"></i>
                <i class="fab fa-linkedin"></i>
              </div>
            </div>
          </div>
        </div>
        <div className="contents-right">
          <MainQuiz />
        </div>
      </div>
      <Footer />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
