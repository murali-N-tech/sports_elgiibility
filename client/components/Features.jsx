import React from 'react';
import { FaChartLine, FaUserCheck, FaFileAlt } from 'react-icons/fa';

const FeatureCard = ({ icon, title, children }) => (
  <div className="bg-white p-6 rounded-xl shadow-lg text-center">
    <div className="text-blue-600 mx-auto w-12 h-12 flex items-center justify-center rounded-full bg-blue-50 mb-4">
      {icon}
    </div>
    <h3 className="text-xl font-bold text-gray-800 mb-2">{title}</h3>
    <p className="text-gray-600">{children}</p>
  </div>
);

const Features = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-800">Why Choose SportsMed Eligibility?</h2>
          <p className="text-gray-600 mt-2">Our platform combines medical expertise with AI technology to provide accurate, fast, and reliable sports eligibility assessments.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
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
      </div>
    </section>
  );
};

export default Features;