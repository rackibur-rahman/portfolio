import "../styles/Experience.css";

function Experience() {

  const experiences = [
    {
      title: "QA Lead Engineer",
      company: "NanoSoftQA",
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
      title: "SQA Engineer",
      company: "NanoSoftQA",
      duration: "December 2024 – November 2025",
      points: [
        "Performed Manual, Mobile, Web, and API Testing.",
        "Created and executed test cases for new features.",
        "Performed smoke, sanity, and regression testing.",
        "Reported and tracked defects using Jira.",
        "Validated releases across Android, iOS, and Web.",
      ],
    },


    {
      title: "ICT Intervention Manager (QA)",
      company: "DABI Moulik Unnayan Sangstha",
      duration: "February 2022 – November 2024",
      points: [
        "Managed quality assurance activities for ICT solutions.",
        "Performed functional and user acceptance testing.",
        "Coordinated testing with cross-functional stakeholders.",
        "Verified software quality before production deployment.",
      ],
    },


    {
      title: "Executive Data Analyst (QA)",
      company: "Catalyst Solutions",
      duration: "February 2019 – December 2021",
      points: [
        "Performed enterprise-level data validation and quality assurance.",
        "Worked with large-scale datasets to verify accuracy, consistency, and reliability.",
        "Supported analytical workflows and quality improvement initiatives.",
        "Prepared data quality reports and collaborated with cross-functional teams.",
        "Contributed to projects supporting multinational enterprise clients.",
      ],

      clients: [
        "ExxonMobil",
        "Google",
        "JPMorgan Chase",
        "AMMEX",
        "Disney",
        "Kraft",
        "Levi's",
        "Target",
      ],
    },
  ];


  return (

    <section 
      className="experience section"
      data-aos="fade-up"
    >


      <div 
        className="section-title"
        data-aos="fade-up"
      >

        <h2>
          Experience
        </h2>

        <p>
          My Professional Journey
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


            <div className="timeline-dot"></div>



            <div className="timeline-content">


              <h3>
                {job.title}
              </h3>


              <h4>
                {job.company}
              </h4>


              <span className="duration">
                {job.duration}
              </span>



              <ul>

                {job.points.map((point, i) => (

                  <li key={i}>
                    {point}
                  </li>

                ))}

              </ul>




              {job.clients && (

                <div className="client-section">


                  <h5>
                    Selected Enterprise Clients
                  </h5>



                  <div className="client-badges">


                    {job.clients.map((client, i) => (

                      <span key={i}>
                        {client}
                      </span>

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