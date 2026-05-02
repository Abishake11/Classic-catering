import "./service.css";

import { useState } from "react";

// images import
import wedcater from "../assets/service-assets/wedcater.png";
import corcater from "../assets/service-assets/corcater.png";
import porcater from "../assets/service-assets/porcater.png";
import customcater from "../assets/service-assets/customcater.png";
import WhatsAppButton from "./WhatsAppButton";

import arrow from "../assets/service-assets/arrow.png";
import { useContactApi } from "../api/ContactApi";

function Service() {
  // forpopup message
  const [showPopup, setShowPopup] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    event: "",
    whatsapp: "",
  });

  const { mutate: submitContact } = useContactApi();

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    submitContact(formData, {
      onSuccess: () => {
        alert("✅ Submitted successfully!");
        setFormData({
          name: "",
          event: "",
          whatsapp: "",
        });
        setShowPopup(false);
      },
      onError: (err) => {
        console.error(err);
        alert("❌ Submission failed");
      },
    });
  };

  return (
    <>
      <section className="service" id="service">
        <div className="container-set">
          <div className="row align-items-center justify-content-between">
            {/* services phase 1*/}
            <div
              className="col-md-9"
              data-aos="fade-up"
              data-aos-duration="1000"
            >
              <h2 className="outfit">Catering Services for Every Occasion</h2>
            </div>
            <div
              className="col-md-3 mt-sm-4 d-flex justify-content-md-end"
              data-aos="fade-up"
              data-aos-duration="1000"
            >
              <div className="quote px-3 py-2">
                <WhatsAppButton
                  message="Hi, I want to get a quote"
                  className="fw-semibold fs-5 outfit btnanimate text-white"
                >
                  GET QUOTE &gt;&gt;{" "}
                </WhatsAppButton>
              </div>
            </div>
          </div>

          {/* catering type */}
          <div className="row justify-content-between mt-3 pt-3">
            <div className="col-md-6 col-lg-3 mt-2 mt-md-3" data-aos="fade-up">
              <div className="carded">
                <div className="img-grp">
                  <img
                    src={wedcater}
                    alt=""
                    onClick={() => setShowPopup(true)}
                    data-aos="fade-up"
                    data-aos-duration="1100"
                  />
                </div>
                <span
                  className="d-inline-block mt-4 mb-2 opacity-50"
                  data-aos="fade-up"
                  data-aos-delay="100"
                  data-aos-duration="1200"
                  data-aos-easing="ease"
                >
                  100+ EVENTS | PREMIUM INGREDIENTS
                </span>
                <div className="d-flex align-items-center justify-content-between">
                  <h5
                    className="lato fs-1"
                    data-aos="fade-up"
                    data-aos-delay="110"
                    data-aos-duration="1200"
                    data-aos-easing="ease"
                  >
                    WEDDING CATERING
                  </h5>
                  <img
                    src={arrow}
                    className="btnanimate"
                    alt=""
                    width="40px"
                    height="40px"
                    onClick={() => setShowPopup(true)}
                  />
                </div>
              </div>
            </div>

            <div className="col-md-6 col-lg-3 mt-3 mt-md-3" data-aos="fade-up">
              <div className="carded">
                <div className="img-grp">
                  <img
                    src={corcater}
                    alt=""
                    onClick={() => setShowPopup(true)}
                    data-aos="fade-up"
                    data-aos-delay="120"
                    data-aos-duration="1100"
                  />
                </div>
                <span
                  className="d-inline-block mt-4 mb-2 opacity-50"
                  data-aos="fade-up"
                  data-aos-delay="120"
                  data-aos-duration="1200"
                  data-aos-easing="ease"
                >
                  CORPORATE MENU EXPERTISE
                </span>
                <div className="d-flex align-items-center justify-content-between">
                  <h5
                    className="lato fs-1"
                    data-aos="fade-up"
                    data-aos-delay="120"
                    data-aos-duration="1200"
                    data-aos-easing="ease"
                  >
                    CORPORATE CATERING
                  </h5>
                  <img
                    src={arrow}
                    alt=""
                    width="40px"
                    height="40px"
                    className="btnanimate"
                    onClick={() => setShowPopup(true)}
                  />
                </div>
              </div>
            </div>

            <div className="col-md-6 col-lg-3 mt-3 mt-md-3" data-aos="fade-up">
              <div className="carded">
                <div className="img-grp">
                  <img
                    src={porcater}
                    alt=""
                    onClick={() => setShowPopup(true)}
                    data-aos="fade-up"
                    data-aos-duration="1200"
                    data-aos-easing="ease"
                    data-aos-delay="150"
                  />
                </div>
                <span
                  className="d-inline-block mt-4 mb-2 opacity-50"
                  data-aos="fade-up"
                  data-aos-delay="140"
                  data-aos-duration="1200"
                  data-aos-easing="ease"
                >
                  MULTI-CUISINE MENU OPTIONS
                </span>
                <div className="d-flex align-items-center justify-content-between">
                  <h5
                    className="lato fs-1"
                    data-aos="fade-up"
                    data-aos-delay="140"
                    data-aos-duration="1200"
                    data-aos-easing="ease"
                  >
                    PARTY CATERING
                  </h5>
                  <img
                    src={arrow}
                    alt=""
                    width="40px"
                    height="40px"
                    className="btnanimate"
                    onClick={() => setShowPopup(true)}
                  />
                </div>
              </div>
            </div>

            <div className="col-md-6 col-lg-3 mt-3 mt-md-3" data-aos="fade-up">
              <div className="carded">
                <div className="img-grp">
                  <img
                    src={customcater}
                    alt=""
                    onClick={() => setShowPopup(true)}
                    data-aos="fade-up"
                    data-aos-delay="150"
                    data-aos-duration="1200"
                    data-aos-easing="ease"
                  />
                </div>
                <span
                  className="d-inline-block mt-4 mb-2 opacity-50"
                  data-aos="fade-up"
                  data-aos-delay="160"
                  data-aos-duration="1200"
                  data-aos-easing="ease"
                >
                  FLEXIBLE CATERING PACKAGES
                </span>
                <div className="d-flex align-items-center justify-content-between">
                  <h5
                    className="lato fs-1"
                    data-aos="fade-up"
                    data-aos-delay="160"
                    data-aos-duration="1200"
                    data-aos-easing="ease"
                  >
                    CUSTOM CATERING
                  </h5>
                  <img
                    src={arrow}
                    alt=""
                    width="40px"
                    height="40px"
                    className="btnanimate"
                    data-aos="fade-up"
                    data-aos-delay="160"
                    data-aos-duration="1200"
                    data-aos-easing="ease"
                    onClick={() => setShowPopup(true)}
                  />
                </div>
              </div>
            </div>
          </div>

          {/* POPUP */}
          {showPopup && (
            <div className="overlay">
              <div className={`popup ${showPopup ? "show" : ""}`}>
                <h2 className="pop fs-4 fw-bold">Register</h2>

                <form onSubmit={handleSubmit}>
                  <input
                    type="text"
                    name="name"
                    placeholder="Your Name"
                    onChange={handleChange}
                    required
                  />

                  <input
                    type="text"
                    name="event"
                    placeholder="Event Name"
                    onChange={handleChange}
                    required
                  />

                  <input
                    type="text"
                    name="whatsapp"
                    placeholder="WhatsApp Number"
                    onChange={handleChange}
                    required
                  />

                  <button type="submit">Submit</button>
                  <button type="button" onClick={() => setShowPopup(false)}>
                    Close
                  </button>
                </form>
              </div>
            </div>
          )}
        </div>
      </section>
    </>
  );
}
export default Service;
