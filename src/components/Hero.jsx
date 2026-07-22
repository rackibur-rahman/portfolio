import "../styles/Hero.css";
import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaWhatsapp,
} from "react-icons/fa";
import { TypeAnimation } from "react-type-animation";

function Hero() {
  return (
    <section className="hero" data-aos="fade-up">
      <div className="hero-text" data-aos="fade-right">

        <p className="greeting">👋 Hello, I'm</p>

        <h1 data-aos="fade-up" data-aos-delay="200">
          Rackibur Rahman
        </h1>

        <h2 className="typing-title">
          <TypeAnimation
            sequence={[
              "QA Lead Engineer",
              2000,
              "Mobile Testing",
              2000,
              "Web Testing",
              2000,
              "API Testing",
              2000,
              "Automation Testing",
              2000,
              "AI Feature Testing",
              2000,
              "Release Validation",
              2000,
            ]}
            wrapper="span"
            speed={45}
            repeat={Infinity}
          />
        </h2>

        <p className="tagline">
          6+ Years of Experience with Ensuring Quality Across
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

          <a
            href="https://wa.me/8801767360444?text=Hello%20Rackibur,%20I%20came%20across%20your%20portfolio%20and%20was%20impressed%20with%20your%20QA%20experience.%20I'd%20like%20to%20discuss%20a%20potential%20opportunity%20with%20you."
            target="_blank"
            rel="noreferrer"
            aria-label="WhatsApp"
          >
            <FaWhatsapp />
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