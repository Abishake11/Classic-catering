import './home.css';
import { useState, useEffect } from "react";

// images
import call from '../assets/home assets/call.png';
import bg1 from '../assets/home assets/bg.png';
import bg2 from '../assets/home assets/bg2.png';
import bg3 from '../assets/home assets/bg3.png';

// components
import Service from './service';
import About from './about';
import Gallery from './gallery';
import Formone from './formone';
import Client from './client';
import Formtwo from './formtwo';
import Footer from './footer';
import Navbar from './navbar';

// icons
import fb from '../assets/icon-assets/fb.png';
import insta from '../assets/icon-assets/insta.png';
import plate from '../assets/icon-assets/plate.png';

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
      <Navbar />

      {/* HERO SECTION */}
      <header
        className="home"
        id="home"
        style={{
          backgroundImage: `url(${slides[current].bg})`
        }}
      >
        <div className="container-set">
          <div className="row">

            <div className="col-md-6"></div>

            <div className="col-md-6">
              <h1 className="lato">{slides[current].title}</h1>
              <h3 className="overpass">{slides[current].subtitle}</h3>

              <div className="enquiry btnanimate">
                <img src={call} alt="call" />
                <a href="#footer">ENQUIRY</a>
              </div>

              {/* dots */}
              <div className="dots">
                {slides.map((_, i) => (
                  <span
                    key={i}
                    className={i === current ? "dot active" : "dot"}
                    onClick={() => setCurrent(i)}
                  />
                ))}
              </div>
            </div>

            {/* floating elements */}
            <div className="taste">
              <img src={plate} alt="plate" />
              <span className="pop">FREE SAMPLE TASTE</span>
            </div>

            <img src={insta} alt="instagram" className="insta" />
            <img src={fb} alt="facebook" className="fb" />

          </div>
        </div>
      </header>

      {/* OTHER SECTIONS */}
      <Service />
      <About />
      <Gallery />
      <Formone />
      <Client />
      <Formtwo />
      <Footer />
    </>
  );
}

export default Home;