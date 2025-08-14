import React, { useState } from 'react';
import { FiUploadCloud } from 'react-icons/fi';
import { uploadAndAnalyzeDocument } from '../api/analysisService';
import Spinner from './Spinner';
import AnalysisChart from './AnalysisChart';
import './styles.css';

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
    <section className="upload-section">
      <div className="upload-container">
        <div className="upload-header">
          <h2>Upload Medical Reports</h2>
          <p>Upload your medical reports, lab results, or physician notes for comprehensive analysis.</p>
        </div>
        <div className="upload-box">
          <form onSubmit={handleSubmit}>
            <div className="file-drop">
              <FiUploadCloud size={40} />
              <label htmlFor="file-upload">
                Choose Files
                <input id="file-upload" name="file-upload" type="file" onChange={handleFileChange} accept="image/*,.pdf" hidden />
              </label>
              <p>{file ? file.name : 'Drag & drop or click to browse'}</p>
            </div>
            <button type="submit" disabled={isLoading || !file} className="btn-primary full-width">
              {isLoading ? 'Analyzing...' : 'Analyze Now'}
            </button>
          </form>
        </div>
        
        {isLoading && <div className="mt"><Spinner /></div>}
        {error && <p className="error">{error}</p>}
        
        {result && (
          <div className="result-card">
            <h3>Analysis Result</h3>
            <div className={`status ${result.isEligible ? 'eligible' : 'not-eligible'}`}>
              <p>Status: {result.isEligible ? `Eligible (Score: ${result.eligibilityPercentage}%)` : 'Not Eligible'}</p>
              <p>{result.summary}</p>
            </div>
            <AnalysisChart data={result.chartData} />
          </div>
        )}
      </div>
    </section>
  );
};

export default UploadSection;
