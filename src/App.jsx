import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Projects from './pages/Projects';
import Education from './pages/Education';
import Header from './Components/Header';
import Footer from './Components/Footer';
import Contact from './pages/Contact';
import Hobbies from './pages/Hobbies';
import Home from './pages/Home';
import Experience from './pages/Experience';
import FloatingWhatsApp from './Components/FloatingWhatsApp';

const App = () => {
  const [isDarkMode, setIsDarkMode] = React.useState(true);

  return (
    <BrowserRouter>
      <div className={isDarkMode ? 'dark' : ''}>
        <div className="app-shell min-h-screen text-slate-900 transition-colors duration-300 dark:text-white">
          <Header isDarkMode={isDarkMode} onToggleTheme={() => setIsDarkMode((theme) => !theme)} />
          <main>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/projects" element={<Projects />} />
              <Route path="/experience" element={<Experience />} />
              <Route path="/education" element={<Education />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/hobbies" element={<Hobbies />} />
            </Routes>
          </main>
          <FloatingWhatsApp />
          <Footer />
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
