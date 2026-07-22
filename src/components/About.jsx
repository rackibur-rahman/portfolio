import "../styles/About.css";

function About() {
  return (
    <section className="about section">

      <div className="section-title">
        <h2>About Me</h2>
        <p>Get to know me</p>
      </div>

      <div className="about-container">

        <div className="about-text">

          <h3>QA Lead Engineer</h3>

          <p>
            I am a QA Lead Engineer with over 6 years of experience in Software
            Quality Assurance, specializing in Mobile Applications, Web
            Applications, API Testing, and Test Automation.
          </p>

          <p>
            I have experience leading QA activities throughout the software
            development lifecycle, including test planning, test execution,
            regression testing, bug reporting, release validation, and Agile
            collaboration.
          </p>

          <p>
            My goal is to build reliable, scalable, and high-quality software
            that delivers the best possible experience to users.
          </p>

        </div>

        <div className="about-cards">

          <div className="about-card">
            <h3>6+</h3>
            <span>Years Experience</span>
          </div>

          <div className="about-card">
            <h3>Mobile</h3>
            <span>Android & iOS Testing</span>
          </div>

          <div className="about-card">
            <h3>API</h3>
            <span>REST API Testing</span>
          </div>

          <div className="about-card">
            <h3>Automation</h3>
            <span>Playwright & Maestro</span>
          </div>

        </div>

      </div>

    </section>
  );
}

export default About;