import './formtwo.css'

function Formtwo() {
  return (
    <>
      <section className="form-2">
        <div className="container-set">
          <div className="row">

            {/* left side */}
            <div className="col-lg-6">
              <h2 className="outfit fs-1 fw-medium">Get In Touch</h2>
              <div className='mt-3'>
                <p className='opacity-75'>Email:</p>
                <p className='outfit para fs-5 fw-medium'>events@classicatering.com</p>
              </div>
              <div className='mt-3'>
                <p className='opacity-75'>Phone</p>
                <p className='outfit para fs-5 fw-medium'>+91 Xxxxxxxxx</p>
              </div>
              <div className='mt-3'>
                <p className='opacity-75'>Address:</p>
                <p className='outfit para fs-5 fw-medium'>xxy street</p>
                <p className='outfit para fs-5 fw-medium'>Abc nagar - 0000</p>
              </div>
            </div>

            {/* right side */}
            <div className="col-lg-6 mt-5 mt-md-0">
              <form className="">
                <div className="row">

                  <div className="col-md-6">
                    <div className="mb-3">

                      <label htmlFor="" className='opacity-75'>NAME</label>
                      <input
                        type="text"
                        className="form-control"
                      />
                    </div>
                  </div>

                  <div className="col-md-6">
                    <div className="mb-3">
                        <label htmlFor="" className='opacity-75'>WHATSAPP NUMBER</label>
                      <input
                        type="text"
                        className="form-control"
                        placeholder="+91"
                      />
                    </div>
                  </div>

                  <div className="col-md-12">
                      <label htmlFor="" className='opacity-75'>MESSAGE</label>
                       <textarea name="" className='w-100' id=""></textarea>
                  </div>
                </div>

                {/* Button */}
                <div className="form2-btn">
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
