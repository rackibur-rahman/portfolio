import "../styles/Projects.css";
import {
  FaGlobe,
  FaGooglePlay,
  FaApple,
} from "react-icons/fa";

const nanoSoftProjects = [
  {
    name: "Hypelist",
    icon: "/icons/hypelist.png",
    role: "QA Lead Engineer",
    platform: ["Android", "iOS", "Web"],
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
    website: "https://app.hypelist.com/login",
    playstore:
      "https://play.google.com/store/apps/details?id=com.hypelist&hl=en",
    appstore:
      "https://apps.apple.com/us/app/hypelist-create-share-lists/id1636503066",
  },

  {
    name: "Wishew",
    icon: "/icons/wishew.png",
    role: "QA Lead Engineer",
    platform: ["Android", "iOS", "Web"],
    description:
      "Social networking platform designed around community engagement and user interaction.",
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
    website: "https://wishew.com/",
    playstore:
      "https://play.google.com/store/apps/details?id=com.wishew.app&hl=en",
    appstore:
      "https://apps.apple.com/us/app/wishew/id6499011917",
  },

  {
    name: "ProMom",
    icon: "/icons/promom.png",
    role: "QA Lead Engineer",
    platform: ["iOS"],
    description:
      "Healthcare application supporting mothers through personalized pregnancy and fertility features.",
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
    website: "https://www.promom.ai/",
    appstore:
      "https://apps.apple.com/us/app/promom-fertility-pregnancy/id6479176215",
  },

  {
    name: "Dwelzi",
    icon: "/icons/dwelzi.png",
    role: "QA Lead Engineer",
    platform: ["Android", "iOS", "Web"],
    description:
      "Hotel booking platform supporting reservations, payments, and property management workflows.",
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
    website: "https://dwelzi.com/",
    playstore:
      "https://play.google.com/store/apps/details?id=com.dwelzi&hl=en",
    appstore:
      "https://apps.apple.com/ca/app/dwelzi-tenant/id6740871222",
  },

  {
    name: "Cosmos",
    icon: "/icons/cosmos.png",
    role: "QA Lead Engineer",
    platform: ["Android", "iOS", "Web"],
    description:
      "Creative discovery platform helping users search, collect, organize, and share inspiration.",
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
    website: "https://www.cosmos.so/",
    playstore:
      "https://play.google.com/store/apps/details?id=so.cosmos.www&hl=en",
    appstore:
      "https://apps.apple.com/us/app/cosmos-search-discover/id1577975475",
  },

  {
    name: "Unfold",
    icon: "/icons/unfold.png",
    role: "SQA Engineer",
    platform: ["Android", "iOS"],
    description:
      "Creative content creation platform focused on stories, reels, and visual content.",
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
    website: "https://unfold.com/",
    playstore:
      "https://play.google.com/store/apps/details?id=com.moonlab.unfold&hl=en",
    appstore:
      "https://apps.apple.com/us/app/unfold-reels-story-maker/id1247275033",
  },

  {
    name: "Shudokkho",
    icon: "/icons/shudokkho.png",
    role: "SQA Engineer",
    platform: ["Android"],
    description:
      "Skills development platform designed to improve learning and workforce capabilities.",
    testing: [
      "Functional Testing",
      "UAT",
      "Release Validation",
    ],
    tools: [
      "Jira",
      "BrowserStack",
      "LambdaTest",
    ],
    playstore:
      "https://play.google.com/store/apps/details?id=com.mpower.android.app.lpin.crm&hl=en",
  },

  {
    name: "Khamarbondhu",
    icon: "/icons/khamarbondhu.png",
    role: "SQA Engineer",
    platform: ["Android"],
    description:
      "Agriculture-focused mobile application providing smart farming services.",
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
    playstore:
      "https://play.google.com/store/apps/details?id=com.mpower.app.mdairy&hl=bn",
  },

  {
    name: "Gobadi E-Haat",
    icon: "/icons/gobadi.png",
    role: "SQA Engineer",
    platform: ["Web"],
    description:
      "Digital livestock marketplace connecting buyers and sellers across Bangladesh.",
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
    website:
      "https://gobadi-ehaat.com/",
  },
];

