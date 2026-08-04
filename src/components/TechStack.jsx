import "../styles/TechStack.css";

function TechStack() {
  const techs = [
    {
      name: "Jira",
      logo: "/tech/jira.png",
      badge: "Project Management",
      color: "#22C55E",
    },
    {
      name: "GitHub",
      logo: "/tech/github.png",
      badge: "Version Control",
      color: "#64748B",
    },
    {
      name: "Playwright",
      logo: "/tech/playwright.png",
      badge: "Automation",
      color: "#8B5CF6",
    },
    {
      name: "Maestro",
      logo: "/tech/maestro.png",
      badge: "Mobile Automation",
      color: "#A855F7",
    },
    {
      name: "BrowserStack",
      logo: "/tech/browserstack.png",
      badge: "Cloud Testing",
      color: "#F97316",
    },
    {
      name: "LambdaTest",
      logo: "/tech/lambdatest.png",
      badge: "Cross Browser",
      color: "#0EA5E9",
    },
    {
      name: "Firebase",
      logo: "/tech/firebase.png",
      badge: "Backend",
      color: "#F59E0B",
    },
    {
      name: "Postman",
      logo: "/tech/postman.png",
      badge: "API Testing",
      color: "#FB923C",
    },
    {
      name: "SQL",
      logo: "/tech/sql.png",
      badge: "Database",
      color: "#3B82F6",
    },
    {
      name: "Figma",
      logo: "/tech/figma.png",
      badge: "UI Review",
      color: "#EC4899",
    },
    {
      name: "ClickUp",
      logo: "/tech/clickup.png",
      badge: "Project Tracking",
      color: "#7C3AED",
    },
    {
      name: "Proxyman",
      logo: "/tech/proxyman.png",
      badge: "API Debugging",
      color: "#06B6D4",
    },

    {
      name: "Charles Proxy",
      logo: "/tech/charles.png",
      badge: "Web Debugging",
      color: "#318394",
    },

    {
      name: "K6",
      logo: "/tech/k6.png",
      badge: "Load Testing",
      color: "#7D64FF",
    },
  ];

  return (
    <section
      className="tech-stack section"
      data-aos="fade-up"
    >
      <div className="section-title">
        <h2>QA Testing Toolbox</h2>

        <p>
          Tools & Technologies I use to ensure software quality
        </p>
      </div>

      <div className="tech-grid">

        {techs.map((tech, index) => (

          <div
            className="tech-card"
            key={index}
            data-aos="zoom-in"
            data-aos-delay={index * 60}
          >

            <div className="tech-logo-wrapper">

              <img
                src={tech.logo}
                alt={tech.name}
              />

            </div>

            <h3>{tech.name}</h3>

            <span
              className="tech-badge"
              style={{
                background: `${tech.color}20`,
                color: tech.color,
                border: `1px solid ${tech.color}55`,
              }}
            >
              {tech.badge}
            </span>

          </div>

        ))}

      </div>

    </section>
  );
}

export default TechStack;