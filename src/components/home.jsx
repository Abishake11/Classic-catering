import './home.css'

// images import
import call from '../assets/home assets/call.png'


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
    </>
  )
}
export default Home;