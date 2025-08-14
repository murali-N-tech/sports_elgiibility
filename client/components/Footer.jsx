import React from "react";
import './styles.css';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-grid">
        <div>
          <h2>Eligibility Screener</h2>
          <p>
            AI-powered screening to check eligibility with detailed factor analysis and interactive charts.
          </p>
        </div>
        <div>
          <h3>Quick Links</h3>
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/about">About</a></li>
            <li><a href="/contact">Contact</a></li>
          </ul>
        </div>
        <div>
          <h3>Contact</h3>
          <ul>
            <li>Email: support@eligibilityapp.com</li>
            <li>Phone: +91 98765 43210</li>
          </ul>
        </div>
      </div>
      <div className="footer-bottom">
        © {new Date().getFullYear()} Eligibility Screener. All rights reserved.
      </div>
    </footer>
  );
}
