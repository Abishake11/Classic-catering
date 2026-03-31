import "./client.css";
import img1 from "../assets/client-assets/pr1.png";
import img2 from "../assets/client-assets/pr2.png";
import star3 from "../assets/client-assets/star.png";

function Client() {
  return (
    <>
      <section className="client">
        <div className="container-set">
          <div className="client-wrapper">
            <h1 className="client-say giafita">What Our Clients Say</h1>

            <div className="row g-4 mt-4">
              <div className="col-lg-3 col-md-6 col-sm-12">
                <div className="client-card text-start p-4 h-100">
                  <img src={img1} alt="client" className="client-img" />

                  <h5 className="client-name">Sarath k</h5>

                  <div>
                    <img src={star3} alt="star" className="star" />
                    <img src={star3} alt="star" className="star" />
                    <img src={star3} alt="star" className="star" />
                    <img src={star3} alt="star" className="star" />
                    <img src={star3} alt="star" className="star" />
                  </div>

                  <p className="client-text mt-3">
                    Lorem Ipsem Lorem ipsum dolor sit amet, consectetur
                    adipiscing elit, sed do eiusmod tempor incididunt ut labore
                    et dolore magna aliqua.
                  </p>

                  <p className="client-text">
                    Lorem Ipsum Lorem ipsum dolor sit amet, consectetur
                    adipiscing elit, sed do eiusmod tempor incididunt ut labore
                    et dolore magna aliqua.
                  </p>
                </div>
              </div>
              <div className="col-lg-3 col-md-6 col-sm-12">
                <div className="client-card text-start p-4 h-100">
                  <img src={img2} alt="client" className="client-img" />

                  <h5 className="client-name">Sarath k</h5>

                  <div>
                    <img src={star3} alt="star" className="star" />
                    <img src={star3} alt="star" className="star" />
                    <img src={star3} alt="star" className="star" />
                    <img src={star3} alt="star" className="star" />
                    <img src={star3} alt="star" className="star" />
                  </div>

                  <p className="client-text mt-3">
                    Lorem Ipsem Lorem ipsum dolor sit amet, consectetur
                    adipiscing elit, sed do eiusmod tempor incididunt ut labore
                    et dolore magna aliqua.
                  </p>

                  <p className="client-text">
                    Lorem Ipsum Lorem ipsum dolor sit amet, consectetur
                    adipiscing elit, sed do eiusmod tempor incididunt ut labore
                    et dolore magna aliqua.
                  </p>
                </div>
              </div>
              <div className="col-lg-3 col-md-6 col-sm-12">
                <div className="client-card text-start p-4 h-100">
                  <img src={img1} alt="client" className="client-img" />

                  <h5 className="client-name">Sarath k</h5>

                  <div>
                    <img src={star3} alt="star" className="star" />
                    <img src={star3} alt="star" className="star" />
                    <img src={star3} alt="star" className="star" />
                    <img src={star3} alt="star" className="star" />
                    <img src={star3} alt="star" className="star" />
                  </div>

                  <p className="client-text mt-3">
                    Lorem Ipsem Lorem ipsum dolor sit amet, consectetur
                    adipiscing elit, sed do eiusmod tempor incididunt ut labore
                    et dolore magna aliqua.
                  </p>

                  <p className="client-text">
                    Lorem Ipsum Lorem ipsum dolor sit amet, consectetur
                    adipiscing elit, sed do eiusmod tempor incididunt ut labore
                    et dolore magna aliqua.
                  </p>
                </div>
              </div>
              <div className="col-lg-3 col-md-6 col-sm-12">
                <div className="client-card text-start p-4 h-100">
                  <img src={img2} alt="client" className="client-img" />

                  <h5 className="client-name">Sarath k</h5>

                  <div>
                    <img src={star3} alt="star" className="star" />
                    <img src={star3} alt="star" className="star" />
                    <img src={star3} alt="star" className="star" />
                    <img src={star3} alt="star" className="star" />
                    <img src={star3} alt="star" className="star" />
                  </div>

                  <p className="client-text mt-3">
                    Lorem Ipsem Lorem ipsum dolor sit amet, consectetur
                    adipiscing elit, sed do eiusmod tempor incididunt ut labore
                    et dolore magna aliqua.
                  </p>

                  <p className="client-text">
                    Lorem Ipsum Lorem ipsum dolor sit amet, consectetur
                    adipiscing elit, sed do eiusmod tempor incididunt ut labore
                    et dolore magna aliqua.
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
