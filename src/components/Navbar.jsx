import { Link, useLocation } from "react-router-dom";
import "../styles/Navbar.css";

function Navbar() {
  const location = useLocation();

  const isHomePage = location.pathname === "/";

  const handleHomeNavigation = (section) => {
    if (isHomePage) {
      document.getElementById(section)?.scrollIntoView({
        behavior: "smooth",
      });
    }
  };

  return (
    <nav className="navbar">
      <div className="logo-container">
        <div className="logo-brand">
          <img
            src="/favicon.png"
            alt="Rackibur QA Logo"
            className="logo-icon"
          />

          <h1 className="logo-text">QA Specialist.</h1>
        </div>

        <div className="brand-tagline">
          🛡️ Quality Engineered. Confidence Delivered.
        </div>

        <div className="brand-subtag">
          Every release leaves my name on it ⭐
        </div>
      </div>

      <ul className="nav-links">
        <li>
          <Link to="/">Home</Link>
        </li>

        <li>
          <Link
            to="/#about"
            onClick={() => handleHomeNavigation("about")}
          >
            About
          </Link>
        </li>

        <li>
          <Link
            to="/#skills"
            onClick={() => handleHomeNavigation("skills")}
          >
            Skills
          </Link>
        </li>

        <li>
          <Link
            to="/#experience"
            onClick={() => handleHomeNavigation("experience")}
          >
            Experience
          </Link>
        </li>

        <li>
          <Link
            to="/#projects"
            onClick={() => handleHomeNavigation("projects")}
          >
            Projects
          </Link>
        </li>

        <li>
          <Link
            to="/#case-studies"
            onClick={() => handleHomeNavigation("case-studies")}
          >
            Case Studies
          </Link>
        </li>

        <li>
          <Link to="/blog" className="blog-nav-link">
            Blog
          </Link>
        </li>

        <li>
          <Link
            to="/#contact"
            onClick={() => handleHomeNavigation("contact")}
          >
            Contact
          </Link>
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