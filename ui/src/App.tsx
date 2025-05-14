'use client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './pages/Navbar';
import Hero from './pages/Hero';
import Projects from './pages/Projects';
import Resume from './pages/Resume';
import Education from './pages/Education';
import Contact from './pages/Contact';
import Footer from './pages/Footer';

export default function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path='/' element={<Hero />} />
        <Route path='/projects' element={<Projects />} />
        <Route path='/resume' element={<Resume />} />
        <Route path='/education' element={<Education />} />
        <Route path='/contact' element={<Contact />} />
      </Routes>
      <Footer />
    </Router>
  );
}
