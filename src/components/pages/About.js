import React from "react";
import Image from "../images/oumar.png";

function About() {
  return (
    <div>
      <h2>A Propos de Moi</h2>
      <div id="myCarousel" class="carousel slide" data-ride="carousel">
        <div class="carousel-inner">
          <div class="carousel-item active">
            <div class="img-box">
              <img src={Image} alt="" />
            </div>
            <p class="testimonial">
              Je suis El Hadji Oumar MBENGUE et je suis passionné de
              developpement Informatique . Etudiant en MPSI 1 à l'ESMT
            </p>
            <p class="overview">
              <b>El Hadji Oumar MBENGUE</b>Developpeur Full Stack{" "}
              <a href="https://github.com/ElHadjiOumar">Code source</a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
