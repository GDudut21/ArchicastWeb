// src/components/About.jsx
import React, { useRef, useEffect, useState } from "react";
import "./about.css";

export const About = () => {
  const visionText =
    "Our vision is to be a leading force in innovative design and construction, shaping spaces that foster creativity, sustainability, and functionality. We aim to revolutionize the industry with cutting-edge technologies and designs that prioritize environmental responsibility and meet the needs of tomorrow.";
  const missionText =
    "Our mission is to deliver high-quality, cost-effective, and sustainable construction projects that exceed client expectations. We are committed to providing exceptional service through skilled craftsmanship, collaborative efforts, and a focus on safety, innovation, and integrity in every aspect of our work.";

  // 1) rename `key` → `id`
  const precastItems = [
    {
      id: "quality",
      title: "QUALITY",
      content:
        "Precast concrete are manufactured in controlled environment, allowing for precise measurements and consistent quality that have been extensively tested and proven to meet or exceed the standard for strength and performance.",
    },
    {
      id: "speed",
      title: "SPEED OF CONSTRUCTION",
      content:
        "Precast concrete elements can be installed quickly, reducing the time required for on-site assembly and minimizing disruption to the surrounding area.",
    },
    {
      id: "cost",
      title: "COST EFFECTIVE",
      content:
        "The simplified construction process reduces time, increases productivity and safety thus the cost is reduced.",
    },
    {
      id: "durability",
      title: "DURABILITY",
      content:
        "Precast concrete has a longer service time period and minimal maintenance that reduces surface voids, corrosion, accumulation of dust and other external forces.",
    },
    {
      id: "sustainability",
      title: "SUSTAINABILITY",
      content:
        "Precast concrete is manufactured using environmentally friendly procedures and because of its precision material waste is minimized.",
    },
  ];

  // 2) triple for infinite scroll
  const infiniteItems = [...precastItems, ...precastItems, ...precastItems];

  // 3) track flips by unique cardId
  const [flipped, setFlipped] = useState({});
  const toggleFlip = (cardId) =>
    setFlipped((prev) => ({ ...prev, [cardId]: !prev[cardId] }));

  const listRef = useRef(null);
  const scrollSpeed = 1;

  useEffect(() => {
    const list = listRef.current;
    if (!list) return;

    const cardWidth = list.children[0].getBoundingClientRect().width;
    const blockWidth = cardWidth * precastItems.length;
    list.scrollLeft = blockWidth; // center on the “real” cards

    let isDown = false,
      startX,
      scrollLeft;

    const onMouseDown = (e) => {
      isDown = true;
      list.classList.add("dragging");
      startX = e.pageX - list.offsetLeft;
      scrollLeft = list.scrollLeft;
    };
    const onMouseUp = () => {
      isDown = false;
      list.classList.remove("dragging");
      // wrap-around if scrolled into clones
      if (list.scrollLeft < blockWidth * 0.5) {
        list.scrollLeft += blockWidth;
      } else if (list.scrollLeft > blockWidth * 2.5) {
        list.scrollLeft -= blockWidth;
      }
    };
    const onMouseLeave = onMouseUp;
    const onMouseMove = (e) => {
      if (!isDown) return;
      e.preventDefault();
      const x = e.pageX - list.offsetLeft;
      const walk = (x - startX) * scrollSpeed;
      list.scrollLeft = scrollLeft - walk;
    };

    list.addEventListener("mousedown", onMouseDown);
    list.addEventListener("mouseup", onMouseUp);
    list.addEventListener("mouseleave", onMouseLeave);
    list.addEventListener("mousemove", onMouseMove);

    return () => {
      list.removeEventListener("mousedown", onMouseDown);
      list.removeEventListener("mouseup", onMouseUp);
      list.removeEventListener("mouseleave", onMouseLeave);
      list.removeEventListener("mousemove", onMouseMove);
    };
  }, [precastItems.length, scrollSpeed]);

  return (
    <section id="about">
      <div className="container about-container">

        {/* 1. Precast Header Card */}
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

        {/* 2. Why Precast? Flip‐boxes */}
        <h2 className="custom-title why-title">
          <span className="archi">WHY</span>
          <span className="cast">PRECAST?</span>
        </h2>
        <div className="header-line" />
        <div className="precast-list" ref={listRef}>
          {infiniteItems.map((item, idx) => {
            const cardId = `${item.id}-${idx}`;
            return (
              <div
                key={cardId}
                className="precast-item flip-box"
                onClick={() => toggleFlip(cardId)}
              >
                <div
                  className={`flip-box-inner ${
                    flipped[cardId] ? "flipped" : ""
                  }`}
                >
                  <div className="flip-box-front">
                    <h3>{item.title}</h3>
                  </div>
                  <div className="flip-box-back">
                    <p>{item.content}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* 3. Vision & Mission at the bottom */}
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
