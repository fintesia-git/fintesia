import React from 'react';
import Hero from './components/Hero';
import Projects from './components/Projects';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';
import './App.css'; // Import global styles

function App() {
  return (
    <div className="app-container">
      <Hero />
      <Projects />
      <ContactForm />
      <Footer />
    </div>
  );
}

export default App;