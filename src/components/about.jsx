import "./about.css";

// images import
import ic1 from "../assets/about-assets/ic1.png";
import ic2 from "../assets/about-assets/ic2.png";
import ic3 from "../assets/about-assets/ic3.png";
import rarrow from "../assets/about-assets/rarrow.png";
import roundarrow from "../assets/about-assets/roundarrow.png";

import CountUp from "../animations/count";

function About() {
  return (
    <>
      {/* major twobox about section */}
      <section className="about" id="about">
        <div className="container-set">
          <div className="row">
            <div
              className="col-lg-6"
              data-aos="fade-up"
              data-aos-duration="1200"
              data-aos-easing="ease"
            >
              <div className="card-1">
                <h3
                  className="fs-1 outfit"
                  data-aos-duration="1200"
                  data-aos-delay="200"
                  data-aos="fade-up"
                >
                  COMPLETE CATERING SERVICE
                </h3>
                <div className="icons-grp d-flex gap-2 align-items-center mt-5">
                  <div className="icon1">
                    <img
                      src={ic1}
                      alt=""
                      data-aos-duration="1200"
                      data-aos-delay="205"
                      data-aos="fade-up"
                    />
                    <p
                      className="w-75 outfit"
                      data-aos-duration="1200"
                      data-aos-delay="205"
                      data-aos="fade-up"
                    >
                      Trained Service Staff
                    </p>
                  </div>
                  <div className="icon1">
                    <img
                      src={ic2}
                      alt=""
                      data-aos-duration="1200"
                      data-aos-delay="208"
                      data-aos="fade-up"
                    />
                    <p
                      className="w-75 outfit"
                      data-aos-duration="1200"
                      data-aos-delay="208"
                      data-aos="fade-up"
                    >
                      Freshly Cooked Food
                    </p>
                  </div>
                  <div className="icon1">
                    <img
                      src={ic3}
                      alt=""
                      data-aos-duration="1200"
                      data-aos-delay="210"
                      data-aos="fade-up"
                    />
                    <p
                      className="w-75 outfit"
                      data-aos-duration="1200"
                      data-aos-delay="210"
                      data-aos="fade-up"
                    >
                      Hassle-Free Execution
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div
              className="col-lg-6"
              data-aos="fade-up"
              data-aos-duration="1200"
              data-aos-easing="ease"
            >
              
            <div className="card-2">
                <h3
                  className="outfit fs-1"
                  data-aos-duration="1200"
                  data-aos-delay="204"
                  data-aos="fade-up"
                >
                  CRAVING WEDDING STYLE BIRYANI?
                </h3>
                <p
                  className="outfit fw-lighter fs-5 w-50"
                  data-aos-duration="1200"
                  data-aos-delay="208"
                  data-aos="fade-up"
                >
                  Authentic wedding style biriyani for family and group orders
                </p>
                <div
                  className="btn-grp mt-2"
                  data-aos-duration="1200"
                  data-aos-delay="210"
                  data-aos="fade-up"
                >
                  <h4 className="outfit">ORDER BUCKET BIRYANI</h4>
                  <img src={rarrow} alt="" />
                </div>
            </div>
            
            </div>
          </div>
        </div>
      </section>

      {/* about content */}
      <div className="about-content">
        <div className="container-set">
          <div className="row">
            <div className="col-md-6">
              <h3
                className="outfit fs-2 fw-medium w-80"
                data-aos="fade-up"
                data-aos-delay="190"
                data-aos-duration="1200"
                data-aos-easing="ease"
              >
                Crafting Memorable Events with Authentic Flavours & Professional
                Catering
              </h3>
            </div>
            <div className="col-md-6">
              <p
                data-aos="fade-up"
                data-aos-delay="190"
                data-aos-duration="1200"
                data-aos-easing="ease"
              >
                With years of experience in wedding catering, corporate events,
                & customised menus, we focus on quality ingredients, seamless
                execution, and customer satisfaction making every event a
                memorable experience.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* about numbers section */}
      <section className="py-5 about-numbers">
        <div className="container-set">
          <div className="about-numbers-wrapper">
            <div className="d-flex numbers">
              <div className="num">
                <div>
                  <h4
                    className="outfit fs-2 text-center"
                    data-aos="fade-up"
                    data-aos-delay="160"
                    data-aos-duration="1200"
                    data-aos-easing="ease"
                  >
                    <CountUp
                      from={850}
                      to={1000}
                      separator=","
                      direction="up"
                      duration={2}
                      className="count-up-text"
                      delay={0}
                    />
                    +
                  </h4>

                  <p
                    className="outfit fs-4 fw-light text-center"
                    data-aos="fade-up"
                    data-aos-delay="170"
                    data-aos-duration="1200"
                    data-aos-easing="ease"
                  >
                    Events Completed
                  </p>
                </div>
                <div></div>
              </div>
              <div className="num">
                <div>
                  <h4
                    className="outfit fs-2 text-center"
                    data-aos="fade-up"
                    data-aos-delay="162"
                    data-aos-duration="1200"
                    data-aos-easing="ease"
                  >
                    {" "}
                    <CountUp
                      from={19500}
                      to={20000}
                      separator=","
                      direction="up"
                      duration={1.3}
                      className="count-up-text"
                      delay={0}
                    />
                    +
                  </h4>
                  <p
                    className="outfit fs-4 fw-light text-center"
                    data-aos="fade-up"
                    data-aos-delay="163"
                    data-aos-duration="1200"
                    data-aos-easing="ease"
                  >
                    Happy Guests Served
                  </p>
                </div>
                <div></div>
              </div>
              <div className="num">
                <div>
                  <h4
                    className="outfit fs-2 text-center"
                    data-aos="fade-up"
                    data-aos-delay="164"
                    data-aos-duration="1200"
                    data-aos-easing="ease"
                  >
                    {" "}
                    <CountUp
                      from={0}
                      to={50}
                      separator=","
                      direction="up"
                      duration={2}
                      className="count-up-text"
                      delay={0}
                    />
                    +
                  </h4>
                  <p
                    className="outfit fs-4 fw-light text-center"
                    data-aos="fade-up"
                    data-aos-delay="165"
                    data-aos-duration="1200"
                    data-aos-easing="ease"
                  >
                    Expert Staff
                  </p>
                </div>
                <div></div>
              </div>
              <div className="num">
                <div>
                  <h4
                    className="outfit fs-2 text-center"
                    data-aos="fade-up"
                    data-aos-delay="166"
                    data-aos-duration="1200"
                    data-aos-easing="ease"
                  >
                    {" "}
                    <CountUp
                      from={0}
                      to={25}
                      separator=","
                      direction="up"
                      duration={2}
                      className="count-up-text"
                      delay={0}
                    />
                    +
                  </h4>
                  <p
                    className="outfit fs-4 fw-light text-center"
                    data-aos="fade-up"
                    data-aos-delay="167"
                    data-aos-duration="1200"
                    data-aos-easing="ease"
                  >
                    Years of Experience
                  </p>
                </div>
              </div>
            </div>
            <div className="round">
              <img src={roundarrow} alt="" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
export default About;
