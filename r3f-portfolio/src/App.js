import React, { useEffect, useState } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Hero from './sections/Hero';
import About from './sections/About';
import Projects from './sections/Projects';
import Work from './sections/Work';
import Contact from './sections/Contact';
import { createTheme } from '@mui/material';
import './App.css'

export default function App() {
  const [darkTheme, setDarkTheme] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  const theme = createTheme({
    palette: {
      mode: darkTheme ? 'dark' : 'light',
    },
  });

  // Scroll to top function
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  // Show "Back to Top" button only when scrolled down
  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  return (
    <div {...{ setDarkTheme }}>
      <Navbar />
      <Hero id='hero' />
      <About id='about' />
      <Projects id='projects' />
      <Work id='work-experience' theme={theme} />
      <Contact id='contact' />
      <Footer />

      {/* Back to Top Button */}
      {isVisible && (
        <button
          onClick={scrollToTop}
          className='fixed bottom-4 right-4 p-3 bg-yellow-400 text-gray-800 rounded-full shadow-lg hover:bg-yellow-300 transition-colors duration-300'
        >
          ↑ Top
        </button>
      )}
    </div>
  );
}
