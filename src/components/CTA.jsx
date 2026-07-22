import "../styles/CTA.css";
import { FaFileDownload, FaEnvelope } from "react-icons/fa";

function CTA() {
  return (
    <section className="cta section" data-aos="zoom-in">
      <div className="cta-card">
        <h2>Let's Build Quality Software Together</h2>

        <p>
          I'm open to Remote, Hybrid, and International QA opportunities.
          If you're looking for a QA Lead Engineer passionate about quality,
          automation, and delivering reliable products, let's connect.
        </p>

        <div className="cta-buttons">
          <a
            href="/Rackibur_Rahman_Resume.pdf"
            download
            className="cta-btn primary"
          >
            <FaFileDownload />
            Download Resume
          </a>

          <a
            href="mailto:rackibur.rahman@gmail.com"
            className="cta-btn secondary"
          >
            <FaEnvelope />
            Contact Me
          </a>
        </div>
      </div>
    </section>
  );
}

export default CTA;