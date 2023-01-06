import React from 'react'
export default function Navbar() {
  return (
    <header className='bg-slate-800 md:sticky top-0 z-10'>
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <img className='h-8 w-8 rounded-full' src='/my_Photo.webp' alt='my_Photo'></img>
        <a href="xyz"className='title-font font-medium text-white mb-4 md:mb-0'>
          <a href='#about' className='ml-4 text-xl'>Neeraj Bhattarai</a>
        </a>
        <nav className='md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-slate-700 flex flex-wrap items center text-base justify-center text-gray-400'>
          <a href='#projects' className='mr-5 hover:text-white'>Projects</a>
          <a href='#skills' className='mr-5 hover:text-white'>Skills</a>
          <a href='#testimonials' className='mr-5 hover:text-white'>Testimonials</a>
          <a href='#social media' className='mr-5 hover:text-white'>Contact</a>
        </nav>
        <a href='#contact' className='inline-flex items-center bg-slate-800 border-0 py-1 px-3 focus:outline-none text-gray-400 hover:bg-green-700 hover:text-white rounded text-base mt-4 md:mt-0'>
          Hire Me
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 p-1">
             <path fillRule="evenodd" d="M3.75 12a.75.75 0 01.75-.75h13.19l-5.47-5.47a.75.75 0 011.06-1.06l6.75 6.75a.75.75 0 010 1.06l-6.75 6.75a.75.75 0 11-1.06-1.06l5.47-5.47H4.5a.75.75 0 01-.75-.75z" clipRule="evenodd" />
          </svg>

        </a>
      </div>
    </header>
  );
}
