import './home.css'
import { useState, useEffect } from "react";

// images import
import call from '../assets/home assets/call.png'

// background images
import bg1 from '../assets/home assets/bg.png';
import bg2 from '../assets/home assets/bg2.png';
import bg3 from '../assets/home assets/bg3.png';

// components import
import Service from './service';
import About from './about';
import Gallery from './gallery';
import Formone from './formone';
import Client from './client';
import Formtwo from './formtwo';
import Footer from './footer';
import WhatsAppButton from './WhatsAppButton';
// navbar import
import plate from '../assets/icon-assets/plate.png';
import insta from '../assets/icon-assets/insta.png';
import fb from '../assets/icon-assets/fb.png';


function Home() {

  const slides = [
    {
      bg: bg1,
      title: "BIG EVENTS DESERVE BOLD",
      subtitle: "FLAVOURS"
    },
    {
      bg: bg2,
      title: "MAKE YOUR EVENTS SPECIAL",
      subtitle: "WITH US"
    },
    {
      bg: bg3,
      title: "TASTE THAT YOU REMEMBER",
      subtitle: "FOREVER"
    }
  ];

  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [slides.length]);

  return (
    <>

      <header>
        <div className="container-set">
          <div className="header-wrapper">
            <div>
              <div className="taste">
                <img src={plate} alt="" />
                <WhatsAppButton
                  message="Hi, I want a free sample taste"
                  className="pop"
                >
                  FREE SAMPLE TASTE
                </WhatsAppButton>
              </div>

              <a href="https://www.instagram.com/classic__catering/?hl=en">
                <img src={insta} alt="" className="insta" />
              </a>

              <a
                href="https://www.facebook.com/profile.php?id=61588091875870"
              >
                <img src={fb} alt="" className="fb" />
              </a>
            </div>
          </div>
        </div>
      </header>

      <section
        className='home'
        id='home'
        style={{
          backgroundImage: `url(${slides[current].bg})`
        }}
      >
        <div className="container-set">
          <div className="row">

            <div className="col-md-6">
              {/* left side empty as per your design */}
            </div>

            <div className="col-md-6">
              <h1 className='lato' key={`title-${current}`}>{slides[current].title}</h1>
              <h3 className='overpass' key={`sub-${current}`}>{slides[current].subtitle}</h3>

              <div className="enquiry btnanimate">
                <img src={call} alt="" />
                <WhatsAppButton
                  message="Hi, I want to enquire"
                  className="enquiry"
                >
                  ENQUIRY
                </WhatsAppButton>
              </div>

              {/* ✅ dots navigation */}
              <div className="dots">
                {slides.map((_, i) => (
                  <span
                    key={i}
                    className={i === current ? "dot active" : "dot"}
                    onClick={() => setCurrent(i)}
                  ></span>
                ))}
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