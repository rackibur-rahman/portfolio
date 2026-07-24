import "../styles/Achievements.css";

import {
  FaBug,
  FaMobileAlt,
  FaCheckCircle,
  FaUsers,
  FaRocket,
  FaCode,
  FaClipboardCheck,
  FaAward,
} from "react-icons/fa";

function Achievements() {
  const achievements = [
    {
      icon: <FaAward />,
      color: "#FFD54A",
      title: "6+ Years",
      text: "Software Quality Assurance Experience",
    },
    {
      icon: <FaBug />,
      color: "#EF4444",
      title: "2000+",
      text: "Bugs Reported & Verified",
    },
    {
      icon: <FaMobileAlt />,
      color: "#4DA3FF",
      title: "9+ Products",
      text: "Android, iOS & Web Applications",
    },
    {
      icon: <FaClipboardCheck />,
      color: "#22C55E",
      title: "QA Leadership",
      text: "Test Planning & Release Validation",
    },
    {
      icon: <FaCode />,
      color: "#A855F7",
      title: "API & Automation",
      text: "Playwright • Maestro • REST API",
    },
    {
      icon: <FaUsers />,
      color: "#06B6D4",
      title: "Agile Team",
      text: "Cross-functional Collaboration",
    },
    {
      icon: <FaRocket />,
      color: "#F97316",
      title: "Production Releases",
      text: "Multiple Successful Deployments",
    },
    {
      icon: <FaCheckCircle />,
      color: "#10B981",
      title: "Quality First",
      text: "Reliable, Scalable & User-focused Testing",
    },
  ];

  return (
    <section
      className="achievements section"
      data-aos="fade-up"
    >
      <div className="section-title">
        <h2>Professional Achievements</h2>
        <p>Highlights from my Quality Assurance journey</p>
      </div>

      <div className="achievement-grid">

        {achievements.map((item, index) => (

          <div
            className="achievement-card"
            key={index}
            data-aos="zoom-in"
            data-aos-delay={index * 60}
          >

            <div
              className="achievement-icon"
              style={{
                background: `${item.color}20`,
                color: item.color,
                border: `2px solid ${item.color}55`,
                boxShadow: `0 0 22px ${item.color}35`,
              }}
            >
              {item.icon}
            </div>

            <h3>{item.title}</h3>

            <p>{item.text}</p>

          </div>

        ))}

      </div>
    </section>
  );
}

export default Achievements;