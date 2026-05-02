import "./client.css";
import star3 from "../assets/client-assets/star.png";

function Client() {
  return (
    <section className="client" id="client">
      <div className="container-set">
        <div className="client-wrapper">
          <h1 className="client-say giafita">What Our Clients Say</h1>

          <div className="row g-4 mt-4">
            
            {/* CARD 1 */}
            <div className="col-lg-3 col-md-6 col-sm-12">
              <div className="client-card p-4 h-100">
                <div>
                  <h5 className="client-name">Lakshmi R</h5>

                  <div className="star-container">
                    {[...Array(5)].map((_, i) => (
                      <img key={i} src={star3} alt="star" className="star" />
                    ))}
                  </div>
                </div>

                <div className="client-text">
                  <p>
                    We booked Classic Catering for my seemantham function. Food
                    was very tasty and service also very neat.
                  </p>
                  <p className="mt-2">
                    All my relatives were happy and appreciated the food.
                    Everything was handled properly without any tension.
                  </p>
                </div>
              </div>
            </div>

            {/* CARD 2 */}
            <div className="col-lg-3 col-md-6 col-sm-12">
              <div className="client-card p-4 h-100">
                <div>
                  <h5 className="client-name">Prakash Kumar</h5>

                  <div className="star-container">
                    {[...Array(5)].map((_, i) => (
                      <img key={i} src={star3} alt="star" className="star" />
                    ))}
                  </div>
                </div>

                <div className="client-text">
                  <p>
                    For my sister’s wedding, we chose Classic Catering. Around
                    800 people attended and everything was handled smoothly.
                  </p>
                  <p className="mt-2">
                    Food was on time, well organized, and quantity was more than
                    enough for everyone.
                  </p>
                </div>
              </div>
            </div>

            {/* CARD 3 */}
            <div className="col-lg-3 col-md-6 col-sm-12">
              <div className="client-card p-4 h-100">
                <div>
                  <h5 className="client-name">Revathi S</h5>

                  <div className="star-container">
                    {[...Array(5)].map((_, i) => (
                      <img key={i} src={star3} alt="star" className="star" />
                    ))}
                  </div>
                </div>

                <div className="client-text">
                  <p>
                    We arranged catering for our housewarming. Food was simple,
                    homely and very nice.
                  </p>
                  <p className="mt-2">
                    Service was polite, well-organized and everything was served
                    fresh and on time.
                  </p>
                </div>
              </div>
            </div>

            {/* CARD 4 */}
            <div className="col-lg-3 col-md-6 col-sm-12">
              <div className="client-card p-4 h-100">
                <div>
                  <h5 className="client-name">Sarath K</h5>

                  <div className="star-container">
                    {[...Array(5)].map((_, i) => (
                      <img key={i} src={star3} alt="star" className="star" />
                    ))}
                  </div>
                </div>

                <div className="client-text">
                  <p>
                    We booked Classic Catering for our office event with 300+
                    people.
                  </p>
                  <p className="mt-2">
                    Food quality was consistent and everything was served on
                    time without delay.
                  </p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}

export default Client;