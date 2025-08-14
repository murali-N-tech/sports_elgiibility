import React from 'react';
import Header from '../components/Header';
import Hero from '../components/Hero';
import UploadSection from '../components/UploadSection';
import Features from '../components/Features';
import Footer from '../components/Footer';

const HomePage = () => {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <UploadSection />
        <Features />
      </main>
      <Footer />
    </>
  );
};

export default HomePage;