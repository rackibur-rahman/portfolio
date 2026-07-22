import "../styles/Contact.css";

import {
  FaEnvelope,
  FaLinkedin,
  FaGithub,
  FaFileDownload,
} from "react-icons/fa";


function Contact() {

  return (

    <section 
      className="contact"
      data-aos="fade-up"
    >


      <div className="contact-container">


        <h2 
          data-aos="fade-down"
        >
          Let's Connect
        </h2>



        <p 
          className="contact-description"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          I'm open to discussing QA Leadership, Mobile Testing,
          Automation Testing, and Quality Engineering opportunities.
        </p>




        <div 
          className="contact-links"
          data-aos="zoom-in"
          data-aos-delay="300"
        >


          <a href="mailto:rackibur.rahman@gmail.com">

            <FaEnvelope />

            Email

          </a>




          <a
            href="https://www.linkedin.com/in/rackibur-rahman/"
            target="_blank"
            rel="noopener noreferrer"
          >

            <FaLinkedin />

            LinkedIn

          </a>




          <a
            href="https://github.com/rackibur-rahman"
            target="_blank"
            rel="noopener noreferrer"
          >

            <FaGithub />

            GitHub

          </a>


        </div>





        <a
          href="/Rackibur_Rahman_Resume.pdf"
          download
          className="resume-btn"
          data-aos="fade-up"
          data-aos-delay="400"
        >

          <FaFileDownload />

          Download Resume

        </a>



      </div>


    </section>

  );

}


export default Contact;