import React from "react";
import { FaGithub } from "react-icons/fa";

const Projects = () => {
  const projects = [
    {
      icon: <FaGithub className="text-6xl sm:text-5xl md:text-6xl text-gray-300" aria-label="GitHub" />,
      label: "Family Management System",
      link: "https://github.com/sumank07/family-management-system.git",
      bgColor: "bg-gray-800",
      hoverColor: "hover:bg-gray-900",
      ringColor: "focus:ring-gray-400",
    },
    {
      icon: <FaGithub className="text-6xl sm:text-5xl md:text-6xl text-purple-400" aria-label="GitHub" />,
      label: "Portfolio (Suman)",
      link: "https://github.com/sumank07/portfolio-suman.git",
      bgColor: "bg-purple-600",
      hoverColor: "hover:bg-purple-700",
      ringColor: "focus:ring-purple-300",
    },
    {
      icon: <FaGithub className="text-6xl sm:text-5xl md:text-6xl text-blue-400" aria-label="GitHub" />,
      label: "Ecommerce (Vue)",
      link: "https://github.com/sumank07/ecommerce-vue.git",
      bgColor: "bg-blue-600",
      hoverColor: "hover:bg-blue-700",
      ringColor: "focus:ring-blue-300",
    },
    {
      icon: <FaGithub className="text-6xl sm:text-5xl md:text-6xl text-green-400" aria-label="GitHub" />,
      label: "Kheti Viti",
      link: "https://github.com/sumank07/kheti-viti.git",
      bgColor: "bg-green-600",
      hoverColor: "hover:bg-green-700",
      ringColor: "focus:ring-green-300",
    },
  ];

  return (
    <section id="projects" className="py-20">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-bold mb-10">My Projects</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 justify-items-center">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-gray-900 text-white flex flex-col items-center border border-gray-700 p-6 
              transition-transform duration-300 hover:scale-105 rounded-2xl shadow-lg hover:shadow-2xl"
            >
              {project.icon}
              <p className="mt-4 text-lg font-semibold">{project.label}</p>
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className={`text-white rounded mt-4 px-4 py-2 ${project.bgColor} ${project.hoverColor} 
                focus:outline-none focus:ring-2 ${project.ringColor}`}
              >
                View Project
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
