import React from "react";
import "./Contact.css";

export default function Contact() {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-base-200 p-8">
      <h1 className="text-4xl font-bold mb-6">Contact Me</h1>
      <p className="text-lg mb-8 text-center max-w-2xl text-base-content">
        Have questions or want to work together? Reach out via email or WhatsApp using the buttons below.
      </p>

      <div className="flex flex-col items-center space-y-6">
        {/* Email Button */}
        <a
          href="mailto:danastok@gmail.com?"
          className="animated-button"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="arr-2" viewBox="0 0 24 24">
            <path
              d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z"
            ></path>
          </svg>
          <span className="text">Email</span>
          <span className="circle"></span>
          <svg xmlns="http://www.w3.org/2000/svg" className="arr-1" viewBox="0 0 24 24">
            <path
              d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z"
            ></path>
          </svg>
        </a>

        {/* WhatsApp Button */}
        <a
          href="https://wa.me/+972587040930?"
          className="animated-button"
          target="_blank"
          rel="noopener noreferrer"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="arr-2" viewBox="0 0 24 24">
            <path
              d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z"
            ></path>
          </svg>
          <span className="text">WhatsApp</span>
          <span className="circle"></span>
          <svg xmlns="http://www.w3.org/2000/svg" className="arr-1" viewBox="0 0 24 24">
            <path
              d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z"
            ></path>
          </svg>
        </a>
      </div>
    </div>
  );
}
