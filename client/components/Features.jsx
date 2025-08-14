import React from 'react';
import { FaChartLine, FaUserCheck, FaFileAlt } from 'react-icons/fa';
import './styles.css';

const FeatureCard = ({ icon, title, children }) => (
  <div className="feature-card">
    <div className="feature-icon">{icon}</div>
    <h3 className="feature-title">{title}</h3>
    <p className="feature-text">{children}</p>
  </div>
);

const Features = () => {
  return (
    <section className="features-section">
      <div className="features-header">
        <h2>Why Choose SportsMed Eligibility?</h2>
        <p>
          Our platform combines medical expertise with AI technology to provide accurate, fast, and reliable sports eligibility assessments.
        </p>
      </div>
      <div className="features-grid">
        <FeatureCard icon={<FaChartLine size={24} />} title="Comprehensive Analysis">
          AI-powered assessment of cardiovascular, musculoskeletal, and respiratory health metrics.
        </FeatureCard>
        <FeatureCard icon={<FaUserCheck size={24} />} title="Expert Validated">
          Assessment criteria developed and validated by sports medicine professionals.
        </FeatureCard>
        <FeatureCard icon={<FaFileAlt size={24} />} title="Detailed Insights">
          Receive detailed recommendations and risk assessments for safe sports participation.
        </FeatureCard>
      </div>
    </section>
  );
};

export default Features;
