import "./footer.css";

// icons import
import { FaArrowRight } from "react-icons/fa";

// images import
import fb from "../assets/footer-icons/fb.png";
import In from "../assets/footer-icons/in.png";
import insta from "../assets/footer-icons/insta.png";
import you from "../assets/footer-icons/you.png";
import i1 from "../assets/footer-icons/i1.jpg";
import i2 from "../assets/footer-icons/i2.jpg";
import i3 from "../assets/footer-icons/i3.jpg";

function Footer() {
  return (
    <>
      <section className="contact-section text-white py-5" id="footer">
        <div className="container-set">
          <div className="row align-items-end forbsm justify-content-between">
            {/* LEFT SIDE */}
            <div className="col-sm-6">
              <FaArrowRight
                className="sarrow"
                data-aos-duration="1200"
                data-aos-delay="200"
                data-aos="fade-up"
              />

              <h2
                className="fw-bold pop"
                data-aos-duration="1200"
                data-aos-delay="210"
                data-aos="fade-up"
              >
                CONTACT US
              </h2>

              {/* Social Icons */}
              <div className="d-flex gap-3 mt-4 align-items-center">
                <a href="https://www.facebook.com/people/Classiccatering/61588091875870/">
                  <img
                    src={fb}
                    alt=""
                    className="btnanimate"
                                  />
                </a>
                <a href="https://www.instagram.com/classic__catering/?hl=en">
                  <img
                    src={insta}
                    alt=""
                    className="btnanimate"
          
                  />
                </a>
              </div>
            </div>

            {/* RIGHT SIDE */}
            <div className="col-sm-6">
              <div className="d-flex justify-content-sm-end custom-second">
                <div>
                  {/* Menu */}
                  <ul
                    className="list-unstyled text-end mb-3"
                    data-aos-duration="1100"
                    data-aos-delay="200"
                    data-aos="fade-up"
                  >
                    <li>
                      <a href="#home">HOME</a>
                    </li>
                    <li>
                      <a href="#about">ABOUT</a>
                    </li>
                    <li>
                      <a href="#footer">CONTACT</a>
                    </li>
                    <li>
                      <a href="#client">CLIENT</a>
                    </li>
                    <li>
                      <a href="#enquiry">ENQUIRY</a>
                    </li>
                  </ul>

                  {/* Instagram Feed */}
                  <p
                    className="mb-2 text-end pop fw-medium"
                    data-aos-duration="1200"
                    data-aos-delay="180"
                    data-aos="fade-up"
                  >
                    INSTAGRAM FEED
                  </p>

                  <div className="d-flex gap-2 justify-content-end">
                    <div
                      className="insta-box btnanimate"
                    >
                      <a href="https://www.instagram.com/classic__catering/?hl=en">
                        <img src={i1} alt="" className="insta" width="100%" />
                      </a>
                    </div>


                    <div
                      className="insta-box btnanimate"
                      
                    >
                      <a href="https://www.instagram.com/classic__catering/?hl=en">
                        <img src={i2} alt="" className="insta" width="100%" />
                      </a>
                    </div>
                    <div className="insta-box btnanimate">
                      <a href="https://www.instagram.com/classic__catering/?hl=en">
                        <img src={i3} alt="" className="insta" width="100%" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
export default Footer;
