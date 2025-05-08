import React, { useEffect, useRef, useState } from "react";
import './services.css';

export const Services = () => {
  const [flippedIndex, setFlippedIndex] = useState(null);
  const containerRef = useRef(null);
  const titleRef = useRef(null);

  const services = [
    {
      img: "/img/Service2.jpg",
      title: "Modular Office Units",
      desc: "Engineered for rapid deployment and cost-efficiency, our modular buildings provide durable, scalable solutions ideal for site offices, staff housing, or temporary facilities."
    },
    {
      img: "/img/Service3.jpg",
      title: "Precast Panel Production",
      desc: "We manufacture precision-cast concrete panels using advanced technology for faster construction timelines, improved quality control, and sustainable site practices."
    },
    {
      img: "/img/service4.jpg",
      title: "Reinforcement Steel Fabrication",
      desc: "Our skilled workforce and rebar processing systems ensure accuracy and safety in every cage and frame we fabricate—supporting stronger foundations and reliable concrete structures."
    },
    {
      img: "/img/Service.jpg",
      title: "Batching & Silo Plant Installation",
      desc: "From assembly to integration, we build silo towers and batching stations optimized for volume, stability, and automation—backing continuous production for any scale of construction."
    },
  ];

  const handleFlip = (index) => {
    setFlippedIndex(index === flippedIndex ? null : index);
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add("reveal");
          }
        });
      },
      { threshold: 0.3 }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }
    if (titleRef.current) {
      observer.observe(titleRef.current);
    }

    return () => {
      if (containerRef.current) {
        observer.unobserve(containerRef.current);
      }
      if (titleRef.current) {
        observer.unobserve(titleRef.current);
      }
    };
  }, []);

  return (
    <section id="services" className="services-section">
      <div className="section-header services-title" ref={titleRef}>
        <h2>SERVICES</h2>
        <hr />
      </div>
      <div className="services-container" ref={containerRef}>
        {services.map((service, index) => (
          <div key={index} className="service-card" onClick={() => handleFlip(index)}>
            <div className={`card-inner ${flippedIndex === index ? 'flipped' : ''}`}>
              <div className="card-front">
                <img src={service.img} alt={service.title} />
                <div className="card-title-overlay">
                  <h3>{service.title}</h3>
                </div>
              </div>
              <div className="card-back">
                <p>{service.desc}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
