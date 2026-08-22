import "../styles/Experience.css";

import {
  FaArrowUp,
  FaCheck,
  FaCrown,
  FaSearch,
  FaChartLine,
  FaLaptopCode,
  FaBuilding,
  FaChartPie,
  FaCalendarAlt,
} from "react-icons/fa";

function Experience() {

  const experiences = [

    {
      type: "lead",
      companyClass: "nanosoft",
      current: true,

      title: "QA Lead Engineer",

      icon: <FaCrown />,

      companyIcon: <FaLaptopCode />,      

      company: "NanoSoftQA",


      promoted: "Promoted from SQA Engineer",

      duration: "November 2025 – Present",

      points: [
        "Leading end-to-end QA strategy for Web & Mobile applications.",
        "Managing test planning, regression testing, and release validation.",
        "Driving automation initiatives using Playwright and Maestro.",
        "Collaborating with Product Managers, Developers, and Designers.",
        "Mentoring QA engineers and improving QA processes.",
      ],
    },

    {
      type: "sqa",
      companyClass: "nanosoft",

      current: false,

      title: "SQA Engineer",

      icon: <FaSearch />,

      companyIcon: <FaLaptopCode />,

      company: "NanoSoftQA",


      duration: "December 2024 – November 2025",

      points: [
        "Performed Manual, Mobile, Web, and API Testing.",
        "Created and executed test cases for new features.",
        "Performed Smoke, Sanity, and Regression Testing.",
        "Reported and tracked defects using Jira.",
        "Validated releases across Android, iOS, and Web.",
      ],
    },

    {
      type: "manager",

      companyClass: "dabi",

      current: false,

      title: "ICT Intervention Manager (QA)",

      icon: <FaBuilding />,

      companyIcon: <FaBuilding />,

      company: "DABI Moulik Unnayan Sangstha",

      duration: "February 2022 – November 2024",

      points: [
        "Managed quality assurance activities for ICT solutions.",
        "Performed Functional and User Acceptance Testing.",
        "Coordinated testing with cross-functional stakeholders.",
        "Verified software quality before production deployment.",
      ],
    },

    {
      type: "analyst",

      companyClass: "catalyst",

      current: false,

      title: "Executive Data Analyst (QA)",

      icon: <FaChartLine />,

      companyIcon: <FaChartPie />,

      company: "Catalyst Solutions",

      duration: "February 2019 – December 2021",

      points: [
        "Performed enterprise-level data validation and quality assurance.",
        "Worked with large-scale datasets to verify accuracy and consistency.",
        "Supported analytical workflows and quality improvement initiatives.",
        "Prepared data quality reports and collaborated with cross-functional teams.",
        "Contributed to projects supporting multinational enterprise clients.",
      ],

      clients: [
        { name: "Google", logo: "/logos/google.png" },
        { name: "ExxonMobil", logo: "/logos/exxonmobil.png" },
        { name: "JPMorgan Chase", logo: "/logos/jpmorgan.png" },
        { name: "AMMEX", logo: "/logos/ammex.png" },
        { name: "Disney", logo: "/logos/disney.png" },
        { name: "Kraft", logo: "/logos/kraft.png" },
        { name: "Levi's", logo: "/logos/levis.png" },
        { name: "Target", logo: "/logos/target.png" },
        { name: "Coca-Cola", logo: "/logos/coke.png" },
        { name: "FedEx", logo: "/logos/fedex.png" },
        { name: "Nestlé", logo: "/logos/nestle.png" },
        { name: "Pfizer", logo: "/logos/pfizer.png" },
        { name: "Pfizer", logo: "/logos/waze.png" },
        { name: "Pfizer", logo: "/logos/lyft.png" },
      ],
    },

  ];

  return (

    <section
      className="experience section"
      data-aos="fade-up"
    >

      <div className="section-title">

        <h2>Experience</h2>

        <p>
          My professional journey in Software Quality Assurance.
        </p>

      </div>

      <div className="timeline">

{experiences.map((job, index) => (

          <div
            className="timeline-item"
            key={index}
            data-aos={index % 2 === 0 ? "fade-right" : "fade-left"}
            data-aos-delay={index * 150}
          >

            <div className={`timeline-dot ${job.companyClass}`}></div>

            <div className={`timeline-content ${job.companyClass}`}>

              {/* Header */}

              <div className="job-header">

                <div className="job-title-wrap">

                  <h3 className={`job-title ${job.type}`}>

                    <span className={`job-icon ${job.type}`}>
                      {job.icon}
                    </span>

                    {job.title}

                  </h3>

                  {job.current ? (

                    <span className="status-badge current">
                      CURRENT
                    </span>

                  ) : (

                    <span className="status-badge previous">
                      PREVIOUS
                    </span>

                  )}

                </div>

              </div>

              {/* Company */}

              <h4 className={`company-name ${job.type}`}>

                <span className="company-icon">
                  {job.companyIcon}
                </span>

                {job.company}

              </h4>

              {/* Promotion */}

              {job.promoted && (

                <p className="promotion-note">

                  <span className="promotion-icon">
                    <FaArrowUp />
                  </span>

                  {job.promoted}

                </p>

              )}

              {/* Duration */}

              <div className="duration">

                <FaCalendarAlt />

                {job.duration}

              </div>

              {/* Responsibilities */}

              <ul className="experience-list">

                {job.points.map((point, i) => (

                  <li key={i}>

                    <span className="check-icon">

                      <FaCheck />

                    </span>

                    <span>{point}</span>

                  </li>

                ))}

              </ul>

              {/* Enterprise Clients */}

              {job.clients && (

                <div className="client-section">

                  <h5>
                    🌍 Enterprise Clients Worked With
                  </h5>

                  <div className="client-logos">

                    {job.clients.map((client, i) => (

                      <div
                        className="client-logo-card"
                        key={i}
                        title={client.name}
                      >

                        <img
                          src={client.logo}
                          alt={client.name}
                          className="client-logo"
                        />

                      </div>

                    ))}

                  </div>

                </div>

              )}

            </div>

          </div>

        ))}

      </div>

    </section>

  );

}

export default Experience;