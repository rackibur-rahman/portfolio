import "../styles/Stats.css";

import AnimatedCounter from "./AnimatedCounter";

import {
  FaClock,
  FaRocket,
  FaBug,
  FaMobileAlt,
} from "react-icons/fa";

function Stats() {
  return (
    <section
      className="stats"
      data-aos="fade-up"
    >
      <div className="stats-container">

        {/* Experience */}

        <div
          className="stat-card experience-card"
          data-aos="zoom-in"
          data-aos-delay="100"
        >
          <div className="stat-icon">
            <FaClock />
          </div>

          <h2>
            <AnimatedCounter
              end={6}
              suffix="+"
              duration={1800}
            />
          </h2>

          <p>Years Experience</p>
        </div>

        {/* Products */}

        <div
          className="stat-card products-card"
          data-aos="zoom-in"
          data-aos-delay="200"
        >
          <div className="stat-icon">
            <FaRocket />
          </div>

          <h2>
            <AnimatedCounter
              end={9}
              suffix="+"
              duration={1800}
            />
          </h2>

          <p>Products Delivered</p>
        </div>

        {/* Bugs */}

        <div
          className="stat-card bugs-card"
          data-aos="zoom-in"
          data-aos-delay="300"
        >
          <div className="stat-icon">
            <FaBug />
          </div>

          <h2>
            <AnimatedCounter
              end={2000}
              suffix="+"
              duration={2500}
            />
          </h2>

          <p>Bugs Reported</p>
        </div>

        {/* Platform */}

        <div
          className="stat-card platform-card"
          data-aos="zoom-in"
          data-aos-delay="400"
        >
          <div className="platform-icon">
            <FaMobileAlt />
          </div>

          <div className="platform-badges">
            <span>Android</span>
            <span>iOS</span>
            <span>Web</span>
            <span>Desktop</span>
          </div>

          <p>Platform Coverage</p>
        </div>

      </div>
    </section>
  );
}

export default Stats;