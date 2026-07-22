import "./App.css";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Highlights from "./components/Highlights";
import About from "./components/About";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Stats from "./components/Stats";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="app">
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

      <section id="about">
        <About />
      </section>

      <section id="skills">
        <Skills />
      </section>

      <section id="experience">
        <Experience />
      </section>

      <section id="projects">
        <Projects />
      </section>

      <section id="contact">
        <Contact />
      </section>

      <Footer />
    </div>
  );
}

export default App;