import React from 'react';
import './styles.css';

const Header = () => {
  return (
    <header className="header">
      <nav className="nav">
        <div className="logo">SportsMed Eligibility</div>
        <button className="btn-primary">New Assessment</button>
      </nav>
    </header>
  );
};

export default Header;
