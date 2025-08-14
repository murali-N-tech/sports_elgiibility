import React from 'react';
import { FiShield, FiZap, FiAward } from 'react-icons/fi'; // Import icons

const Hero = () => {
  return (
    <section className="bg-gray-50 text-center py-20">
      <div className="container mx-auto px-6">
        <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900">
          Sports Eligibility Assessment Platform
        </h1>
        <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
          Advanced AI-powered analysis of medical reports to determine sports
          participation eligibility. Upload your medical documents and get instant,
          comprehensive health assessments.
        </p>
        <div className="mt-8 flex justify-center items-center gap-x-8 text-gray-600">
          <div className="flex items-center gap-2">
            <FiShield className="text-blue-600" />
            <span>HIPAA Compliant</span>
          </div>
          <div className="flex items-center gap-2">
            <FiZap className="text-blue-600" />
            <span>Instant Analysis</span>
          </div>
          <div className="flex items-center gap-2">
            <FiAward className="text-blue-600" />
            <span>Medical Grade</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;