import "./formtwo.css";
import { useState } from "react";
import { useContactApi } from "../api/ContactApi";

function Formtwo() {
  const [formData, setFormData] = useState({
    name: "",
    whatsapp: "",
    message: "",
  });

  const { mutate: submitContact, isPending, isError, error } = useContactApi();

  // Handle input change
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
        alert("✅ Message sent successfully!");
        setFormData({
          name: "",
          whatsapp: "",
          message: "",
        });
      },
      onError: () => {
        alert("❌ Failed to send message");
      },
    });
  };

  return (
    <section className="form-2">
      <div className="container-set">
        <div className="row">
          {/* LEFT SIDE */}
          <div className="col-lg-6">
            <h2
              className="outfit fs-1 fw-medium"
              data-aos="fade-up"
              data-aos-delay="120"
              data-aos-duration="1200"
            >
              Get In Touch
            </h2>

            <div className="mt-3" data-aos="fade-up" data-aos-delay="124">
              <p className="opacity-75">Email:</p>
              <p className="outfit para fs-5 fw-medium">
                events@classiccatering.net
              </p>
            </div>

            <div className="mt-3" data-aos="fade-up" data-aos-delay="126">
              <p className="opacity-75">Phone</p>
              <p className="outfit para fs-5 fw-medium">
                +91 90943 19216
              </p>
            </div>

            <div className="mt-3" data-aos="fade-up" data-aos-delay="128">
              <p className="opacity-75">Address:</p>
              <p className="outfit para fs-5 fw-medium">Egmore,</p>
              <p className="outfit para fs-5 fw-medium">
                Chennai - 600008
              </p>
            </div>
          </div>

          {/* RIGHT SIDE FORM */}
          <div className="col-lg-6 mt-5 mt-md-0" data-aos="fade-up">
            <form onSubmit={handleSubmit}>
              <div className="row">
                {/* NAME */}
                <div className="col-md-6">
                  <div className="mb-3">
                    <label className="opacity-75">NAME</label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className="form-control"
                      required
                    />
                  </div>
                </div>

                {/* WHATSAPP */}
                <div className="col-md-6">
                  <div className="mb-3">
                    <label className="opacity-75">WHATSAPP NUMBER</label>
                    <input
                      type="text"
                      name="whatsapp"
                      value={formData.whatsapp}
                      onChange={handleChange}
                      className="form-control"
                      placeholder="+91"
                      required
                    />
                  </div>
                </div>

                {/* MESSAGE */}
                <div className="col-md-12">
                  <div className="mb-3">
                    <label className="opacity-75">MESSAGE</label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      className="w-100 form-control"
                      rows="4"
                      required
                    />
                  </div>
                </div>
              </div>

              {/* BUTTON */}
              <div className="form2-btn btnanimate">
                <button
                  type="submit"
                  className="fs-5 fw-medium  text-white"
                  disabled={isPending}
                >
                  {isPending ? "Sending..." : "SUBMIT"}
                </button>
              </div>

              {/* ERROR MESSAGE */}
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

export default Formtwo;