import React from 'react';
import { Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, ResponsiveContainer, Legend, Tooltip } from 'recharts';

const AnalysisChart = ({ data }) => {
  if (!data || data.length === 0) {
    return <p>No chart data available.</p>;
  }

  return (
    <div className="w-full h-80 bg-white p-4 rounded-lg shadow-md mt-6">
      <ResponsiveContainer>
        <RadarChart cx="50%" cy="50%" outerRadius="80%" data={data}>
          <PolarGrid />
          <PolarAngleAxis dataKey="name" />
          <PolarRadiusAxis angle={30} domain={[0, 100]} />
          <Radar name="Metrics" dataKey="value" stroke="#4f46e5" fill="#6366f1" fillOpacity={0.6} />
          <Legend />
          <Tooltip />
        </RadarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default AnalysisChart;