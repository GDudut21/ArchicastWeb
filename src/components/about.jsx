// src/components/About.jsx
import React from "react";
import "./about.css";

export const About = () => {
  const visionText =
    "Our vision is to be a leading force in innovative design and construction, shaping spaces that foster creativity, sustainability, and functionality. We aim to revolutionize the industry with cutting-edge technologies and designs that prioritize environmental responsibility and meet the needs of tomorrow.";
  const missionText =
    "Our mission is to deliver high-quality, cost-effective, and sustainable construction projects that exceed client expectations. We are committed to providing exceptional service through skilled craftsmanship, collaborative efforts, and a focus on safety, innovation, and integrity in every aspect of our work.";

  return (
    <section id="about">
      <div className="container about-container">
        <div className="row">
          {/* Vision Column */}
          <div className="col-xs-12 col-md-6">
            <div className="vision-container">
              <h2 className="custom-title">
                <span className="archi">VIS</span>
                <span className="cast">ION</span>
              </h2>
              <p>{visionText}</p>
            </div>
          </div>

          {/* Mission Column */}
          <div className="col-xs-12 col-md-6">
            <div className="mission-container">
              <h2 className="custom-title">
                <span className="archi">MIS</span>
                <span className="cast">SION</span>
              </h2>
              <p>{missionText}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
