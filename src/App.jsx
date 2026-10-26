import React from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import Projects from './pages/Projects';
import Education from './pages/Education';
import Header from './Components/Header';
import Footer from './Components/Footer';
import Contact from './pages/Contact';
import Hobbies from './pages/Hobbies';
import Home from './pages/Home';
import Experience from './pages/Experience';
import FloatingWhatsApp from './Components/FloatingWhatsApp';
import ScrollProgress from './Components/ScrollProgress';
import Background from './Components/Background';

// Keyed by route so every navigation starts at the top and replays the enter animation.
const AnimatedRoutes = () => {
  const location = useLocation();

  React.useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, [location.pathname]);

  return (
    <main key={location.pathname} className="page-enter">
      <Routes location={location}>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/experience" element={<Experience />} />
        <Route path="/education" element={<Education />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/hobbies" element={<Hobbies />} />
      </Routes>
    </main>
  );
};

const App = () => {
  const [isDarkMode, setIsDarkMode] = React.useState(true);

  React.useEffect(() => {
    document.documentElement.classList.toggle('dark', isDarkMode);
  }, [isDarkMode]);

  return (
    <BrowserRouter>
      <Background />
      <ScrollProgress />
      <Header isDarkMode={isDarkMode} onToggleTheme={() => setIsDarkMode((theme) => !theme)} />
      <AnimatedRoutes />
      <FloatingWhatsApp />
      <Footer />
    </BrowserRouter>
  );
}

export default App;
