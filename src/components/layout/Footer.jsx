import React from "react";
// import "./Footer.css"; // Import footer styles
 import "../../custom_css/Footer.css";
export const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <p className="footer-text">© 2025 My Website. All Rights Reserved.</p>
        <nav className="footer-links">
          <a href="/about">About</a>
          <a href="/privacy">Privacy Policy</a>
          <a href="/contact">Contact</a>
        </nav>
      </div>
    </footer>
  );
};


