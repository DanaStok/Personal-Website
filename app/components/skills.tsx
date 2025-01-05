import React from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

const Skills = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 400,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1000,
    cssEase: "linear",
    responsive: [
        {
            breakpoint: 1024,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 1,
            }
        },
        {
            breakpoint: 768,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1
            }
        },
        {
            breakpoint: 480,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        }
    ]
  };

  return (
    <section className="flex flex-col items-center justify-center p-16 mt-16 min-h-[60vh] bg-base-200">
      <div className="w-full max-w-6xl p-8 rounded-lg shadow-md">
        <h2 className="text-4xl font-bold mb-2 text-center">Skills</h2>
        <h3 className="text-lg mb-6 text-center font-semibold text-pink-800">TECH STACK</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
          <div>
            <h4 className="text-xl font-bold mb-2">Frontend Development</h4>
            <ul className="list-none">
              <li>React</li>
              <li>Next.js</li>
              <li>HTML</li>
              <li>JavaScript</li>
              <li>CSS</li>
            </ul>
          </div>
          <div>
            <h4 className="text-xl font-bold mb-2">Backend Development</h4>
            <ul className="list-none">
              <li>Python</li>
              <li>FastAPI</li>
              <li>Node.js</li>
              <li>SQLite</li>
              <li>Java</li>
            </ul>
          </div>
          <div>
            <h4 className="text-xl font-bold mb-2">Tools & Technologies</h4>
            <ul className="list-none">
              <li>Google Analytics</li>
              <li>Microsoft Azure</li>
              <li>OpenAI API</li>
            </ul>
          </div>
          <div>
            <h4 className="text-xl font-bold mb-2">Technical Skills</h4>
            <ul className="list-none">
              <li>Algorithms</li>
              <li>Data Structures</li>
              <li>Computer Networks</li>
            </ul>
          </div>
        </div>

        <Slider {...settings}>
          <div className="carousel-item">
            <img src="https://cdn.worldvectorlogo.com/logos/react-2.svg" alt="React" className="h-24 mx-auto" />
          </div>
          <div className="carousel-item">
            <img src="https://cdn.worldvectorlogo.com/logos/next-js.svg" alt="Next.js" className="h-24 mx-auto" />
          </div>
          <div className="carousel-item">
            <img src="https://cdn.worldvectorlogo.com/logos/java-4.svg" alt="Java" className="h-24 mx-auto" />
          </div>
          <div className="carousel-item">
            <img src="https://cdn.worldvectorlogo.com/logos/nodejs-icon.svg" alt="Node.js" className="h-24 mx-auto" />
          </div>
          <div className="carousel-item">
            <img src="https://cdn.worldvectorlogo.com/logos/fastapi-1.svg" alt="FastAPI" className="h-24 mx-auto" />
          </div>
          <div className="carousel-item">
            <img src="https://cdn.worldvectorlogo.com/logos/python-5.svg" alt="Python" className="h-24 mx-auto" />
          </div>
        </Slider>
      </div>
    </section>
  );
};

export default Skills;
