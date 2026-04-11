import './home.css'

// images import
import call from '../assets/home assets/call.png'

// components import
import Service from './service';
import About from './about';
import Gallery from './gallery';
import Formone from './formone';
import Client from './client';
import Formtwo from './formtwo';
import Footer from './footer';
import Navbar from './navbar';

// images import
import fb from '../assets/icon-assets/fb.png'
import insta from '../assets/icon-assets/insta.png'
import plate from '../assets/icon-assets/plate.png'

function Home() {
  return (
    <>
      {/* header section */}
      <header>
        <div className="container-set">
          <div className="header-wrapper">
            <div>

              <div className='taste'>
                <img src={plate} alt="" />
                <span className='pop'>FREE SAMPLE TASTE</span>
              </div>

              <img src={insta} alt="" className='insta' />

              <img src={fb} alt="" className='fb' />
            </div>
          </div>
        </div>
      </header>
      <Navbar />


      <section className='home'>
        <div className="container-set">
          <div className="row">
            <div className="col-md-6">

            </div>
            <div className="col-md-6">
              <h1 className='lato'>BIG EVENTS DESERVE BOLD</h1>
              <h3 className='overpass'>FLAVOURS</h3>
              <div className="enquiry">
                <img src={call} alt="" />
                <a href="">ENQUIRY</a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Service />
      <About />
      <Gallery />
      <Formone />
      <Client />
      <Formtwo />
      <Footer />

    </>
  )
}
export default Home;