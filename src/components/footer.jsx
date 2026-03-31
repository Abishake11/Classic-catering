import './footer.css'

// icons import
import { FaArrowRight } from "react-icons/fa";

// images import
import fb from '../assets/footer-icons/fb.png';
import In from '../assets/footer-icons/in.png'
import insta from '../assets/footer-icons/insta.png'
import you from '../assets/footer-icons/you.png' 

function Footer() {
  return (
    <>
      <section className="contact-section text-white py-5">
        <div className="container-set">
          <div className="row align-items-center">
            {/* LEFT SIDE */}
            <div className="col-md-6 mb-4 mb-lg-0">
              <FaArrowRight className='sarrow' />

              <h2 className="fw-bold pop">CONTACT US</h2>

              {/* Social Icons */}
              <div className="d-flex gap-3 mt-4 align-items-center">
                <img src={fb} alt="" />
                <img src={In} alt="" />
                <img src={insta} alt="" />
                <img src={you} alt="" />
              </div>
            </div>

            {/* RIGHT SIDE */}
            <div className="col-md-6">
              <div className="d-flex justify-content-lg-end justify-content-start">
                <div>
                  {/* Menu */}
                  <ul className="list-unstyled text-end text-lg-end mb-3">
                    <li>HOME</li>
                    <li>ABOUT</li>
                    <li>CONTACT</li>
                    <li>GALLERY</li>
                    <li>ENQUIRY</li>
                  </ul>

                  {/* Instagram Feed */}
                  <p className="mb-2 text-end pop fw-medium">INSTAGRAM FEED</p>

                  <div className="d-flex gap-2 justify-content-end">
                    <div className="insta-box"></div>
                    <div className="insta-box"></div>
                    <div className="insta-box"></div>
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