import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css'; 
import Home from '../user/header';
import MobileNavbar from '../user/mobileNavbar';
import Skills from './skills';
import {AboutMe, Education} from './background'
import Portfolio from '../user/portfolio';
import Contact from './contact';

export default function MobileProfile() {
  useEffect(() => {
    AOS.init({
      duration: 1000, 
      easing: 'ease-in-out',
      once: false, 
    });
  }, []);

  return (
    <div>
      {/* Navbar */}
      <MobileNavbar />

      {/* Profile Content */}
      <div className="flex flex-col min-h-screen">
        {/* Scrollable Sections - Full Width */}
        <div className="w-full overflow-y-auto p-4">
          {/* Home Section */}
          <section
            id="home"
            className="min-h-screen"
            data-aos="fade-in"
          >
            <Home />
          </section>

          {/* About Section */}
          <section
            id="about"
            className="min-h-screen"
            data-aos="fade-in"
          >
            <AboutMe />
          </section>
          <section
            id="education"
            className="min-h-screen"
            data-aos="fade-in"
          >
            <Education />
          </section>
          <section
            id="skills"
            className="min-h-screen"
            data-aos="fade-in"
          >
            <Skills />
          </section>

          {/* Portfolio Section */}
          <section
            id="portfolio"
            className="min-h-screen"
            data-aos="fade-in"
          >
            <Portfolio />
          </section>

          {/* Contact Section */}
          <section
            id="contact"
            className="min-h-screen"
            data-aos="fade-in"
          >
            <Contact />
          </section>
        </div>
      </div>
    </div>
  );
}
