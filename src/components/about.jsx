// src/components/About.jsx
import React, { useState } from "react";
import "./about.css";

export const About = () => {
  // 1) Data for "Why Precast?" tabs
  const precastItems = [
    {
      id: "quality",
      title: "Quality",
      content:
        "Precast concrete is manufactured in a controlled environment, allowing for precise measurements and consistent quality that have been extensively tested and proven to meet or exceed standards for strength and performance.",
    },
    {
      id: "speed",
      title: "Speed",
      content:
        "Precast concrete elements can be installed quickly, reducing on-site assembly time and minimizing disruption to the surrounding area.",
    },
    {
      id: "cost",
      title: "Cost",
      content:
        "The simplified construction process saves time, boosts productivity, and improves safety, resulting in lower overall costs.",
    },
    {
      id: "durability",
      title: "Durability",
      content:
        "Precast concrete has a long service life and requires minimal maintenance, resisting surface voids, corrosion, and environmental wear.",
    },
    {
      id: "sustainability",
      title: "Sustainability",
      content:
        "Precast concrete is produced using eco-friendly methods and precise material usage to minimize waste.",
    },
  ];

  // 2) State for active tab underline and modal content
  const [activeId, setActiveId] = useState(precastItems[0].id);
  const [modalItem, setModalItem] = useState(null);

  // 3) Handlers
  const handleTabHover = (id) => setActiveId(id);
  const openModal = (item) => setModalItem(item);
  const closeModal = () => setModalItem(null);

  // Vision & Mission texts
  const visionText =
    "Our vision is to be a leading force in innovative design and construction, shaping spaces that foster creativity, sustainability, and functionality. We aim to revolutionize the industry with cutting-edge technologies and designs that prioritize environmental responsibility and meet the needs of tomorrow.";
  const missionText =
    "Our mission is to deliver high-quality, cost-effective, and sustainable construction projects that exceed client expectations. We are committed to providing exceptional service through skilled craftsmanship, collaborative efforts, and a focus on safety, innovation, and integrity in every aspect of our work.";

  return (
    <section id="about">
      <div className="container about-container">

        {/* Precast Header Card */}
        <div className="precast-header-card">
          <h2 className="custom-title">
            <span className="archi">PRECAST</span>
            <span className="cast">CONCRETE</span>
          </h2>
          <div className="header-line" />
          <p>
            A construction product produced by pouring concrete in a reusable mold which is then cured in a controlled environment, transported to the construction site and lifted into place.
          </p>
        </div>

        {/* "Why Precast?" Tab Navigation */}
        <h2 className="custom-title why-title">
          <span className="archi">WHY</span>
          <span className="cast">PRECAST?</span>
        </h2>
        <div className="header-line" />
        <ul className="precast-nav">
          {precastItems.map((item) => (
            <li
              key={item.id}
              className={`nav-item ${activeId === item.id ? "active" : ""}`}
              onMouseEnter={() => handleTabHover(item.id)}
              onClick={() => openModal(item)}
            >
              {item.title}
            </li>
          ))}
        </ul>

        {/* Modal for item description */}
        {modalItem && (
          <div className="modal-overlay" onClick={closeModal}>
            <div className="modal" onClick={(e) => e.stopPropagation()}>
              <h3>{modalItem.title}</h3>
              <p>{modalItem.content}</p>
              <button className="modal-close" onClick={closeModal}>
                Close
              </button>
            </div>
          </div>
        )}

        {/* Vision & Mission Sections */}
        <div className="vm-row">
          <div className="vision-container">
            <h2 className="custom-title">
              <span className="archi">VIS</span>
              <span className="cast">ION</span>
            </h2>
            <div className="header-line" />
            <p>{visionText}</p>
          </div>
          <div className="mission-container">
            <h2 className="custom-title">
              <span className="archi">MIS</span>
              <span className="cast">SION</span>
            </h2>
            <div className="header-line" />
            <p>{missionText}</p>
          </div>
        </div>
      </div>
    </section>
  );
};
