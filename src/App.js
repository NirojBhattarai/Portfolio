import React from "react";
import About from "./my_Components/About";
import Contact from "./my_Components/Contact";
import Navbar from "./my_Components/Navbar";
import Projects from "./my_Components/Projects";
import Skills from "./my_Components/Skills";
import Testimonials from "./my_Components/Testimonials";
import Footer from "./my_Components/Footer";

export default function App() {
  return (
    <main className="text-gray-400 bg-slate-900 body-font">
      <Navbar />
      <About />
      <Projects />
      <Skills />
      <Testimonials />
      <Contact />
      <Footer/>
    </main>
  );
}
