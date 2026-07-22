import "../styles/Navbar.css";

function Navbar() {
  return (
    <nav className="navbar">

      <div className="logo-container">

        <div className="logo">
          <a href="#home">Rackibur QA Engineer.</a>
        </div>

        <div className="brand-tagline">
          Breaking apps before users do 🐞
        </div>

        <div className="brand-subtag">
          Quality 🛡️ isn't a phase, it's a mindset.
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