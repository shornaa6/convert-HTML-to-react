import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Service';
import Footer from './components/Footer';
import Testimonial from './components/Testimonial';
import Pricing from './components/Pricing';
import Faq from './components/Faq';
import Trial from './components/Trial';


function App() {
  return (
    <>
      <Header />
      <Hero />
      <Services />
      <Testimonial />
      <Pricing />
      <Faq />
      <Trial />
      <Footer />
    </>
  );
}

export default App;
