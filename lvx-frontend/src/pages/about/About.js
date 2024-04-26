import React from "react";
import lvx from "../../Images/lvx.jpg";
import "./about.css";

function About() {
  return (
    <>
      <div className="aboutpage">
        <img src={lvx} alt="lvx" className="lvximg"/>
        <div className="aboutbox">
          <div className="abouttext">
            Lvx is a classified website for LPU students, our motive is to make
            the selling process easier for students who want to sell second-hand
            products or the products which they aren't going to use.
            <br></br>
            <br></br>
          </div>
        </div>
      </div>
    </>
  );
}

export default About;
