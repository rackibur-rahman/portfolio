import "../styles/TechStack.css";

function TechStack() {
  const techs = [
    { name: "Jira", logo: "/tech/jira.png" },
    { name: "GitHub", logo: "/tech/github.png" },
    { name: "Playwright", logo: "/tech/playwright.png" },
    { name: "Maestro", logo: "/tech/maestro.png" },
    { name: "BrowserStack", logo: "/tech/browserstack.png" },
    { name: "LambdaTest", logo: "/tech/lambdatest.png" },
    { name: "Firebase", logo: "/tech/firebase.png" },
    { name: "Postman", logo: "/tech/postman.png" },
    { name: "SQL", logo: "/tech/sql.png" },
    { name: "Figma", logo: "/tech/figma.png" },
    { name: "ClickUp", logo: "/tech/clickup.png" },
    { name: "Proxyman", logo: "/tech/proxyman.png" },
  ];

  return (
    <section className="tech-stack section" data-aos="fade-up">
      <div className="section-title">
        <h2>Tech Stack</h2>
        <p>Tools & Technologies I use for Quality Assurance</p>
      </div>

      <div className="tech-grid">
        {techs.map((tech, index) => (
          <div
            className="tech-card"
            key={index}
            data-aos="zoom-in"
            data-aos-delay={index * 70}
          >
            <img src={tech.logo} alt={tech.name} />
            <span>{tech.name}</span>
          </div>
        ))}
      </div>
    </section>
  );
}

export default TechStack;