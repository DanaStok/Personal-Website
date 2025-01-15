"use client";
import "./Home.css";
import React from "react";
import TypingAnimation from "../components/typingAnimation";
import { FaLinkedin, FaGithub, FaFileAlt, FaPhone, FaLaptopCode } from "react-icons/fa";

const Home = () => {
  return (
    <div className="flex flex-col justify-center items-start h-screen px-8">
      <div className="flex flex-col gap-2">
        <div>
          <span className="text-6xl sm:text-7xl md:text-8xl font-bold leading-tight">Dana</span>
        </div>
        <div>
          <span className="text-6xl sm:text-7xl md:text-8xl font-bold leading-tight">Stok</span>
        </div>
        <TypingAnimation />
      </div>
      <p className="mt-4 text-base sm:text-lg text-gray-600 max-w-lg">
        Hello! I am a <strong>Software Engineer based in Tel Aviv, Israel</strong>, driven by a passion for{" "}
        <strong>creating</strong> and <strong>developing</strong>. I’m excited to broaden my horizons, take on{" "}
        <strong>new challenges in the tech industry</strong>, and contribute to <strong>shaping the future of technology</strong>!
      </p>
      <div className="flex flex-wrap gap-4 mt-6">
        {/* Contact Button */}
        <a href="#contact" className="home-button" data-tooltip="Contact Me">
          <div className="home-button-wrapper">
            <div className="home-text">Contact</div>
            <span className="home-icon">
              <FaPhone size="2em" />
            </span>
          </div>
        </a>
        {/* Projects Button */}
        <a href="#portfolio" className="home-button" data-tooltip="View Projects">
          <div className="home-button-wrapper">
            <div className="home-text">Projects</div>
            <span className="home-icon">
              <FaLaptopCode size="2em" />
            </span>
          </div>
        </a>
        {/* CV Button */}
        <a href="/media/DanaStokCV.pdf" target="_blank" rel="noopener noreferrer" className="home-button" data-tooltip="Show CV">
          <div className="home-button-wrapper">
            <div className="home-text">CV</div>
            <span className="home-icon">
              <FaFileAlt size="2em" />
            </span>
          </div>
        </a>
        {/* LinkedIn Button */}
        <a
          href="https://www.linkedin.com/in/dana-stok/"
          target="_blank"
          rel="noopener noreferrer"
          className="home-button"
          data-tooltip="Profile"
        >
          <div className="home-button-wrapper">
            <div className="home-text">LinkedIn</div>
            <span className="home-icon">
              <FaLinkedin size="2em" />
            </span>
          </div>
        </a>
        {/* GitHub Button */}
        <a
          href="https://github.com/DanaStok"
          target="_blank"
          rel="noopener noreferrer"
          className="home-button"
          data-tooltip="Profile"
        >
          <div className="home-button-wrapper">
            <div className="home-text">GitHub</div>
            <span className="home-icon">
              <FaGithub size="2em" />
            </span>
          </div>
        </a>
      </div>
    </div>
  );
};

export default Home;
