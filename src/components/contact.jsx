import React from "react";
import "./contact.css";

export const Contact = () => {
  const currentYear = new Date().getFullYear();

  return (
    <>
      {/* Background Image */}
      <div className="footer-bg-container"></div>

      {/* Footer Content */}
      <footer className="footer">
        {/* Subsidiaries */}
        <div className="footer-subsidiaries">
          <h3>Our Subsidiaries</h3>
          <div className="subsidiary-logos">
            <img src="/images/archiwalllogo.png" alt="Subsidiary 1" />
            <img src="/images/subsidiary2.png" alt="Subsidiary 2" />
            <img src="/images/subsidiary3.png" alt="Subsidiary 3" />
            <img src="/images/subsidiary4.png" alt="Subsidiary 4" />
          </div>
        </div>

        {/* Copyright */}
        <div className="footer-bottom">
          <p>© {currentYear} Archiwall. All Rights Reserved.</p>
        </div>
      </footer>
    </>
  );
};
