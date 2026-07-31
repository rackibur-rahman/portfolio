import "../styles/Navbar.css";

function Navbar() {
  return (
    <nav className="navbar">

      <div className="logo-container">

        <div className="logo-brand">
          <img
            src="/favicon.png"
            alt="Rackibur QA Logo"
            className="logo-icon"
          />

          <h1 className="logo-text">
            QA Specialist.
          </h1>
        </div>

        <div className="brand-tagline">
          🛡️ Quality isn't a phase, it's a mindset.
        </div>

        <div className="brand-subtag">
          Breaking apps before users do 🐞
        </div>

      </div>


      <ul className="nav-links">

        <li>
          <a href="#home">Home</a>
        </li>

        <li>
          <a href="#about">About</a>
        </li>

        <li>
          <a href="#skills">Skills</a>
        </li>

        <li>
          <a href="#experience">Experience</a>
        </li>

        <li>
          <a href="#projects">Projects</a>
        </li>

        <li>
          <a href="#contact">Contact</a>
        </li>

      </ul>


      <a
        href="/Rackibur_Rahman_Resume.pdf"
        download
        className="resume-btn"
      >
        Resume
      </a>

    </nav>
  );
}

export default Navbar;