import React, { useState } from 'react';
import { FiUploadCloud } from 'react-icons/fi';
import { uploadAndAnalyzeDocument } from '../api/analysisService';
import Spinner from './Spinner';
import AnalysisChart from './AnalysisChart';

const UploadSection = () => {
  const [file, setFile] = useState(null);
  const [result, setResult] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
    if (selectedFile) {
      setFile(selectedFile);
      setError('');
      setResult(null);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!file) {
      setError('Please select a PDF or image file to analyze.');
      return;
    }
    setIsLoading(true);
    setError('');
    setResult(null);
    try {
      const data = await uploadAndAnalyzeDocument(file);
      setResult(data);
    } catch (err) {
      setError(err.message);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section className="bg-gray-50 py-20">
      <div className="container mx-auto px-6 max-w-3xl">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-gray-800">Upload Medical Reports</h2>
          <p className="text-gray-600 mt-2">Upload your medical reports, lab results, or physician notes for comprehensive analysis.</p>
        </div>
        <div className="bg-white p-8 rounded-xl shadow-lg">
          <form onSubmit={handleSubmit}>
            <div className="border-2 border-dashed border-gray-300 rounded-lg p-10 text-center cursor-pointer hover:border-blue-500 transition-colors">
              <FiUploadCloud className="mx-auto h-12 w-12 text-gray-400" />
              <label htmlFor="file-upload" className="mt-4 text-sm font-semibold text-blue-600">
                Choose Files
                <input id="file-upload" name="file-upload" type="file" className="sr-only" onChange={handleFileChange} accept="image/*,.pdf"/>
              </label>
              <p className="mt-1 text-xs text-gray-500">{file ? file.name : 'Drag & drop or click to browse'}</p>
            </div>
            <button
              type="submit"
              disabled={isLoading || !file}
              className="mt-6 w-full bg-blue-600 text-white font-bold py-3 px-4 rounded-lg hover:bg-blue-700 disabled:bg-gray-400 transition-colors"
            >
              {isLoading ? 'Analyzing...' : 'Analyze Now'}
            </button>
          </form>
        </div>
        
        {isLoading && <div className="mt-6"><Spinner /></div>}
        {error && <p className="text-red-500 text-center font-semibold mt-6">{error}</p>}
        
        {result && (
          <div className="mt-8 p-6 bg-white rounded-lg shadow-lg">
            <h3 className="text-2xl font-bold mb-4">Analysis Result</h3>
            <div className={`p-4 rounded-md ${result.isEligible ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'}`}>
              <p className="font-bold text-xl">
                Status: {result.isEligible ? `Eligible (Score: ${result.eligibilityPercentage}%)` : 'Not Eligible'}
              </p>
              <p className="mt-1">{result.summary}</p>
            </div>
            <AnalysisChart data={result.chartData} />
          </div>
        )}
      </div>
    </section>
  );
};

export default UploadSection;