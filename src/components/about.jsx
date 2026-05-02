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
            >
              <div className="card-1">
                <h3 className="fs-1 outfit"  data-aos="fade-up"
                    data-aos-delay="120"
                    data-aos-duration="1200">COMPLETE CATERING SERVICE</h3>

                <div className="icons-grp d-flex gap-2 align-items-center mt-5">
                  <div className="icon1"  data-aos="fade-up"
                    data-aos-delay="150"
                    data-aos-duration="1200">
                    <img src={ic1} alt=""/>
                    <p className="w-75 outfit">Trained Service Staff</p>
                  </div>
                  <div className="icon1"  data-aos="fade-up"
                    data-aos-delay="150"
                    data-aos-duration="1200">
                    <img src={ic2} alt="" />
                    <p className="w-75 outfit">Freshly Cooked Food</p>
                  </div>
                  <div className="icon1"  data-aos="fade-up"
                    data-aos-delay="150"
                    data-aos-duration="1200">
                    <img src={ic3} alt="" />
                    <p className="w-75 outfit">Hassle-Free Execution</p>
                  </div>
                </div>
              </div>
            </div>

            <div
              className="col-lg-6"
               data-aos="fade-up"
                    data-aos-duration="1200"
            >
              <div className="card-2">
                <h3 className="outfit fs-1"  data-aos="fade-up"
                    data-aos-delay="150"
                    data-aos-duration="1200">
                  CRAVING WEDDING STYLE BIRYANI?
                </h3>
                <p className="outfit fw-lighter fs-5 w-50"  data-aos="fade-up"
                    data-aos-delay="155"
                    data-aos-duration="1200">
                  Authentic wedding style biriyani for family and group orders
                </p>
                <div className="btn-grp btnanimate"  data-aos="fade-up"
                    data-aos-delay="160"
                    data-aos-duration="1200">
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
                div
                data-aos="fade-up"
                    data-aos-delay="120"
                    data-aos-duration="1200"
              >
                Crafting Memorable Events with Authentic Flavours & Professional
                Catering
              </h3>
            </div>
            <div className="col-md-6">
              <p data-aos="fade-up"
                    data-aos-delay="130"
                    data-aos-duration="1200">
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
            <div
              className="d-flex numbers"
            >
              <div className="num">
                <div>
                  <h4 className="outfit fs-2 text-center"    data-aos="fade-up"
                    data-aos-delay="120"
                    data-aos-duration="1200">
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

                  <p className="outfit fs-4 fw-light text-center"  data-aos="fade-up"
                    data-aos-delay="122"
                    data-aos-duration="1200">
                    Events Completed
                  </p>
                </div>
                <div></div>
              </div>
              <div className="num">
                <div>
                  <h4 className="outfit fs-2 text-center"    data-aos="fade-up"
                    data-aos-delay="123"
                    data-aos-duration="1200">
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
                  <p className="outfit fs-4 fw-light text-center"    data-aos="fade-up"
                    data-aos-delay="126"
                    data-aos-duration="1200">
                    Happy Guests Served
                  </p>
                </div>
                <div></div>
              </div>
              <div className="num">
                <div>
                  <h4 className="outfit fs-2 text-center"  data-aos="fade-up"
                    data-aos-delay="129"
                    data-aos-duration="1200">
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
                  <p className="outfit fs-4 fw-light text-center"  data-aos="fade-up"
                    data-aos-delay="132"
                    data-aos-duration="1200">
                    Expert Staff
                  </p>
                </div>
                <div></div>
              </div>
              <div className="num">
                <div>
                  <h4 className="outfit fs-2 text-center"  data-aos="fade-up"
                    data-aos-delay="135"
                    data-aos-duration="1200">
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
                  <p className="outfit fs-4 fw-light text-center"  data-aos="fade-up"
                    data-aos-delay="138"
                    data-aos-duration="1200">
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
