// src/components/About.jsx
import React, { useState } from "react";
import "./about.css";

export const About = () => {
  // Tab data (no modal)
  const precastItems = [
    { id: "quality",      title: "Quality" },
    { id: "speed",        title: "Speed" },
    { id: "cost",         title: "Cost" },
    { id: "durability",   title: "Durability" },
    { id: "sustainability", title: "Sustainability" },
  ];
  const [activeId, setActiveId] = useState(precastItems[0].id);
  const handleTabHover = (id) => setActiveId(id);

  // Vision & Mission copy
  const visionText =
    "Our vision is to be a leading force in innovative design and construction, shaping spaces that foster creativity, sustainability, and functionality. We aim to revolutionize the industry with cutting-edge technologies and designs that prioritize environmental responsibility and meet the needs of tomorrow.";
  const missionText =
    "Our mission is to deliver high-quality, cost-effective, and sustainable construction projects that exceed client expectations. We are committed to providing exceptional service through skilled craftsmanship, collaborative efforts, and a focus on safety, innovation, and integrity in every aspect of our work.";

  return (
    <section id="about">
      {/* ─── PRECAST CARD ────────────────────────────────────────────── */}
      <div className="precast-card">
        <h2 className="card-title">
          <span className="archi">PRECAST</span>
          <span className="cast">CONCRETE</span>
        </h2>

        <img
          src="/img/precast-house.svg"
          alt=""
          className="card-bg-logo"
          aria-hidden="true"
        />

        <p>
          A construction product produced by pouring concrete in a reusable
          mold which is then cured in a controlled environment, transported to
          the construction site and lifted into place.
        </p>
      </div>

      {/* ─── WHY PRECAST? TABS ───────────────────────────────────────── */}
      <div className="container">
        <h2 className="custom-title why-title">
          <span className="archi">WHY</span>
          <span className="cast">PRECAST?</span>
        </h2>
        <div className="header-line" />
        <ul className="precast-nav">
          {precastItems.map((item) => (
            <li
              key={item.id}
              className={`nav-item ${
                activeId === item.id ? "active" : ""
              }`}
              onMouseEnter={() => handleTabHover(item.id)}
            >
              {item.title}
            </li>
          ))}
        </ul>
      </div>

      {/* ─── VISION & MISSION ─────────────────────────────────────── */}
      <div className="vm-row">
        <div className="vision-container">
          <h2 className="vm-title">VISION</h2>
          <img
            src="/img/vision-icon.svg"
            alt=""
            className="vm-bg-logo"
            aria-hidden="true"
          />
          <p>{visionText}</p>
        </div>
        <div className="mission-container">
          <h2 className="vm-title">MISSION</h2>
          <img
            src="/img/mission-icon.svg"
            alt=""
            className="vm-bg-logo"
            aria-hidden="true"
          />
          <p>{missionText}</p>
        </div>
      </div>
    </section>
  );
};
