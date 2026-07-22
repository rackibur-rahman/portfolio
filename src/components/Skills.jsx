import "../styles/Skills.css";

import {
  FaCheckCircle,
  FaBug,
  FaRobot,
  FaTools,
  FaServer,
} from "react-icons/fa";


function Skills() {
  return (
    <section 
      className="skills section"
      data-aos="fade-up"
    >

      <div 
        className="section-title"
        data-aos="fade-up"
      >
        <h2>Skills</h2>

        <p>
          Technologies & Tools I Work With
        </p>

      </div>


      <div 
        className="skills-grid"
        data-aos="fade-up"
        data-aos-delay="200"
      >


        <div 
          className="skill-card"
          data-aos="zoom-in"
          data-aos-delay="100"
        >

          <h3>
            <FaBug /> Testing
          </h3>


          <ul>
            <li><FaCheckCircle /> Manual Testing</li>
            <li><FaCheckCircle /> Mobile Testing</li>
            <li><FaCheckCircle /> Web Testing</li>
            <li><FaCheckCircle /> Regression Testing</li>
            <li><FaCheckCircle /> Smoke Testing</li>
            <li><FaCheckCircle /> Sanity Testing</li>
            <li><FaCheckCircle /> Functional Testing</li>
          </ul>

        </div>



        <div 
          className="skill-card"
          data-aos="zoom-in"
          data-aos-delay="200"
        >

          <h3>
            <FaRobot /> Automation
          </h3>


          <ul>
            <li><FaCheckCircle /> Playwright</li>
            <li><FaCheckCircle /> Maestro</li>
          </ul>

        </div>




        <div 
          className="skill-card"
          data-aos="zoom-in"
          data-aos-delay="300"
        >

          <h3>
            <FaServer /> API & Database
          </h3>


          <ul>
            <li><FaCheckCircle /> REST API Testing</li>
            <li><FaCheckCircle /> Postman</li>
            <li><FaCheckCircle /> Proxyman</li>
            <li><FaCheckCircle /> SQL</li>
          </ul>

        </div>




        <div 
          className="skill-card"
          data-aos="zoom-in"
          data-aos-delay="400"
        >

          <h3>
            <FaTools /> Tools
          </h3>


          <ul>
            <li><FaCheckCircle /> Jira</li>
            <li><FaCheckCircle /> GitHub</li>
            <li><FaCheckCircle /> BrowserStack</li>
            <li><FaCheckCircle /> LambdaTest</li>
            <li><FaCheckCircle /> Firebase</li>
            <li><FaCheckCircle /> Figma</li>
          </ul>

        </div>


      </div>


    </section>
  );
}


export default Skills;