// const dabiProjects = [
//   {
//     name: "Shudokkho",
//     icon: "/icons/shudokkho.png",
//     role: "SQA Engineer",
//     platform: ["Android"],
//     description:
//       "Skills development platform designed to improve learning and workforce capabilities.",
//     testing: [
//       "Functional Testing",
//       "UAT",
//       "Release Validation",
//     ],
//     tools: [
//       "Jira",
//       "BrowserStack",
//       "LambdaTest",
//     ],
//     playstore:
//       "https://play.google.com/store/apps/details?id=com.mpower.android.app.lpin.crm&hl=en",
//   },

//   {
//     name: "Khamarbondhu",
//     icon: "/icons/khamarbondhu.png",
//     role: "SQA Engineer",
//     platform: ["Android"],
//     description:
//       "Agriculture-focused mobile application providing smart farming services.",
//     testing: [
//       "Functional Testing",
//       "Regression Testing",
//       "UAT",
//     ],
//     tools: [
//       "Jira",
//       "BrowserStack",
//       "LambdaTest",
//     ],
//     playstore:
//       "https://play.google.com/store/apps/details?id=com.mpower.app.mdairy&hl=bn",
//   },

//   {
//     name: "Gobadi E-Haat",
//     icon: "/icons/gobadi.png",
//     role: "SQA Engineer",
//     platform: ["Web"],
//     description:
//       "Digital livestock marketplace connecting buyers and sellers across Bangladesh.",
//     testing: [
//       "Functional Testing",
//       "API Testing",
//       "Regression Testing",
//     ],
//     tools: [
//       "Jira",
//       "BrowserStack",
//       "LambdaTest",
//     ],
//     website:
//       "https://gobadi-ehaat.com/",
//   },
// ];

function Projects() {

  const renderProjects = (projects) => (
    <div className="projects-grid">

      {projects.map((project, index) => (

        <div
          className="project-card"
          key={index}
          data-aos="fade-up"
          data-aos-delay={index * 100}
        >

          {/* Header */}

          <div className="project-header">

            <img
              src={project.icon}
              alt={project.name}
              className="project-logo"
            />

            <div>

              <h3>{project.name}</h3>

              <span className="role">
                👨‍💻 {project.role}
              </span>

            </div>

          </div>


          {/* Platform */}

          <div className="platform-badges">

            {project.platform.map((item, i) => (
              <span key={i}>
                {item}
              </span>
            ))}

          </div>


          {/* Description */}

          <p className="project-description">
            {project.description}
          </p>


          {/* Testing */}

          <h4>Testing</h4>

          <div className="badges">

            {project.testing.map((item, i) => (
              <span key={i}>{item}</span>
            ))}

          </div>


          {/* Tools */}

          <h4>Tools</h4>

          <div className="badges tools">

            {project.tools.map((item, i) => (
              <span key={i}>{item}</span>
            ))}

          </div>


          {/* Links */}

          <div className="project-links">

            {project.website && (
              <a
                href={project.website}
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaGlobe />
                Website
              </a>
            )}

            {project.playstore && (
              <a
                href={project.playstore}
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaGooglePlay />
                Play Store
              </a>
            )}

            {project.appstore && (
              <a
                href={project.appstore}
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaApple />
                App Store
              </a>
            )}

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

      <div className="section-title">

        <h2>Featured Projects</h2>

        <p>
          Selected products where I contributed to quality assurance,
          release validation, and testing across mobile, web, and API
          platforms.
        </p>

      </div>


      {/* <h3 className="company-title">
        🏢 NanoSoftQA
      </h3> */}

      {renderProjects(nanoSoftProjects)}


      {/* <h3 className="company-title">
        🏢 DABI Moulik Unnayan Sangstha
      </h3> */}

      {/* {renderProjects(dabiProjects)} */}

    </section>

  );
}

export default Projects;