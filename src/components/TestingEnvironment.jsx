import "../styles/TestingEnvironment.css";

import {
  FaAndroid,
  FaApple,
  FaCloud,
} from "react-icons/fa";

function TestingEnvironment() {

  return (

    <section
      className="testing-environment section"
      data-aos="fade-up"
    >

      <div className="section-title">

        <h2>Testing Environment</h2>

        <p>
          Real devices, cloud testing platforms and environments used
          to ensure consistent software quality across Android, iOS
          and Web applications.
        </p>

      </div>

      <div className="testing-grid">

        {/* Android */}

        <div
          className="env-card android"
          data-aos="fade-up"
        >

          <div className="env-header">

            <div className="env-icon android">
              <FaAndroid />
            </div>

            <div>

              <h3>Android Devices</h3>

              <span>
                Android Real Device Testing
              </span>

            </div>

          </div>

          <div className="device-grid">

            <div className="device-card oppo">
              <div className="device-icon">
                <FaAndroid />
              </div>
              Oppo Reno 8 5G
            </div>

            <div className="device-card samsung">
              <div className="device-icon">
                <FaAndroid />
              </div>
              Samsung Galaxy A52 5G
            </div>

            <div className="device-card pixel">
              <div className="device-icon">
                <FaAndroid />
              </div>
              Google Pixel 6
            </div>

            <div className="device-card redmi">
              <div className="device-icon">
                <FaAndroid />
              </div>
              Redmi 8
            </div>

            <div className="device-card nokia">
              <div className="device-icon">
                <FaAndroid />
              </div>
              Nokia 1
            </div>

          </div>

        </div>

        {/* iOS */}

        <div
          className="env-card ios"
          data-aos="fade-up"
          data-aos-delay="100"
        >

          <div className="env-header">

            <div className="env-icon ios">
              <FaApple />
            </div>

            <div>

              <h3>Apple Devices</h3>

              <span>
                iPhone / iOS Real Device Testing
              </span>

            </div>

          </div>

          <div className="device-grid">

            <div className="device-card iphone">
              <div className="device-icon">
                <FaApple />
              </div>
              iPhone 16 Pro Max
            </div>

            <div className="device-card iphone">
              <div className="device-icon">
                <FaApple />
              </div>
              iPhone 14
            </div>

            <div className="device-card iphone">
              <div className="device-icon">
                <FaApple />
              </div>
              iPhone 12
            </div>

            <div className="device-card iphone">
              <div className="device-icon">
                <FaApple />
              </div>
              iPhone XR
            </div>

          </div>

        </div>

        {/* Cloud */}

        <div
          className="env-card cloud"
          data-aos="fade-up"
          data-aos-delay="200"
        >

          <div className="env-header">

            <div className="env-icon cloud">
              <FaCloud />
            </div>

            <div>

              <h3>Cloud Device Labs</h3>

              <span>
                Cross Device Validation
              </span>

            </div>

          </div>

          <div className="device-grid">

            <div className="device-card browserstack">

              <div className="device-icon">

                <img
                  src="/tech/browserstack.png"
                  alt="BrowserStack"
                />

              </div>

              BrowserStack

            </div>

            <div className="device-card lambda">

              <div className="device-icon">

                <img
                  src="/tech/lambdatest.png"
                  alt="LambdaTest"
                />

              </div>

              LambdaTest

            </div>

          </div>

        </div>

      </div>

    </section>

  );

}

export default TestingEnvironment;