import "../styles/Contact.css";
import {
  FaEnvelope,
  FaLinkedin,
  FaGithub,
  FaWhatsapp,
} from "react-icons/fa";

function Contact() {
  return (
    <section className="contact">

      <div className="section-title" data-aos="fade-up">
        <h2>Get In Touch</h2>
        <p>
          Have a QA opportunity, collaboration, or project in mind?
          Let's connect — I'm always happy to discuss quality engineering, testing, and automation.
        </p>
      </div>

      <div
        className="contact-links"
        data-aos="fade-up"
        data-aos-delay="150"
      >

        <a href="mailto:rackibur.rahman@gmail.com">
          <FaEnvelope />
          <span>Email</span>
        </a>

        <a
          href="https://www.linkedin.com/in/rackibur-rahman/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaLinkedin />
          <span>LinkedIn</span>
        </a>

        <a
          href="https://github.com/rackibur-rahman"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaGithub />
          <span>GitHub</span>
        </a>

        <a
          href="https://wa.me/8801767360444?text=Hello%20Rackibur,%20I%20came%20across%20your%20portfolio%20and%20was%20impressed%20with%20your%20QA%20experience.%20I'd%20like%20to%20discuss%20a%20potential%20opportunity%20with%20you."
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaWhatsapp />
          <span>WhatsApp</span>
        </a>

      </div>

    </section>
  );
}

export default Contact;