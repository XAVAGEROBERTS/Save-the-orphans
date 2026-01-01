import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import OurWork from './pages/OurWork';
import Donate from './pages/Donate';
import Contact from './pages/Contact';

function App() {
  const styles = {
    app: {
      minHeight: '100vh',
      display: 'flex',
      flexDirection: 'column'
    },
    main: {
      flex: 1
    }
  };

  return (
    <Router>
      <div style={styles.app}>
        <Header />
        <main style={styles.main}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/our-work" element={<OurWork />} />
            <Route path="/donate" element={<Donate />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;