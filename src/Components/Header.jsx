import React from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { ArrowUpRight, Moon, Sun } from 'lucide-react';
import RollText from './RollText';

const Header = ({ isDarkMode, onToggleTheme }) => {

  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const [isHidden, setIsHidden] = React.useState(false);
  const [isScrolled, setIsScrolled] = React.useState(false);
  const { pathname } = useLocation();

  const navItems = [
    { path: '/', label: 'Home' },
    { path: '/projects', label: 'Projects' },
    { path: '/experience', label: 'Experience' },
    { path: '/education', label: 'Education' },
    { path: '/hobbies', label: 'Hobbies' },
    { path: '/contact', label: 'Contact' },
  ];

  React.useEffect(() => setIsMenuOpen(false), [pathname]);

  React.useEffect(() => {
    document.body.style.overflow = isMenuOpen ? 'hidden' : '';
  }, [isMenuOpen]);

  // Slide the bar away while scrolling down, bring it back on any scroll up.
  React.useEffect(() => {
    let lastY = window.scrollY;
    const onScroll = () => {
      const y = window.scrollY;
      setIsScrolled(y > 20);
      setIsHidden(y > lastY && y > 240);
      lastY = y;
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const barTone = isMenuOpen
    ? 'text-paper'
    : isScrolled
      ? 'border-b border-line/10 bg-paper/80 backdrop-blur-xl'
      : '';

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-transform duration-500 ${
        isHidden && !isMenuOpen ? '-translate-y-full' : ''
      }`}
    >
      <div
        className={`menu-overlay fixed inset-0 bg-ink text-paper xl:hidden ${isMenuOpen ? 'menu-open' : ''}`}
        inert={!isMenuOpen}
      >
        <nav className="shell flex h-full flex-col justify-center gap-2 pt-20">
          {navItems.map((item, index) => (
            <div key={item.path} className="overflow-hidden">
              <NavLink
                to={item.path}
                end
                className={({ isActive }) =>
                  `menu-link flex items-baseline gap-4 font-display text-5xl font-extrabold uppercase tracking-tight sm:text-6xl ${
                    isActive ? 'text-accent' : ''
                  }`
                }
                style={{ transitionDelay: isMenuOpen ? `${150 + index * 60}ms` : '0ms' }}
              >
                <span className="text-sm font-semibold text-paper/50">0{index + 1}</span>
                {item.label}
              </NavLink>
            </div>
          ))}
        </nav>
      </div>

      <div className={`relative transition-colors duration-500 ${barTone}`}>
        <div className="shell flex h-20 items-center justify-between">
          <Link to="/" className="group flex items-center gap-3">
            <span className="flex h-11 w-11 items-center justify-center rounded-full bg-accent font-display text-lg font-extrabold text-on-accent transition-transform duration-500 group-hover:rotate-[360deg]">
              MT
            </span>
            <span className="whitespace-nowrap font-display text-lg font-bold uppercase leading-tight tracking-tight">
              <RollText>Muhammad Tayyab</RollText>
            </span>
          </Link>

          <nav className="hidden items-center gap-7 xl:flex">
            {navItems.map((item) => (
              <NavLink
                key={item.path}
                to={item.path}
                end
                className={({ isActive }) =>
                  `group flex items-center gap-2 text-sm font-semibold uppercase tracking-wider transition-colors ${
                    isActive ? 'text-ink' : 'text-muted hover:text-ink'
                  }`
                }
              >
                {({ isActive }) => (
                  <>
                    <span className={`h-1.5 w-1.5 rounded-full bg-accent transition-transform duration-300 ${isActive ? 'scale-100' : 'scale-0'}`} />
                    <RollText>{item.label}</RollText>
                  </>
                )}
              </NavLink>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <button
              type="button"
              onClick={onToggleTheme}
              className="flex h-11 w-11 items-center justify-center rounded-full ring-1 ring-inset ring-line/20 transition-transform duration-500 hover:rotate-45"
              aria-label="Toggle theme"
            >
              {isDarkMode ? <Sun size={18} /> : <Moon size={18} />}
            </button>
            <Link
              to="/contact"
              className="group hidden items-center gap-2 rounded-full bg-ink px-5 py-3 text-sm font-semibold uppercase tracking-wider text-paper transition-colors hover:bg-accent hover:text-on-accent xl:inline-flex"
            >
              <RollText>Let's talk</RollText>
              <ArrowUpRight size={16} className="transition-transform duration-500 group-hover:rotate-45" />
            </Link>
            <button
              type="button"
              onClick={() => setIsMenuOpen((open) => !open)}
              className="flex h-11 w-11 flex-col items-center justify-center gap-1.5 rounded-full bg-accent text-on-accent xl:hidden"
              aria-label="Toggle navigation"
              aria-expanded={isMenuOpen}
            >
              <span className={`h-0.5 w-5 bg-current transition-transform duration-300 ${isMenuOpen ? 'translate-y-1 rotate-45' : ''}`} />
              <span className={`h-0.5 w-5 bg-current transition-transform duration-300 ${isMenuOpen ? '-translate-y-1 -rotate-45' : ''}`} />
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
