import React from 'react';
import { FaGithub, FaLinkedin, FaFileAlt } from 'react-icons/fa';
import "./Navbar.css"
export default function ComputerNavbar() {
  return (
    <div id="navbody" className="fixed top-4 right-4 z-50">
      <ul className="ul">
        {/* Home Button */}
        <li className="li">
          <a href="#home" className="svg w-6 h-6 text-gray-800 dark:text-white">
            Home
          </a>
        </li>

        {/* About Button */}
        <li className="li">
          <a href="#about" className="svg w-6 h-6 text-gray-800 dark:text-white">
            About
          </a>
        </li>

        {/* Portfolio Button */}
        <li className="li">
          <a href="#portfolio" className="svg w-6 h-6 text-gray-800 dark:text-white">
            Portfolio
          </a>
        </li>

        {/* Contact Button */}
        <li className="li">
          <a href="#contact" className="svg w-6 h-6 text-gray-800 dark:text-white">
            Contact
          </a>
        </li>

        {/* Download CV Button */}
        <li className="li">
          <a href="/media/DanaStokCV.pdf" download="DanaStokCV.pdf" className="svg w-6 h-6 text-gray-800 dark:text-white">
            <FaFileAlt />
          </a>
        </li>

        {/* LinkedIn Link */}
        <li className="li">
          <a href="https://www.linkedin.com/in/dana-stok-19a690234/" target="_blank" rel="noopener noreferrer" className="svg w-6 h-6 text-gray-800 dark:text-white">
            <FaLinkedin />
          </a>
        </li>

        {/* GitHub Link */}
        <li className="li">
          <a href="https://github.com/DanaStok" target="_blank" rel="noopener noreferrer" className="svg w-6 h-6 text-gray-800 dark:text-white">
            <FaGithub />
          </a>
        </li>
      </ul>
    </div>
  );
}
