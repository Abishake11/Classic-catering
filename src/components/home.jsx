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


function Home(){
  return(
    <>
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

      <Service/>
      <About/>
      <Gallery/>
      <Formone/>
      <Client/>
      <Formtwo/>
      <Footer/>

    </>
  )
}
export default Home;