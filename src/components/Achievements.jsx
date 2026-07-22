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
      title: "6+ Years",
      text: "Software Quality Assurance Experience",
    },
    {
      icon: <FaBug />,
      title: "1000+",
      text: "Bugs Reported & Verified",
    },
    {
      icon: <FaMobileAlt />,
      title: "9+ Products",
      text: "Android, iOS & Web Applications",
    },
    {
      icon: <FaClipboardCheck />,
      title: "QA Leadership",
      text: "Test Planning & Release Validation",
    },
    {
      icon: <FaCode />,
      title: "API & Automation",
      text: "Playwright • Maestro • REST API",
    },
    {
      icon: <FaUsers />,
      title: "Agile Team",
      text: "Cross-functional Collaboration",
    },
    {
      icon: <FaRocket />,
      title: "Production Releases",
      text: "Multiple Successful Deployments",
    },
    {
      icon: <FaCheckCircle />,
      title: "Quality First",
      text: "Reliable, Scalable & User-focused Testing",
    },
  ];

  return (
    <section className="achievements section" data-aos="fade-up">

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
            data-aos-delay={index * 80}
          >

            <div className="achievement-icon">
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