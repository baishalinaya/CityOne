import React from "react";
import './AboutUs.css';

const AboutUs = () => {
    return (
        <div class="Main-intro">
  <h1 class="about">About Us</h1>
  <p>WELCOME TO <b>CityOne </b>your premier destination for all things city-related! </p>
  <div id="teamCarousel" class="carousel slide" data-ride="carousel">
    <div class="carousel-inner">
      <div class="carousel-item active">
        <div class="team-members">
          <div class="member">
            <img src="member1.jpg" alt="Member 1"></img>
            <h2>Baibhab Nayak</h2>
          </div>
        </div>
      </div>
      <div class="carousel-item">
        <div class="team-members">
          <div class="member">
            <img src="member2.jpg" alt="Member 2"></img>
            <h2>Prateekshya Behera</h2>
          </div>
        </div>
      </div>
      <div class="carousel-item">
        <div class="team-members">
          <div class="member">
            <img src="member3.jpg" alt="Member 3"></img>
            <h2>Baishali Nayak</h2>
          </div>
        </div>
      </div>
      <div class="carousel-item">
        <div class="team-members">
          <div class="member">
            <img src="member4.jpg" alt="Member 4"></img>
            <h2>Samplita Nayak</h2>
          </div>
        </div>
      </div>
      <div class="carousel-item">
        <div class="team-members">
          <div class="member">
            <img src="member5.jpg" alt="Member 5"></img>
            <h2>Sukanya Sahoo</h2>
          </div>
        </div>
      </div>
    </div>
    <a class="carousel-control-prev" href="#teamCarousel" role="button" data-slide="prev">
      <span class="carousel-control-prev-icon" aria-hidden="true"></span>
      <span class="sr-only">Previous</span>
    </a>
    <a class="carousel-control-next" href="#teamCarousel" role="button" data-slide="next">
      <span class="carousel-control-next-icon" aria-hidden="true"></span>
      <span class="sr-only">Next</span>
    </a>
  </div>
</div>
  );}
        
    export default AboutUs;