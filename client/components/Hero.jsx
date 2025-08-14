import React from 'react';
import { FiShield, FiZap, FiAward } from 'react-icons/fi';
import './styles.css';

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-container">
        <h1>Sports Eligibility Assessment Platform</h1>
        <p>
          Advanced AI-powered analysis of medical reports to determine sports participation eligibility.
          Upload your medical documents and get instant, comprehensive health assessments.
        </p>
        <div className="hero-features">
          <div><FiShield /> HIPAA Compliant</div>
          <div><FiZap /> Instant Analysis</div>
          <div><FiAward /> Medical Grade</div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
