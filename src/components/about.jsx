import "./about.css";

// images import
import ic1 from "../assets/about-assets/ic1.png";
import ic2 from "../assets/about-assets/ic2.png";
import ic3 from "../assets/about-assets/ic3.png";
import rarrow from "../assets/about-assets/rarrow.png";
import roundarrow from "../assets/about-assets/roundarrow.png";

function About() {
  return (
    <>
      <section className="about">
        <div className="container-set">
          <div className="row">
            <div className="col-lg-6">
              <div className="card-1">
                <h3 className="fs-1 outfit w-50">Complete catering service </h3>
                <div className="icons-grp d-flex gap-2 align-items-center mt-3">
                  <div className="icon1">
                    <img src={ic1} alt="" />
                    <p className="w-75 outfit">Trained Service Staff</p>
                  </div>
                  <div className="icon1">
                    <img src={ic2} alt="" />
                    <p className="w-75 outfit">Freshly Cooked Food</p>
                  </div>
                  <div className="icon1">
                    <img src={ic3} alt="" />
                    <p className="w-75 outfit">Hassle-Free Execution</p>
                  </div>
                </div>
                <div className="btn-grp ">
                  <h4 className="outfit">REQUEST A CALLBACK</h4>
                  <img src={rarrow} alt="" />
                </div>
              </div>
            </div>

            <div className="col-lg-6">
              <div className="card-2">
                <h3 className="outfit fs-1 w-50">
                  Craving Wedding Style Biriyani?
                </h3>
                <p className="outfit fw-lighter fs-5 w-50 mt-3">
                  Authentic wedding style biriyani for family and group orders
                </p>
                <div className="btn-grp mt-3">
                  <h4 className="outfit">REQUEST A CALLBACK</h4>
                  <img src={rarrow} alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="about-content">
        <div className="container-set">
          <div className="row">
            <div className="col-md-6">
              <h3 className="outfit fs-2 fw-medium w-80">
                Crafting Memorable Events with Authentic Flavours & Professional
                Catering
              </h3>
            </div>
            <div className="col-md-6">
              <p>
                With years of experience in wedding catering, corporate events,
                & customised menus, we focus on quality ingredients, seamless
                execution, and customer satisfaction making every event a
                memorable experience.
              </p>
            </div>
          </div>
        </div>
      </div>

      <section className="py-5 about-numbers">
        <div className="container-set">
          <div className="about-numbers-wrapper">
            <div className="d-flex numbers">
              <div className="num">
                <div>
                  <h4 className="outfit fs-2 text-center">1000+</h4>
                  <p className="outfit fs-4 fw-light text-center">Events Completed</p>
                </div>
                <div></div>
              </div>
              <div className="num">
                <div>
                  <h4 className="outfit fs-2 text-center">20,000+</h4>
                  <p className="outfit fs-4 fw-light text-center">Happy Guests Served</p>
                </div>
                <div></div>
              </div>
              <div className="num">
                <div>
                  <h4 className="outfit fs-2 text-center">50+</h4>
                  <p className="outfit fs-4 fw-light text-center">Expert Staff</p>
                </div>
                <div></div>
              </div>
              <div className="num">
                <div>
                  <h4 className="outfit fs-2 text-center">25+</h4>
                  <p className="outfit fs-4 fw-light text-center">Years of Experience</p>
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
