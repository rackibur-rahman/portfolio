import "../styles/CaseStudies.css";
import {
  FaBug,
  FaSearch,
  FaBell,
  FaMobileAlt,
} from "react-icons/fa";

function CaseStudies() {
  const studies = [
    {
      icon: <FaSearch />,
      title: "Search Function Validation",
      project: "Social Platform",
      description:
        "Validated search functionality across multiple user profiles, ensuring accurate results, filtering behavior, and consistent user experience.",
      skills: [
        "Functional Testing",
        "Regression Testing",
        "Edge Case Validation",
      ],
    },

    {
      icon: <FaBug />,
      title: "Payment Flow Testing",
      project: "Hotel Booking Platform",
      description:
        "Verified reservation, payment workflow, and booking confirmation across different user scenarios before production releases.",
      skills: [
        "End-to-End Testing",
        "API Validation",
        "Regression Testing",
      ],
    },

    {
      icon: <FaBell />,
      title: "Push Notification Verification",
      project: "Healthcare Application",
      description:
        "Tested notification delivery, scheduling, deep links, and timezone behavior across iOS devices.",
      skills: [
        "Notification Testing",
        "iOS Testing",
        "API Testing",
      ],
    },

    {
      icon: <FaMobileAlt />,
      title: "Cross-Platform Release Validation",
      project: "Android • iOS • Web",
      description:
        "Performed smoke, sanity, regression, and production readiness validation before major releases.",
      skills: [
        "Release Validation",
        "Smoke Testing",
        "Regression Testing",
      ],
    },

    {
    icon: <FaSearch />,
    title: "AI Search & Recommendation Validation",
    project: "Hypelist",
    description:
        "Performed end-to-end quality assurance for AI-driven search and recommendation features by validating relevance, ranking consistency, exact and partial keyword matching, typo tolerance, personalized recommendations, and cross-platform behavior across Android, iOS, and Web.",
    skills: [
        "AI Feature Testing",
        "Search Validation",
        "Recommendation Testing",
    ],
    },
  ];

  return (
    <section className="case-studies section" data-aos="fade-up">

      <div className="section-title">
        <h2>QA Case Studies</h2>
        <p>Examples of testing scenarios and quality assurance contributions</p>
      </div>

      <div className="case-grid">

        {studies.map((item, index) => (

          <div
            className="case-card"
            key={index}
            data-aos="zoom-in"
            data-aos-delay={index * 100}
          >

            <div className="case-icon">
              {item.icon}
            </div>

            <h3>{item.title}</h3>

            <span>{item.project}</span>

            <p>{item.description}</p>

            <div className="case-tags">

              {item.skills.map((skill, i) => (
                <label key={i}>{skill}</label>
              ))}

            </div>

          </div>

        ))}

      </div>

    </section>
  );
}

export default CaseStudies;