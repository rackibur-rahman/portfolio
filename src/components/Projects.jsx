import "../styles/Projects.css";


function Projects() {


  const nanoSoftProjects = [
    {
      name: "Hypelist",
      role: "QA Lead Engineer",
      platform: "Android • iOS • Web",
      description:
        "Social discovery platform focused on creating, sharing, and exploring curated lists and recommendations.",
      testing: [
        "Manual Testing",
        "API Testing",
        "Regression Testing",
        "Performance Testing",
        "Release Validation",
      ],
      tools: [
        "Jira",
        "BrowserStack",
        "LambdaTest",
        "Firebase",
        "GitHub",
      ],
    },

    {
      name: "ProMom",
      role: "QA Lead Engineer",
      platform: "iOS",
      description:
        "Healthcare application designed to support mothers through personalized features and notifications.",
      testing: [
        "Functional Testing",
        "API Testing",
        "Notification Testing",
        "Regression Testing",
      ],
      tools: [
        "Jira",
        "Firebase",
        "CleverTap",
      ],
    },


    {
      name: "Wishew",
      role: "QA Lead Engineer",
      platform: "Android • iOS • Web",
      description:
        "Social networking application focused on user interaction and community experiences.",
      testing: [
        "Manual Testing",
        "API Testing",
        "Automation Testing",
        "Regression Testing",
      ],
      tools: [
        "Maestro",
        "Jira",
        "BrowserStack",
        "LambdaTest",
      ],
    },


    {
      name: "Dwelzi",
      role: "QA Lead Engineer",
      platform: "Android • iOS • Web",
      description:
        "Hotel booking platform with reservation and payment workflows.",
      testing: [
        "Functional Testing",
        "Booking Flow Testing",
        "Payment Testing",
        "Regression Testing",
      ],
      tools: [
        "Jira",
        "BrowserStack",
        "LambdaTest",
      ],
    },


    {
      name: "Cosmos",
      role: "QA Lead Engineer",
      platform: "Android • iOS • Web",
      description:
        "Creative discovery platform that helps users search, collect, organize, and share inspiration.",
      testing: [
        "Functional Testing",
        "Mobile Testing",
        "Web Testing",
        "API Testing",
        "Regression Testing",
      ],
      tools: [
        "Jira",
        "BrowserStack",
        "LambdaTest",
        "GitHub",
      ],
    },


    {
      name: "Unfold",
      role: "QA Lead Engineer",
      platform: "Android • iOS",
      description:
        "Mobile application focused on creative user experiences and content creation.",
      testing: [
        "Functional Testing",
        "API Testing",
        "Regression Testing",
      ],
      tools: [
        "Jira",
        "BrowserStack",
        "LambdaTest",
      ],
    },
  ];



  const dabiProjects = [
    {
      name: "Shudokkho",
      role: "SQA Engineer",
      platform: "Android",
      description:
        "Skills development and learning platform for users.",
      testing: [
        "Functional Testing",
        "User Acceptance Testing",
        "Release Validation",
      ],
      tools: [
        "Jira",
        "BrowserStack",
        "LambdaTest",
      ],
    },


    {
      name: "Khamarbondhu",
      role: "SQA Engineer",
      platform: "Android",
      description:
        "Agriculture-focused application providing digital farming services.",
      testing: [
        "Functional Testing",
        "Regression Testing",
        "UAT",
      ],
      tools: [
        "Jira",
        "BrowserStack",
        "LambdaTest",
      ],
    },


    {
      name: "Gobadi E-Haat",
      role: "SQA Engineer",
      platform: "Android",
      description:
        "Digital livestock marketplace connecting buyers and sellers.",
      testing: [
        "Functional Testing",
        "API Testing",
        "Regression Testing",
      ],
      tools: [
        "Jira",
        "BrowserStack",
        "LambdaTest",
      ],
    },
  ];



  const renderProjects = (projects) => (

    <div 
      className="projects-grid"
      data-aos="fade-up"
    >

      {projects.map((project, index) => (

        <div
          className="project-card"
          key={index}
          data-aos="zoom-in"
          data-aos-delay={index * 100}
        >


          <h3>
            {project.name}
          </h3>


          <span className="platform">
            📱 {project.platform}
          </span>


          <span className="role">
            👤 {project.role}
          </span>


          <p>
            {project.description}
          </p>



          <h4>
            Testing
          </h4>


          <div className="badges">

            {project.testing.map((item, i) => (

              <span key={i}>
                {item}
              </span>

            ))}

          </div>



          <h4>
            Tools
          </h4>


          <div className="badges tools">

            {project.tools.map((item, i) => (

              <span key={i}>
                {item}
              </span>

            ))}

          </div>


        </div>

      ))}


    </div>

  );



  return (

    <section 
      className="projects section"
      data-aos="fade-up"
    >


      <div 
        className="section-title"
        data-aos="fade-up"
      >

        <h2>
          Featured Projects
        </h2>

        <p>
          Products I have tested and contributed to
        </p>

      </div>



      <h3 
        className="company-title"
        data-aos="fade-right"
      >
        🏢 NanoSoftQA
      </h3>


      {renderProjects(nanoSoftProjects)}



      <h3 
        className="company-title"
        data-aos="fade-right"
        data-aos-delay="200"
      >
        🏢 DABI Moulik Unnayan Sangstha
      </h3>


      {renderProjects(dabiProjects)}


    </section>

  );

}


export default Projects;