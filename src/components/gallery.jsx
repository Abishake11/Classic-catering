import "./gallery.css";
import im1 from "../assets/gallery-assets/im1.png";
import im2 from "../assets/gallery-assets/im2.png";
import im3 from "../assets/gallery-assets/im3.png";

function Gallery() {
  return (
    <>
      <section className="gallery-section py-5">
        <div className="container-set">
          <div className="row g-3">
            {/* Left Big Image */}
            <div className="col-lg-4 col-md-12">
              <div className="gallery-img big">
                <img src={im1} className="img-fluid" alt="" />
              </div>
            </div>

            {/* Right Side */}
            <div className="col-lg-8 col-md-12">
              <div className="row g-3">
                {/* Top 3 Images */}
                <div className="col-4">
                  <div className="gallery-img small">
                    <img src={im2} className="img-fluid" alt="" />
                  </div>
                </div>

                <div className="col-4">
                  <div className="gallery-img small">
                    <img src={im2} className="img-fluid" alt="" />
                  </div>
                </div>

                <div className="col-4">
                  <div className="gallery-img small">
                    <img src={im2} className="img-fluid" alt="" />
                  </div>
                </div>

                {/* Bottom Wide Image */}
                <div className="col-12">
                  <div className="gallery-img wide">
                    <img src={im3} className="img-fluid" alt="" />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Button */}
          <div className="text-center mt-4">
            <a href="#" className="gallery-btn fs-3">
              VIEW GALLERY &gt;&gt;
            </a>
          </div>
        </div>
      </section>
    </>
  );
}

export default Gallery;
