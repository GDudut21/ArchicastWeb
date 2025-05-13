import React, { useEffect, useRef } from "react";
import "./services.css";

export const Services = () => {
  const titleRef = useRef(null);

  useEffect(() => {
    const elements = document.querySelectorAll(".service-card, .section-header.services-title");
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("reveal");
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.2 });

    elements.forEach((el) => observer.observe(el));

    return () => {
      elements.forEach((el) => observer.unobserve(el));
    };
  }, []);

  return (
    <section id="services" className="services-section">
      <div className="section-header services-title" ref={titleRef}>
        <h2>SERVICES</h2>
        <hr />
      </div>
      <div className="services-container">
        <div className="service-card left-align" style={{ backgroundImage: "url(/img/Service2.jpg)", "--i": 0 }}>
          <div className="overlay" />
          <div className="service-content">
            <h3>Modular Office Units</h3>
            <p>
              Engineered for rapid deployment and cost-efficiency, our modular buildings provide durable,
              scalable solutions ideal for site offices, staff housing, or temporary facilities.
            </p>
          </div>
        </div>

        <div className="service-card right-align" style={{ backgroundImage: "url(/img/Service3.jpg)", "--i": 1 }}>
          <div className="overlay" />
          <div className="service-content">
            <h3>Precast Panel Production</h3>
            <p>
              We manufacture precision-cast concrete panels using advanced technology for faster construction
              timelines, improved quality control, and sustainable site practices.
            </p>
          </div>
        </div>

        <div className="service-card left-align" style={{ backgroundImage: "url(/img/service4.jpg)", "--i": 2 }}>
          <div className="overlay" />
          <div className="service-content">
            <h3>Reinforcement Steel Fabrication</h3>
            <p>
              Our skilled workforce and rebar processing systems ensure accuracy and safety in every cage and
              frame we fabricate—supporting stronger foundations and reliable concrete structures.
            </p>
          </div>
        </div>

        <div className="service-card right-align" style={{ backgroundImage: "url(/img/Service.jpg)", "--i": 3 }}>
          <div className="overlay" />
          <div className="service-content">
            <h3>Batching & Silo Plant Installation</h3>
            <p>
              From assembly to integration, we build silo towers and batching stations optimized for volume,
              stability, and automation—backing continuous production for any scale of construction.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
