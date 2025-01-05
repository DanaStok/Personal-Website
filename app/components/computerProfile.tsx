import React from 'react';
import Home from '../user/header';
import ComputerNavbar from '../user/computerNavbar';
import Skills from './skills';
import {AboutMe, Education} from './background'
import Portfolio from '../user/portfolio'
import Contact from './contact'

export default function ComputerProfile() {
  return (
    <div>
      {/* Navbar */}
      <ComputerNavbar />

      {/* Profile Content */}
      <div className="flex min-h-screen">
        {/* Static Profile Picture Section */}
        <div className="w-2/5 sticky top-0 h-screen">
          <img
            src="/media/me.png"
            alt="Profile Picture"
            className="h-full w-full object-cover"
          />
        </div>

        {/* Scrollable Sections */}
        <div className="w-3/5 overflow-y-auto p-8">

          {/* Home Section */}
          <section id="home" className="min-h-screen">
            <Home />
          </section>
          
          {/* About Section */}
          <section id="about" className="min-h-screen">
            <AboutMe />
            <Education />
            <Skills />
          </section>

          {/* Portfolio Section */}
          <section id="portfolio" className="min-h-screen">
            <Portfolio />
          </section>

          {/* Contact Section */}
          <section id="contact" className="min-h-screen">
            <Contact />
          </section>

        </div>
      </div>
    </div>
  );
}
