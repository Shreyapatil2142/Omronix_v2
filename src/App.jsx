import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import Layout from './components/layout/Layout';
import Home from './pages/Home';
import AgenticAI from './pages/AgenticAI';
import Communication from './pages/Communication';
import Blockchain from './pages/Blockchain';
import Contact from './pages/Contact';
import About from './pages/About';

// Scroll to Hash Implementation
const ScrollToHash = () => {
  const { hash, pathname } = useLocation();

  useEffect(() => {
    if (hash) {
      // Small timeout to allow the page to render before scrolling
      const timer = setTimeout(() => {
        const id = hash.replace('#', '');
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }, 100);
      return () => clearTimeout(timer);
    } else {
      // Scroll to top on route change if no hash
      window.scrollTo(0, 0);
    }
  }, [hash, pathname]);

  return null;
};

function App() {
  return (
    <Router>
      <ScrollToHash />
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/blockchain" element={<Blockchain />} />
          <Route path="/ai" element={<AgenticAI />} />
          <Route path="/communication" element={<Communication />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
