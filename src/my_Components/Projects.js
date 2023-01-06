import React from "react";
import { projects } from "../data";

export default function Projects() {
  return (
    <section id="projects" className="text-gray-400 body-font">
      <div className="container px-5 py-10 mx-auto text-center lg:px-40">
        <div className="flex flex-col w-full mb-20">
          <div className="mx-auto inline-block w-10 mb-4 ml-25 " >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-20 h-20 pr-5 -ml-3.5 ">
              <path fillRule="evenodd" d="M14.447 3.027a.75.75 0 01.527.92l-4.5 16.5a.75.75 0 01-1.448-.394l4.5-16.5a.75.75 0 01.921-.526zM16.72 6.22a.75.75 0 011.06 0l5.25 5.25a.75.75 0 010 1.06l-5.25 5.25a.75.75 0 11-1.06-1.06L21.44 12l-4.72-4.72a.75.75 0 010-1.06zm-9.44 0a.75.75 0 010 1.06L2.56 12l4.72 4.72a.75.75 0 11-1.06 1.06L.97 12.53a.75.75 0 010-1.06l5.25-5.25a.75.75 0 011.06 0z" clipRule="evenodd" />
            </svg>
          </div>
          <h1 className="sm:text-4xl text-3xl font-medium title-font mb-8 text-white">
            Project's I've Built
          </h1>
          <p className="lg:w-full mx-auto leading-relaxed text-base text-justify">
          "As a beginner web developer, I have had the opportunity to work on several prototype projects that have allowed me to build my skills and gain practical experience. These projects have allowed me to gain hands-on experience with technologies such as React Js and JavaScript, and have helped me build a strong foundation of skills. These experiences have given me valuable insight into the development process and have allowed me to apply my knowledge of React Js and JavaScript in a real-world setting. These are the some projects that I have built using JavaScript, HTML5, CSS3, Bootstrap, React JS, Tailwind CSS."
          </p>
        </div>
        <div className="flex flex-wrap -m-4 ">
          {projects.map((project) => (
            <a
              href={project.link}
              key={project.image}
              className="sm:w-1/2 w-100 p-4">
              <div className="flex relative ">
                <img
                  alt="gallery"
                  className="absolute inset-0 w-full h-full object-cover object-center "
                  src={project.image}
                />
                <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-800 bg-gray-900 opacity-0 hover:opacity-100">
                  <h2 className="tracking-widest text-sm title-font font-medium text-green-400 mb-1">
                    {project.subtitle}
                  </h2>
                  <h1 className="title-font text-lg font-medium text-white mb-3">
                    {project.title}
                  </h1>
                  <p className="leading-relaxed">{project.description}</p>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
