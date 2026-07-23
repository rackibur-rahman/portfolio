import "../styles/Stats.css";

import {
  FaMobileAlt,
} from "react-icons/fa";


function Stats() {

  return (

    <section 
      className="stats"
      data-aos="fade-up"
    >

      <div className="stats-container">


        <div 
          className="stat-card"
          data-aos="zoom-in"
          data-aos-delay="100"
        >

          <h2>
            6+
          </h2>

          <p>
            Years Experience
          </p>

        </div>



        <div 
          className="stat-card"
          data-aos="zoom-in"
          data-aos-delay="200"
        >

          <h2>
            9+
          </h2>

          <p>
            Products Delivered
          </p>

        </div>



        <div 
          className="stat-card"
          data-aos="zoom-in"
          data-aos-delay="300"
        >

          <h2>
            1000+
          </h2>

          <p>
            Bugs Reported
          </p>

        </div>




        <div 
          className="stat-card"
          data-aos="zoom-in"
          data-aos-delay="400"
        >

          <div className="platform-icon">

            <FaMobileAlt />

          </div>



          <div className="platform-badges">

            <span>
              Android
            </span>

            <span>
              iOS
            </span>

            <span>
              Web
            </span>

          </div>



          <p>
            Platform Coverage
          </p>


        </div>


      </div>


    </section>

  );

}


export default Stats;