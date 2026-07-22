import "../styles/Highlights.css";

import {
  FaAward,
  FaMobileAlt,
  FaGlobe,
  FaCode,
  FaCheckCircle,
  FaCloud,
  FaRobot,
  FaBug,
} from "react-icons/fa";


function Highlights() {

  const items = [
    { icon: <FaAward />, text: "QA Leadership" },
    { icon: <FaCheckCircle />, text: "6+ Years Experience" },
    { icon: <FaMobileAlt />, text: "Mobile Testing" },
    { icon: <FaGlobe />, text: "Web Testing" },
    { icon: <FaCode />, text: "API Testing" },
    { icon: <FaBug />, text: "Regression Testing" },
    { icon: <FaRobot />, text: "Automation" },
    { icon: <FaCloud />, text: "BrowserStack & LambdaTest" },
  ];


  return (

    <section 
      className="highlights"
      data-aos="fade-up"
    >

      <div 
        className="highlights-container"
        data-aos="fade-up"
      >


        {items.map((item, index) => (

          <div
            className="highlight-card"
            key={index}
            data-aos="zoom-in"
            data-aos-delay={index * 100}
          >

            <span className="highlight-icon">
              {item.icon}
            </span>


            <span>
              {item.text}
            </span>


          </div>

        ))}


      </div>


    </section>

  );

}


export default Highlights;