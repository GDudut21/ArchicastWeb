import React from "react";
import "./about.css";  // Import the CSS file

export const About = (props) => {
  // Vision and Mission data
  const visionText = "Our vision is to be a leading force in innovative design and construction, shaping spaces that foster creativity, sustainability, and functionality. We aim to revolutionize the industry with cutting-edge technologies and designs that prioritize environmental responsibility and meet the needs of tomorrow.";
  
  const missionText = "Our mission is to deliver high-quality, cost-effective, and sustainable construction projects that exceed client expectations. We are committed to providing exceptional service through skilled craftsmanship, collaborative efforts, and a focus on safety, innovation, and integrity in every aspect of our work.";

  return (
    <div id="about">
      <div className="container">
        <div className="row">
          {/* Left Container: Vision */}
          <div className="col-xs-12 col-md-6">
            <div className="vision-container">
              <h2>Vision</h2>
              <p>{visionText}</p>
            </div>
          </div>

          {/* Right Container: Mission with logos */}
          <div className="col-xs-12 col-md-6">
            <div className="mission-container">
              <h2>Mission</h2>
              <p>{missionText}</p>

              {/* Logos */}
              <div className="logo-container">
                <img
                  src="/img/archicastlogo.png"  // Use your logo path
                  className="logo"
                  alt="Logo 1"
                />
              </div>
              <div className="logo-container">
                <img
                  src="/img/archicastlogo.png"  // Use your logo path
                  className="logo"
                  alt="Logo 2"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
