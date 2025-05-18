'use client';

import { useState, useEffect } from 'react';
import { Menu, X, Moon, Sun, Code2, School2, Contact2, FileUserIcon } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [theme, setTheme] = useState('nord');

  const toggleTheme = () => {
    const newTheme = theme === 'nord' ? 'business' : 'nord';
    setTheme(newTheme);
    document.documentElement.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
  };

  useEffect(() => {
    // Check if user has a saved preference
    const savedTheme = localStorage.getItem('theme') as 'nord' | 'business' | null;

    if (savedTheme) {
      setTheme(savedTheme);
      document.documentElement.setAttribute('data-theme', savedTheme);
    } else if (window.matchMedia && window.matchMedia('(prefers-color-scheme: light)').matches) {
      // If no saved preference, use system preference
      setTheme('nord');
      document.documentElement.setAttribute('data-theme', 'nord');
    }

    // CLEAN UPßß
    return () => {
      setIsMenuOpen(false);
      setTheme('nord');
    };
  }, []);

  return (
    <div className='fixed top-0 left-0 right-0 z-50 px-4 transition-all'>
      <div className='max-w-5xl mx-auto mt-4 bg-base-100 rounded-full px-6 py-2 flex items-center justify-between shadow-2xl'>
        {/* Mobile Menu Button */}
        <div className='md:hidden'>
          <button className='btn btn-square btn-ghost' onClick={() => setIsMenuOpen(true)}>
            <Menu size={24} />
          </button>
        </div>

        <div>
          <Link to='/' className='md:inline-block text-2xl  font-semibold '>
            Portfolio
          </Link>
        </div>

        {/* Center Nav (Desktop) */}
        <div className='hidden md:flex flex-1 justify-center'>
          <ul className='menu menu-horizontal gap-4 font-medium '>
            <li>
              <Link to='/projects'>Projects</Link>
            </li>
            <li>
              <Link to='/resume'>Resume</Link>
            </li>
            <li>
              <Link
                to='/education'
                // className='hover: hover:bg-blue-100 hover:bg-opacity-60 hover:rounded-md transition-all'
              >
                Education
              </Link>
            </li>
            <li>
              <Link to='/contact'>Contact</Link>
            </li>
          </ul>
        </div>

        {/* Right Section: Theme + Title */}
        <div className='flex items-center gap-2'>
          <button onClick={toggleTheme} className='btn btn-circle btn-ghost'>
            {theme === 'nord' ? <Moon size={20} /> : <Sun size={20} />}
          </button>
        </div>
      </div>

      {/* Sidebar (Mobile) */}
      {isMenuOpen && (
        <>
          <div
            className='fixed inset-0 bg-black/50 z-40 backdrop-blur-sm'
            onClick={() => {
              setTimeout(() => setIsMenuOpen(false), 300);
            }}
          />

          <div
            className='fixed top-0 left-0 h-full w-64 z-50 p-4 rounded-tr-2xl rounded-br-2xl shadow-lg bg-base-200/95'
            onClick={(e) => e.stopPropagation()}
          >
            <div className='flex justify-between items-center mb-4'>
              <span className='text-xl font-bold '>Menu</span>
              <button
                onClick={() => {
                  setTimeout(() => setIsMenuOpen(false), 300);
                }}
              >
                <X size={24} />
              </button>
            </div>
            <ul className='menu menu-vertical space-y-2'>
              <li>
                <Link
                  to='/projects'
                  onClick={() => {
                    setTimeout(() => setIsMenuOpen(false), 300);
                  }}
                >
                  <Code2 />
                  Projects
                </Link>
              </li>
              <li>
                <Link
                  to='/resume'
                  onClick={() => {
                    setTimeout(() => setIsMenuOpen(false), 300);
                  }}
                >
                  <FileUserIcon />
                  Resume
                </Link>
              </li>
              <li>
                <Link
                  to='/education'
                  onClick={() => {
                    setTimeout(() => setIsMenuOpen(false), 300);
                  }}
                >
                  <School2 />
                  Education
                </Link>
              </li>
              <li>
                <Link
                  to='/contact'
                  onClick={() => {
                    setTimeout(() => setIsMenuOpen(false), 300);
                  }}
                >
                  <Contact2 />
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </>
      )}
    </div>
  );
}
