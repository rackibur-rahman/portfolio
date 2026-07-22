import "../styles/Skills.css";
import {
  FaBug,
  FaRobot,
  FaServer,
  FaTools,
} from "react-icons/fa";

function Skills() {
  return (
    <section
      className="skills section"
      data-aos="fade-up"
    >
      <div className="section-title">
        <h2>Skills</h2>

        <p>
          Technologies, testing methodologies, automation tools,
          and platforms I use to deliver high-quality software.
        </p>
      </div>

      <div className="skills-grid">

        {/* Testing */}

        <div
          className="skill-card"
          data-aos="zoom-in"
          data-aos-delay="100"
        >

          <h3>
            <FaBug />
            Testing
          </h3>

          <div className="skill-tags">

            <span>Manual Testing</span>
            <span>Mobile Testing</span>
            <span>Web Testing</span>
            <span>Regression Testing</span>
            <span>Smoke Testing</span>
            <span>Sanity Testing</span>
            <span>Functional Testing</span>
            <span>Exploratory Testing</span>

          </div>

        </div>



        {/* Automation */}

        <div
          className="skill-card"
          data-aos="zoom-in"
          data-aos-delay="200"
        >

          <h3>
            <FaRobot />
            Automation
          </h3>

          <div className="skill-tags">

            <span>Playwright</span>
            <span>Maestro</span>
            <span>Test Automation</span>
            <span>Cross-browser Testing</span>
            <span>Test Execution</span>
            <span>Test Reporting</span>

          </div>

        </div>



        {/* API */}

        <div
          className="skill-card"
          data-aos="zoom-in"
          data-aos-delay="300"
        >

          <h3>
            <FaServer />
            API & Database
          </h3>

          <div className="skill-tags">

            <span>REST API Testing</span>
            <span>Postman</span>
            <span>Proxyman</span>
            <span>SQL</span>
            <span>JSON Validation</span>
            <span>Request / Response Validation</span>

          </div>

        </div>



        {/* Tools */}

        <div
          className="skill-card"
          data-aos="zoom-in"
          data-aos-delay="400"
        >

          <h3>
            <FaTools />
            Tools
          </h3>

          <div className="skill-tags">

            <span>Jira</span>
            <span>GitHub</span>
            <span>BrowserStack</span>
            <span>LambdaTest</span>
            <span>Firebase</span>
            <span>Figma</span>
            <span>ClickUp</span>

          </div>

        </div>

      </div>

    </section>
  );
}

export default Skills;