import React from 'react'
export default function About() {
  return (
    <section id='about'>
      <div className='container mx-auto flex px-10 md:flex-row flex-col items-center'>
        <div className='lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:text-left mb-25 md:mb-0 items-center text-center'>
          <div className="mx-auto inline-block w-10 mb-4" >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-20 h-20 pr-5 -ml-3.5">
              <path fillRule="evenodd" d="M18.685 19.097A9.723 9.723 0 0021.75 12c0-5.385-4.365-9.75-9.75-9.75S2.25 6.615 2.25 12a9.723 9.723 0 003.065 7.097A9.716 9.716 0 0012 21.75a9.716 9.716 0 006.685-2.653zm-12.54-1.285A7.486 7.486 0 0112 15a7.486 7.486 0 015.855 2.812A8.224 8.224 0 0112 20.25a8.224 8.224 0 01-5.855-2.438zM15.75 9a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z" clipRule="evenodd" />
            </svg>
           </div>
          <h1 className='title-font sm:text-3xl text-2xl mb-8 font-medium text-white text-center'>Neeraj Bhattarai<br className='hidden lg:inline-block'/></h1>
          <p className='mb-8 leading leading-relaxed  text-justify'>"Hi ! My name is Neeraj Bhattarai and I am currently a BSc.CSIT student. In addition to my studies, I am also learning web development with a focus on React Js and JavaScript. I am passionate about using technology to build innovative and user-friendly websites and applications. I am constantly learning and improving my skills, and I am excited to start putting my knowledge into practice through real-world projects. Thank you for visiting my portfolio."</p>
          <div className='flex justify-center'>
            <a href='#contact' className='inline-flex text-white bg-green-500 border-0 py-2 px-6 focus:outline-none hover:bg-green-600 rounded text-lg'>Work With Me</a>
            <a href='#projects' className='ml-4 inline-flex text-gray-400 bg-gray-800 border-0 py-2 px-6 focus:outline-none hover:bg-gray-700 hover:text-white rounded text-lg'>See My Past Work</a>
          </div>
        </div>
        <div className="lg:max-w-lg lg:w-full md:w-2/12 w-full mt-7 ml-16 ">
          <img
            className="object-cover object-center rounded border-2 border-green-400"
            alt="hero"
            src="./Me.webp"
            width="80%"
          />
          </div>
        </div>
    </section>
  );
}
