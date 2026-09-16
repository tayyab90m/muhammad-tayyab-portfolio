import React from 'react';
import { NavLink } from 'react-router-dom';
import { Code2, Download, FileText, Menu, Moon, Sun, X } from 'lucide-react';
import { downloadResumePdf, viewResumePdf } from '../utils/generateResumePdf';

const Header = ({ isDarkMode, onToggleTheme }) => {

  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const navItems = [
    { path: '/', label: 'Home' },
    { path: '/projects', label: 'Projects' },
    { path: '/experience', label: 'Experience' },
    { path: '/education', label: 'Education' },
    { path: '/hobbies', label: 'Hobbies' },
    { path: '/contact', label: 'Contact' },
  ];

  return (
    <header className="fixed left-0 right-0 top-0 z-50 border-b border-[#dbd9d9]/80 bg-white/85 shadow-sm backdrop-blur-xl dark:border-white/10 dark:bg-gray-950/80">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <NavLink to="/" className="flex items-center gap-3 text-xl font-bold text-slate-950 dark:text-white">
            <span className="glow-border flex h-11 w-11 items-center justify-center rounded-2xl bg-slate-900 text-white shadow-lg shadow-slate-900/20 dark:bg-white/10">
              <Code2 size={24} />
            </span>
            <span className="leading-tight">
              Muhammad Tayyab
              <span className="block text-xs font-medium text-slate-500 dark:text-gray-400">Software Engineer</span>
            </span>
          </NavLink>

          <div className="hidden md:flex items-center space-x-3">
            {navItems.map((item) => (
              <NavLink
                key={item.path}
                to={item.path}
                className={({ isActive }) =>
                  `rounded-full px-4 py-2 text-sm font-semibold transition-all ${
                    isActive
                      ? 'bg-slate-900 text-white shadow-lg shadow-slate-900/25 dark:bg-white dark:text-slate-900'
                      : 'text-slate-600 hover:bg-slate-100 hover:text-slate-950 dark:text-gray-300 dark:hover:bg-white/10 dark:hover:text-white'
                  }`
                }
              >
                {item.label}
              </NavLink>
            ))}
            <button
              type="button"
              onClick={viewResumePdf}
              className="glow-btn ml-2 inline-flex items-center gap-2 rounded-full bg-slate-900 px-4 py-2 text-sm font-semibold text-white shadow-lg shadow-slate-900/25 transition-transform hover:-translate-y-0.5 dark:bg-white dark:text-slate-900 dark:shadow-white/10"
            >
              <FileText size={16} />
              Resume
            </button>
            <button
              type="button"
              onClick={downloadResumePdf}
              aria-label="Download resume as PDF"
              title="Download resume as PDF"
              className="flex h-9 w-9 items-center justify-center rounded-full border border-[#dbd9d9] bg-white text-slate-700 shadow-sm transition-colors hover:bg-slate-100 dark:border-white/10 dark:bg-white/10 dark:text-white dark:hover:bg-white/20"
            >
              <Download size={16} />
            </button>
            <button
              onClick={onToggleTheme}
              className="ml-2 flex h-11 w-11 items-center justify-center rounded-full border border-[#dbd9d9] bg-white text-slate-700 shadow-sm transition-colors hover:bg-slate-100 dark:border-white/10 dark:bg-white/10 dark:text-white dark:hover:bg-white/20"
              aria-label="Toggle theme"
            >
              {isDarkMode ? <Sun size={20} /> : <Moon size={20} />}
            </button>
          </div>
          <div className="flex items-center gap-3 md:hidden">
            <button
              onClick={onToggleTheme}
              className="glow-btn flex h-10 w-10 items-center justify-center rounded-full border border-[#dbd9d9] bg-white text-slate-700 shadow-sm dark:border-white/10 dark:bg-white/10 dark:text-white"
              aria-label="Toggle theme"
            >
              {isDarkMode ? <Sun size={20} /> : <Moon size={20} />}
            </button>
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-slate-700 hover:text-slate-950 dark:text-gray-300 dark:hover:text-white"
              aria-label="Toggle navigation"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navItems.map((item) => (
                <NavLink
                  key={item.path}
                  to={item.path}
                  className={({ isActive }) =>
                    `block px-3 py-2 rounded-md text-base font-medium ${
                      isActive
                        ? 'bg-slate-900 text-white dark:bg-white dark:text-slate-900'
                        : 'text-slate-600 hover:bg-slate-100 hover:text-slate-950 dark:text-gray-300 dark:hover:bg-white/10 dark:hover:text-white'
                    }`
                  }
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.label}
                </NavLink>
              ))}
              <button
                type="button"
                onClick={() => {
                  viewResumePdf();
                  setIsMenuOpen(false);
                }}
                className="mt-1 flex w-full items-center gap-2 rounded-md bg-slate-900 px-3 py-2 text-base font-medium text-white dark:bg-white dark:text-slate-900"
              >
                <FileText size={18} />
                View Resume
              </button>
              <button
                type="button"
                onClick={() => {
                  downloadResumePdf();
                  setIsMenuOpen(false);
                }}
                className="flex w-full items-center gap-2 rounded-md border border-[#dbd9d9] px-3 py-2 text-base font-medium text-slate-700 dark:border-white/10 dark:text-white"
              >
                <Download size={18} />
                Download Resume
              </button>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;
