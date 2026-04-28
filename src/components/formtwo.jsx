import "./formtwo.css";

function Formtwo() {
  return (
    <>
      <section className="form-2">
        <div className="container-set">
          <div className="row">
            {/* left side */}
            <div className="col-lg-6" data-aos="fade-up">
              <h2
                className="outfit fs-1 fw-medium"
                data-aos-duration="1200"
                data-aos-delay="200"
                data-aos="fade-up"
              >
                Get In Touch
              </h2>
              <div className="mt-3">
                <p
                  className="opacity-75"
                  data-aos-duration="1200"
                  data-aos-delay="200"
                  data-aos="fade-up"
                >
                  Email:
                </p>
                <p
                  className="outfit para fs-5 fw-medium"
                  data-aos-duration="1200"
                  data-aos-delay="200"
                  data-aos="fade-up"
                >
                  events@classiccatering.net
                </p>
              </div>
              <div className="mt-3">
                <p
                  className="opacity-75"
                  data-aos-duration="1200"
                  data-aos-delay="200"
                  data-aos="fade-up"
                >
                  Phone
                </p>
                <p
                  className="outfit para fs-5 fw-medium"
                  data-aos-duration="1200"
                  data-aos-delay="200"
                  data-aos="fade-up"
                >
                  +91 90943 19216
                </p>
              </div>
              <div className="mt-3">
                <p
                  className="opacity-75"
                  data-aos-duration="1200"
                  data-aos-delay="200"
                  data-aos="fade-up"
                >
                  Address:
                </p>
                <p
                  className="outfit para fs-5 fw-medium"
                  data-aos-duration="1200"
                  data-aos-delay="200"
                  data-aos="fade-up"
                >
                  Egmore,
                </p>
                <p
                  className="outfit para fs-5 fw-medium"
                  data-aos-duration="1200"
                  data-aos-delay="200"
                  data-aos="fade-up"
                >
                  Chennai - 600008
                </p>
              </div>
            </div>

            {/* right side */}
            <div className="col-lg-6 mt-5 mt-md-0" data-aos="fade-up">
              <form className="">
                <div className="row">
                  <div className="col-md-6">
                    <div className="mb-3">
                      <label
                        htmlFor=""
                        className="opacity-75"
                        data-aos-duration="1200"
                        data-aos-delay="200"
                        data-aos="fade-up"
                      >
                        NAME
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        data-aos-duration="1200"
                        data-aos-delay="200"
                        data-aos="fade-up"
                      />
                    </div>
                  </div>

                  <div className="col-md-6">
                    <div className="mb-3">
                      <label
                        htmlFor=""
                        className="opacity-75"
                        data-aos-duration="1200"
                        data-aos-delay="200"
                        data-aos="fade-up"
                      >
                        WHATSAPP NUMBER
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        placeholder="+91"
                        data-aos-duration="1200"
                        data-aos-delay="200"
                        data-aos="fade-up"
                      />
                    </div>
                  </div>

                  <div className="col-md-12">
                    <label
                      htmlFor=""
                      className="opacity-75"
                      data-aos-duration="1200"
                      data-aos-delay="200"
                      data-aos="fade-up"
                    >
                      MESSAGE
                    </label>
                    <textarea
                      name=""
                      className="w-100"
                      id=""
                      data-aos-duration="1200"
                      data-aos-delay="200"
                      data-aos="fade-up"
                    ></textarea>
                  </div>
                </div>

                {/* Button */}
                <div className="form2-btn btnanimate">
                  <a href="" className="fs-5 fw-medium">
                    SUBMIT
                  </a>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Formtwo;
