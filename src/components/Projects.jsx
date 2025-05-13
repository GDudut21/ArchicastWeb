import React, { useEffect, useRef } from "react";
import "./Projects.css";

const projects = [
  { src: "/img/HAWTHORNE HEIGHTS.png", alt: "Hawthorne Heights" },
  { src: "/img/LUSH RESIDENCES.png", alt: "Lush Residences" },
  { src: "/img/MAKATI CITY CONDO.png", alt: "Red Residences" },
  { src: "/img/MINT RESIDENCE.png", alt: "Mint Residences" },
  { src: "/img/PLUMERIA HEIGHTS.png", alt: "Plumeria Heights" },
  { src: "/img/RICINVEST.png", alt: "RIC Invest" },
  { src: "/img/SAIL RESIDENCES.png", alt: "Sail Residences" },
  { src: "/img/GOLD RESIDENCES.png", alt: "Gold Residences" },
  { src: "/img/GREEN TWO.png", alt: "Green 2 Residences" },
];

export const Projects = () => {
  const trackRef = useRef(null);

  useEffect(() => {
    const track = trackRef.current;
    let scrollAmount = 0;
    const slideWidth = 310; // Adjust based on your image + padding width

    const scroll = () => {
      if (track) {
        scrollAmount += 1;
        if (scrollAmount >= track.scrollWidth / 2) {
          scrollAmount = 0;
        }
        track.style.transform = `translateX(-${scrollAmount}px)`;
      }
    };

    const interval = setInterval(scroll, 20); // Adjust speed here
    return () => clearInterval(interval);
  }, []);

  // Duplicate images for seamless looping
  const loopedProjects = [...projects, ...projects];

  return (
    <section id="projects" className="carousel-loop-section">
      <div className="section-title text-center">
        <h2>Our Projects</h2>
      </div>
      <div className="carousel-loop-container">
        <div className="carousel-loop-track" ref={trackRef}>
          {loopedProjects.map((project, index) => (
            <div className="carousel-loop-slide" key={index}>
              <img src={project.src} alt={project.alt} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
