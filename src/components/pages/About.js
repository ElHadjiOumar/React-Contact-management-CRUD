import React from "react";
import Image from "../images/luffy.png";

const About = () => {
  return (
    <div className="container emp-profile">
      <form method="">
        <div className="row">
          <div className="col-md-4">
            <img src={Image} alt="thapa" width="200" height="200" />
          </div>
          <div className="col-md-6">
            <div className="profile-head">
              <h5>El Hadji Oumar</h5>
              <h6>Developpeur Web</h6>
              <p className="profile-rating mt-3 mb-5"></p>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default About;
