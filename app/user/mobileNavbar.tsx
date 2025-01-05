import React, { useState } from 'react';
import { FaGithub, FaLinkedin, FaBars, FaTimes, FaFileAlt } from 'react-icons/fa';

export default function MobileNavbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="fixed top-0 left-0 right-0 z-50">
      {/* Mobile Menu Toggle Button */}
      <div className="flex justify-between items-center p-4 bg-white shadow-md">
        <button 
          onClick={toggleMenu} 
          className="text-2xl focus:outline-none"
        >
          {isOpen ? <FaTimes /> : <FaBars />}
        </button>

        <div className="flex space-x-2">
          {/*  CVButton */}
          <a
            href="/docs/DanaStokCV.pdf"
            download="DanaStokCV.pdf"
            className="btn btn-outline btn-neutral btn-sm rounded-full flex items-center"
          >
            <FaFileAlt  className="h-5 w-5" />
          </a>

          {/* LinkedIn Link */}
          <a
            href="https://www.linkedin.com/in/dana-stok-19a690234/"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-outline btn-neutral btn-sm rounded-full flex items-center"
          >
            <FaLinkedin className="h-5 w-5" />
          </a>
          
          {/* GitHub Link */}
          <a
            href="https://github.com/DanaStok"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-outline btn-neutral btn-sm rounded-full flex items-center"
          >
            <FaGithub className="h-5 w-5" />
          </a>
        </div>
      </div>

      {/* Dropdown Menu */}
      {isOpen && (
        <div className="absolute top-full left-0 right-0 bg-white shadow-lg">
          <div className="flex flex-col items-start p-4 space-y-4">
            {/* Navigation Links */}
            <a href="#home" className="text-md font-medium hover:text-info w-full" onClick={toggleMenu}>
              Home
            </a>
            <a href="#about" className="text-md font-medium hover:text-info w-full" onClick={toggleMenu}>
              About
            </a>
            <a href="#portfolio" className="text-md font-medium hover:text-info w-full" onClick={toggleMenu}>
              Portfolio
            </a>
            <a href="#contact" className="text-md font-medium hover:text-info w-full" onClick={toggleMenu}>
              Contact
            </a>
          </div>
        </div>
      )}
    </div>
  );
}