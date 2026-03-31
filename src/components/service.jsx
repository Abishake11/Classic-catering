import "./service.css";

// images import
import catering from "../assets/service-assets/cateringtype.png";
import arrow from "../assets/service-assets/arrow.png";

function Service() {
  return (
    <>
      <section className="service">
        <div className="container-set">
          <div className="row align-items-center justify-content-between">
            {/* services phase 1*/}
            <div className="col-md-9">
              <h2 className="outfit">Catering Services for Every Occasion</h2>
            </div>
            <div className="col-md-3 mt-sm-4 d-flex justify-content-end">
              <div className="quote px-3 py-2">
                <a href="" className="fw-semibold fs-5 outfit">
                  GET QUOTE &gt;&gt;{" "}
                </a>
              </div>
            </div>


          </div>

           {/* catering type */}
           <div className="row justify-content-between mt-5 pt-3">
              <div className="col-md-6 col-lg-3">
                <div className="carded">
                  <div className="img-grp">
                    <img src={catering} alt="" />
                    <img src={arrow} alt="" />
                  </div>
                  <span className="d-inline-block mt-4 mb-2 opacity-50">100+ EVENTS | PREMIUM INGREDIENTS</span>
                  <h5 className="giafita fs-1">Wedding Catering</h5>
                  <p className="fs-5 outfit fw-lighter">Elegant menus for unforgettable wedding celebrations</p>
                </div>
              </div>

               <div className="col-md-6 col-lg-3">
                <div className="carded">
                  <div className="img-grp">
                    <img src={catering} alt="" />
                    <img src={arrow} alt="" />
                  </div>
                  <span className="d-inline-block mt-4 mb-2 opacity-50">100+ EVENTS | PREMIUM INGREDIENTS</span>
                  <h5 className="giafita fs-1">Wedding Catering</h5>
                  <p className="fs-5 outfit fw-lighter">Elegant menus for unforgettable wedding celebrations</p>
                </div>
              </div>

               <div className="col-md-6 col-lg-3">
                <div className="carded">
                  <div className="img-grp">
                    <img src={catering} alt="" />
                    <img src={arrow} alt="" />
                  </div>
                  <span className="d-inline-block mt-4 mb-2 opacity-50">100+ EVENTS | PREMIUM INGREDIENTS</span>
                  <h5 className="giafita fs-1">Wedding Catering</h5>
                  <p className="fs-5 outfit fw-lighter">Elegant menus for unforgettable wedding celebrations</p>
                </div>
              </div>

                <div className="col-md-6 col-lg-3">
                <div className="carded">
                  <div className="img-grp">
                    <img src={catering} alt="" />
                    <img src={arrow} alt="" />
                  </div>
                  <span className="d-inline-block mt-4 mb-2 opacity-50">100+ EVENTS | PREMIUM INGREDIENTS</span>
                  <h5 className="giafita fs-1">Wedding Catering</h5>
                  <p className="fs-5 outfit fw-lighter">Elegant menus for unforgettable wedding celebrations</p>
                </div>
              </div>
              
           </div>

        </div>
      </section>
    </>
  );
}
export default Service;
