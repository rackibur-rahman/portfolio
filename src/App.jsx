import "./App.css";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Highlights from "./components/Highlights";
import Stats from "./components/Stats";
import Achievements from "./components/Achievements";
import TechStack from "./components/TechStack";
import About from "./components/About";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import TestingEnvironment from "./components/TestingEnvironment";
import CaseStudies from "./components/CaseStudies";
import Projects from "./components/Projects";
import CTA from "./components/CTA";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import ScrollProgress from "./components/ScrollProgress";
import BackToTop from "./components/BackToTop";


function App() {
  return (
    <div className="app">
      <ScrollProgress />
      <Navbar />

      <section id="home">
        <Hero />
      </section>

      <section id="highlights">
        <Highlights />
      </section>

      <section id="stats">
        <Stats />
      </section>

      <section id="achievements">
        <Achievements />
      </section>

      <section id="tech-stack">
        <TechStack />
      </section>

      <section id="about">
        <About />
      </section>

      <section id="skills">
        <Skills />
      </section>

      <section id="experience">
        <Experience />
      </section>

      <section id="TestingEnvironment">
        <TestingEnvironment />
      </section>      

      <section id="case-studies">
        <CaseStudies />
      </section>

      <section id="projects">
        <Projects />
      </section>

      <section id="cta">
        <CTA />
      </section>

      <section id="contact">
        <Contact />
      </section>

      <Footer />
      <BackToTop />
    </div>
  );
}

export default App;