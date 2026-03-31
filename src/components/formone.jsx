import "./formone.css";

// images import
import  arr from '../assets/form-assets/arr.png'

function Formone() {
  return (
    <>
      <section className="form-1">
        <div className="container-set">
          <div className="row">
            <div className="col-lg-6">
              <h2 className="outfit fs-1 fw-medium">
                Let’s Plan Your Next Event
              </h2>
              <p className="outfit fs-4 fw-light">
                Leave your name and WhatsApp number, great food starts here.
              </p>
            </div>

            <div className="col-lg-6">
              <form className="p-4">
                <div className="mb-3">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="YOUR NAME"
                  />
                </div>
                <div className="mb-3">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="YOUR WHATSAPP NUMBER"
                  />
                </div>
                {/* Button */}
                 <div className="form-btn d-flex align-items-center gap-2">
                    <a href="" className="fs-5 fw-medium">SUBMIT</a>
                    <img src={arr} alt="" className="" width="18px" />
                 </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
export default Formone;
