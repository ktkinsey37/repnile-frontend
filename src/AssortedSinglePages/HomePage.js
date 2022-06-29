import React, { useState } from "react";
import image0 from "../Images/image0.jpeg"
import "./HomePage.css"

const HomePage = () => {

 
    return (
    <div className="homePageMain">
      <div className="homepageContainer text-center homepage">
        <img className="homeImage" src={image0}>
        </img>
        <div class="centered">
          <h1 class="font-weight-bold repnileText">Repnile Exotics</h1>
          <h4 class="repnileText">All your reptile needs in one convenient place</h4>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
