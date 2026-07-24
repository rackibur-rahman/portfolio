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
  const row1 = [
    {
      icon: <FaAward />,
      text: "QA Leadership",
      color: "#FFD54A",
    },
    {
      icon: <FaCheckCircle />,
      text: "6+ Years Experience",
      color: "#22C55E",
    },
    {
      icon: <FaMobileAlt />,
      text: "Mobile Testing",
      color: "#4DA3FF",
    },
    {
      icon: <FaGlobe />,
      text: "Web Testing",
      color: "#38BDF8",
    },
    {
      icon: <FaCode />,
      text: "API Testing",
      color: "#A855F7",
    },
    {
      icon: <FaBug />,
      text: "Regression Testing",
      color: "#EF4444",
    },
  ];

  const row2 = [
    {
      icon: <FaBug />,
      text: "Exploratory Testing",
      color: "#F97316",
    },
    {
      icon: <FaRobot />,
      text: "Automation",
      color: "#8B5CF6",
    },
    {
      icon: <FaCloud />,
      text: "BrowserStack",
      color: "#0EA5E9",
    },
    {
      icon: <FaCloud />,
      text: "LambdaTest",
      color: "#06B6D4",
    },
    {
      icon: <FaCloud />,
      text: "Cross-Platform Testing",
      color: "#14B8A6",
    },
    {
      icon: <FaCloud />,
      text: "Version Control",
      color: "#64748B",
    },
  ];

  return (
    <section
      className="highlights"
      data-aos="fade-up"
    >
      {/* Row 1 */}

      <div className="highlights-slider">

        <div className="highlights-track left">

          {[...row1, ...row1].map((item, index) => (

            <div
              className="highlight-card"
              key={index}
            >

              <span
                className="highlight-icon"
                style={{ color: item.color }}
              >
                {item.icon}
              </span>

              <span>{item.text}</span>

            </div>

          ))}

        </div>

      </div>

      {/* Row 2 */}

      <div className="highlights-slider second-row">

        <div className="highlights-track right">

          {[...row2, ...row2].map((item, index) => (

            <div
              className="highlight-card"
              key={index}
            >

              <span
                className="highlight-icon"
                style={{ color: item.color }}
              >
                {item.icon}
              </span>

              <span>{item.text}</span>

            </div>

          ))}

        </div>

      </div>

    </section>
  );
}

export default Highlights;