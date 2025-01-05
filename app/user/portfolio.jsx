"use client";
import React, { useState } from "react";
import { FaGithub, FaPlay, FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { projects } from "../components/projects"; // Your project data

const Portfolio = () => {
  const [activeProjectIndex, setActiveProjectIndex] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handlePrev = () => {
    setActiveProjectIndex((prevIndex) =>
      prevIndex === 0 ? projects.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setActiveProjectIndex((prevIndex) =>
      prevIndex === projects.length - 1 ? 0 : prevIndex + 1
    );
  };

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const activeProject = projects[activeProjectIndex];

  return (
    <div className="portfolio-section px-8 py-12">
      <h1 className="text-4xl font-bold text-center mb-2">Portfolio</h1>
      <h3 className="text-pink-800 text-lg mb-12 text-center font-semibold">
        LATEST WORKS
      </h3>
      <div className="relative w-full max-w-5xl mx-auto">
        {/* Left Arrow */}
        <button
          className="absolute left-4 top-1/2 transform -translate-y-1/2 z-10 btn btn-circle"
          onClick={handlePrev}
        >
          <FaChevronLeft size={24} />
        </button>

        {/* Project Card */}
        <div className="carousel bg-base-200 shadow-xl rounded-lg overflow-hidden px-8 py-6">
          <div className="card-body">
            <h2 className="card-title text-2xl font-semibold justify-center text-center mb-4">
              {activeProject.name}
            </h2>
            <div className="flex flex-wrap justify-center text-center gap-2 mb-4">
              {activeProject.tags.map((tag, idx) => (
                <span key={idx} className="badge badge-outline badge-secondary">
                  {tag}
                </span>
              ))}
            </div>
            <ul className="mb-6 text-left list-none list-inside">
              {activeProject.description.map((item, idx) => (
                <li key={idx} className="mb-2">
                  <span className="font-bold">{item.title}:</span> {item.text}
                </li>
              ))}
            </ul>
            <div className="flex justify-center gap-4">
              {/* Play Button */}
              <button
                className="btn btn-circle btn-outline"
                onClick={handleOpenModal}
              >
                <FaPlay size={20} />
              </button>
              {/* GitHub Button */}
              <a
                href={activeProject.github}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-circle btn-outline"
              >
                <FaGithub size={20} />
              </a>
            </div>
          </div>
        </div>

        {/* Right Arrow */}
        <button
          className="absolute right-4 top-1/2 transform -translate-y-1/2 z-10 btn btn-circle"
          onClick={handleNext}
        >
          <FaChevronRight size={24} />
        </button>
      </div>

      {/* Video Modal */}
      {isModalOpen && (
        <div className="modal modal-open">
          <div className="modal-box max-w-4xl p-4 relative">
            <button
              className="btn btn-sm btn-circle btn-outline absolute right-0.5 top-0.5"
              onClick={handleCloseModal}
            >
              ✕
            </button>
            <h2 className="text-2xl font-bold text-center mb-4">
              {activeProject.name}
            </h2>
            <div className="flex justify-center">
              <iframe
                src={`https://www.youtube.com/embed/${activeProject.video}?autoplay=1`}
                width="100%"
                height="480"
                allow="autoplay; encrypted-media"
                allowFullScreen
                className="rounded-lg"
              ></iframe>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Portfolio;
