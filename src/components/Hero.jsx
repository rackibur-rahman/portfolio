import "../styles/Hero.css";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

function Hero() {
  return (
    <section className="hero" data-aos="fade-up">
      <div className="hero-text" data-aos="fade-right">

        <p className="greeting">👋 Hello, I'm</p>

        <h1 data-aos="fade-up" data-aos-delay="200">
          Rackibur Rahman
        </h1>

        <h2 data-aos="fade-up" data-aos-delay="300">
          QA Lead Engineer
        </h2>

        <p className="tagline">
          6+ Years of Experience in
          <br />
          Mobile • Web • API • Automation Testing
        </p>

        <p 
          className="description"
          data-aos="fade-up"
          data-aos-delay="400"
        >
          Passionate about delivering high-quality software through
          manual testing, API validation, automation, and QA leadership.
        </p>

        <div 
          className="buttons"
          data-aos="fade-up"
          data-aos-delay="500"
        >
          <a
            href="/Rackibur_Rahman_Resume.pdf"
            download
            className="btn resume-btn"
          >
            Download Resume
          </a>

          <a href="#projects" className="btn secondary">
            View Projects
          </a>
        </div>

        <div 
          className="social-links"
          data-aos="fade-up"
          data-aos-delay="600"
        >

          <a
            href="https://github.com/rackibur-rahman"
            target="_blank"
            rel="noreferrer"
          >
            <FaGithub />
          </a>

          <a
            href="https://www.linkedin.com/in/rackibur-rahman/"
            target="_blank"
            rel="noreferrer"
          >
            <FaLinkedin />
          </a>

          <a href="mailto:rackibur.rahman@gmail.com">
            <FaEnvelope />
          </a>

        </div>

      </div>

      <div 
        className="hero-image"
        data-aos="fade-left"
      >

        <img
          src="/profile.png"
          alt="Rackibur Rahman"
        />

      </div>
    </section>
  );
}

export default Hero;