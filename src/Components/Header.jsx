import React from 'react';
import { NavLink } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const Header = () => {

  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const navItems = [
    { path: '/', label: 'Home' },
    { path: '/projects', label: 'Projects' },
    { path: '/education', label: 'Education' },
    { path: '/hobbies', label: 'Hobbies' },
    { path: '/contact', label: 'Contact Me' },
  ];

  return (
    <header className="fixed p-[30px] top-0 left-0 right-0 bg-[rgb(61_79_131_/_95%)] backdrop-blur-md shadow-md border-b border-gray-800 z-50">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <NavLink to="/" className="flex items-center gap-3 text-xl font-bold text-white">
            <img
              src="/tayyab.jpeg" 
              alt="Muhammad Tayyab"
              className="w-20 h-20 rounded-full border-2 border-blue-400 object-cover"
            />
            <span>Muhammad Tayyab</span>
          </NavLink>

          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <NavLink
                key={item.path}
                to={item.path}
                className={({ isActive }) =>
                  `text-m font-medium transition-colors ${
                    isActive ? 'text-black' : 'text-white hover:text-gray-400'
                  }`
                }
              >
                {item.label}
              </NavLink>
            ))}
          </div>
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-300 hover:text-white"
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
                        ? 'text-blue-400 bg-gray-800'
                        : 'text-gray-300 hover:text-white hover:bg-gray-700'
                    }`
                  }
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.label}
                </NavLink>
              ))}
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;
