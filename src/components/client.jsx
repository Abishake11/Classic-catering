import "./client.css";
import star3 from "../assets/client-assets/star.png";

function Client() {
  return (
    <>
      <section className="client" id="client">
        <div className="container-set">
          <div className="client-wrapper">
            <h1 className="client-say giafita">What Our Clients Say</h1>

            <div className="row g-4 mt-4">
              <div
                className="col-lg-3 col-md-6 col-sm-12"
                data-aos="fade-up"
                data-aos-duration="1200"
              >
                <div className="client-card text-start p-4 h-100">
                  <div>
                    <h5 className="client-name">Lakshmi R</h5>
                    <div>
                      <img src={star3} alt="star" className="star" />
                      <img src={star3} alt="star" className="star" />
                      <img src={star3} alt="star" className="star" />
                      <img src={star3} alt="star" className="star" />
                      <img src={star3} alt="star" className="star" />
                    </div>
                  </div>

                  <p className="client-text mt-3"  data-aos-duration="1200"
  data-aos-delay="200" data-aos="fade-up">
                    We booked Classic Catering for my seemantham function. Food
                    was very tasty and service also very neat. All my relatives
                    were happy and appreciated the food. Everything was handled
                    properly without any tension for us.
                  </p>

                </div>
              </div>
              <div
                className="col-lg-3 col-md-6 col-sm-12"
                data-aos="fade-up"
                data-aos-duration="1200"
              >
                <div className="client-card text-start p-4 h-100">
                  <div>
                    <h5 className="client-name">Praksh Kumar</h5>

                    <div>
                      <img src={star3} alt="star" className="star" />
                      <img src={star3} alt="star" className="star" />
                      <img src={star3} alt="star" className="star" />
                      <img src={star3} alt="star" className="star" />
                      <img src={star3} alt="star" className="star" />
                    </div>
                  </div>

                  <p className="client-text mt-3"  data-aos-duration="1200"
  data-aos-delay="200" data-aos="fade-up">
                    For my sister’s wedding, we chose Classic Catering, and it
                    turned out to be a very good decision. Around 800 people
                    attended the function, and they managed everything smoothly
                    without any confusion. Food was served on time for all
                    guests, and the service flow was well organized.
                    
                  <p className="mt-2">
                    The taste was really good and consistent till the end, and
                    quantity was also more than enough for everyone
                  </p>
                  </p>

                </div>
              </div>
              <div
                className="col-lg-3 col-md-6 col-sm-12"
                data-aos="fade-up"
                data-aos-duration="1200"
              >
                <div className="client-card text-start p-4 h-100">
                  <div>
                    <h5 className="client-name">Revathi S</h5>

                    <div>
                      <img src={star3} alt="star" className="star" />
                      <img src={star3} alt="star" className="star" />
                      <img src={star3} alt="star" className="star" />
                      <img src={star3} alt="star" className="star" />
                      <img src={star3} alt="star" className="star" />
                    </div>
                  </div>
                  <p className="client-text mt-3"  data-aos-duration="1200"
  data-aos-delay="200" data-aos="fade-up">
                    We arranged catering for our housewarming function with
                    Classic Catering. Food was simple, homely and very nice,
                    just like how we expected for a family function. All our
                    guests really enjoyed the food and many of them told it felt
                    like eating at home. Quantity was also sufficient and
                    everything was served fresh. The service team was polite,
                    well-organized and came on time. They handled everything
                    smoothly, so we didn’t have any tension. Overall very happy
                    with their service and will definitely recommend to others.
                  </p>

                  <p className="client-text"></p>
                </div>
              </div>
              <div
                className="col-lg-3 col-md-6 col-sm-12"
                data-aos="fade-up"
                data-aos-duration="1200"
              >
                <div className="client-card text-start p-4 h-100">
                  <div>
                    <h5 className="client-name">Sarath k</h5>

                    <div>
                      <img src={star3} alt="star" className="star" />
                      <img src={star3} alt="star" className="star" />
                      <img src={star3} alt="star" className="star" />
                      <img src={star3} alt="star" className="star" />
                      <img src={star3} alt="star" className="star" />
                    </div>
                  </div>

                  <p className="client-text"  data-aos-duration="1200"
  data-aos-delay="200" data-aos="fade-up">
                    We booked Classic Catering for our office event where around
                    300 people attended. Food quality was very good and
                    consistent throughout the event. Service was smooth and
                    well-managed, and everything was served on time without any
                    delay.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Client;
