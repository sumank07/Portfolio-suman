import React from "react";
import aboutmeImage from '../Assets/aboutme-image.png.jpg';

const About = () => {
  return (
    <div className="py-20" id="about">
      <div className="container mx-auto px-4 sm:px-8 md:px-16 lg:px-24">
        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-8 sm:mb-12">
          About Me
        </h2>
        <div className="flex flex-col md:flex-row items-center md:space-x-12">
          <img
            src={aboutmeImage}
            alt="About Me"
            className="w-60 sm:w-72 h-72 sm:h-80 rounded object-cover mb-6 sm:mb-8 md:mb-0 shadow-lg"
          />
          <div className="flex-1">
            <p className="text-base sm:text-lg mb-6 sm:mb-8 leading-relaxed">
              I am a passionate <span className="font-semibold">Front-End Developer</span> 
              focused on building modern, responsive, and user-friendly web applications. 
              I specialize in creating clean and interactive UIs using technologies like 
              <span className="font-medium"> HTML, CSS, JavaScript, React, and Vue.js</span>. 
              My goal is to craft seamless user experiences that are both visually appealing 
              and highly functional.
            </p>
            <p className="text-base sm:text-lg leading-relaxed">
              With strong problem-solving skills and a continuous learning mindset, 
              I am dedicated to improving my craft and staying up-to-date with the latest 
              trends in front-end development.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
