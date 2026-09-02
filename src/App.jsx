import "./App.css";

import { Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";

import Hero from "./components/Hero";
import Highlights from "./components/Highlights";
import Stats from "./components/Stats";
import Achievements from "./components/Achievements";
import BugLifecycleStory from "./components/BugLifecycleStory";
import ShiftLeftQualityMap from "./components/ShiftLeftQualityMap";
import TechStack from "./components/TechStack";

import About from "./components/About";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import QualityImpactDashboard from "./components/QualityImpactDashboard";
import HowIThink from "./components/HowIThink";
import MentorshipTeamGrowth from "./components/MentorshipTeamGrowth";
import TestingEnvironment from "./components/TestingEnvironment";
import CaseStudies from "./components/CaseStudies";
import Projects from "./components/Projects";

import CTA from "./components/CTA";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

import ScrollProgress from "./components/ScrollProgress";
import BackToTop from "./components/BackToTop";

import Blog from "./pages/Blog";
import BlogPost from "./pages/BlogPost";

function Home() {
  return (
    <>
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

      <section id="BugLifecycleStory">
        <BugLifecycleStory />
      </section>

      <section id="ShiftLeftQualityMap">
        <ShiftLeftQualityMap />
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

      <section id="QualityImpactDashboard">
        <QualityImpactDashboard />
      </section>

      <section id="HowIThink">
        <HowIThink />
      </section>

      <section id="MentorshipTeamGrowth">
        <MentorshipTeamGrowth />
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
    </>
  );
}

function App() {
  return (
    <div className="app">
      <ScrollProgress />

      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/blog/:slug" element={<BlogPost />} />
      </Routes>

      <Footer />
      <BackToTop />
    </div>
  );
}

export default App;