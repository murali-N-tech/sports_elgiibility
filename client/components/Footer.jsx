// client/src/components/Footer.jsx
import React from "react";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 mt-10">
      <div className="max-w-7xl mx-auto px-6 py-8 grid grid-cols-1 md:grid-cols-3 gap-8">
        
        {/* Brand Info */}
        <div>
          <h2 className="text-lg font-semibold text-white">Eligibility Screener</h2>
          <p className="mt-3 text-sm text-gray-400">
            AI-powered screening to check eligibility with detailed factor analysis and interactive charts.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold text-white">Quick Links</h3>
          <ul className="mt-3 space-y-2 text-sm">
            <li><a href="/" className="hover:text-white">Home</a></li>
            <li><a href="/about" className="hover:text-white">About</a></li>
            <li><a href="/contact" className="hover:text-white">Contact</a></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="text-lg font-semibold text-white">Contact</h3>
          <ul className="mt-3 space-y-2 text-sm">
            <li>Email: support@eligibilityapp.com</li>
            <li>Phone: +91 98765 43210</li>
          </ul>
        </div>
      </div>

      <div className="border-t border-gray-700 mt-6 py-4 text-center text-sm text-gray-500">
        © {new Date().getFullYear()} Eligibility Screener. All rights reserved.
      </div>
    </footer>
  );
}
