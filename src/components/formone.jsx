import "./formone.css";
import { useState } from "react";
import { useContactApi } from "../api/ContactApi";

// images import
import arr from "../assets/form-assets/arr.png";

function Formone() {
  const [formData, setFormData] = useState({
    name: "",
    whatsapp: "",
  });

  const { mutate: submitContact, isPending, isError, error } = useContactApi();

  // Handle change
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // Handle submit
  const handleSubmit = (e) => {
    e.preventDefault();

    submitContact(formData, {
      onSuccess: () => {
        alert("✅ Enquiry submitted!");
        setFormData({
          name: "",
          whatsapp: "",
        });
      },
      onError: () => {
        alert("❌ Failed to submit");
      },
    });
  };

  return (
    <section className="form-1" id="enquiry">
      <div className="container-set">
        <div className="row">
          {/* LEFT SIDE */}
          <div className="col-lg-6">
            <h2
              className="outfit fs-3 fw-medium"
              data-aos="fade-up"
              data-aos-delay="127"
              data-aos-duration="1200"
            >
              Let’s Plan Your Next Event
            </h2>

            <p
              className="outfit fs-4 fw-light"
              data-aos="fade-up"
              data-aos-delay="130"
              data-aos-duration="1200"
            >
              Leave your name and WhatsApp number, great food starts here.
            </p>
          </div>

          {/* RIGHT SIDE FORM */}
          <div className="col-lg-6" data-aos="fade-up">
            <form className="p-4" onSubmit={handleSubmit}>
              {/* NAME */}
              <div className="mb-3">
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="form-control"
                  placeholder="YOUR NAME"
                  required
                />
              </div>

              {/* WHATSAPP */}
              <div className="mb-3">
                <input
                  type="text"
                  name="whatsapp"
                  value={formData.whatsapp}
                  onChange={handleChange}
                  className="form-control"
                  placeholder="YOUR WHATSAPP NUMBER"
                  required
                />
              </div>

              {/* BUTTON */}
              <div className="form-btn d-flex align-items-center gap-2 btnanimate">
                <button
                  type="submit"
                  className="fs-5 fw-medium text-white"
                  disabled={isPending}
                >
                  {isPending ? "Submitting..." : "SUBMIT"}
                </button>

                <img src={arr} alt="" width="18px" />
              </div>

              {/* ERROR */}
              {isError && (
                <p style={{ color: "red", marginTop: "10px" }}>
                  {error?.message || "Something went wrong"}
                </p>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Formone;