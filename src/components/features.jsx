import React, { useEffect, useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faPhone, faMapMarkerAlt } from "@fortawesome/free-solid-svg-icons";
import "./features.css";

export const Features = () => {
  const contactRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          contactRef.current.classList.add("visible");
        }
      },
      { threshold: 0.2 }
    );

    if (contactRef.current) {
      observer.observe(contactRef.current);
    }

    return () => {
      if (contactRef.current) {
        observer.unobserve(contactRef.current);
      }
    };
  }, []);

  return (
    <section id="features" className="contact-info-section">
      <div className="section-title text-center">
        <h2>Contact Us</h2>
      </div>

      <div className="contact-flex animate-fade-up" ref={contactRef}>
        {/* LEFT: Contact Info */}
        <div className="contact-left">
          <div className="info-item">
            <div className="icon-circle">
              <FontAwesomeIcon icon={faEnvelope} className="fa-icon" />
            </div>
            <p><strong>archiwallcorp@gmail.com</strong></p>
          </div>

          <div className="info-item">
            <div className="icon-circle">
              <FontAwesomeIcon icon={faPhone} className="fa-icon" />
            </div>
            <p><strong>044 4920756</strong></p>
          </div>

          <div className="info-item">
            <div className="icon-circle">
              <FontAwesomeIcon icon={faMapMarkerAlt} className="fa-icon" />
            </div>
            <p>
              <strong>
                Kaybitin Road Corner C. Diaz St.,<br />
                San Gabriel, Santa Maria, Bulacan
              </strong>
            </p>
          </div>
        </div>

        {/* RIGHT: Google Map */}
        <div className="map-container">
          <iframe
            title="Archiwall Map"
            src="https://www.google.com/maps?q=ARCHICAST+CONCRETE+PRODUCTS+MANUFACTURING&output=embed"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </section>
  );
};
