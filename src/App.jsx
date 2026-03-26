import './App.css'

// packages import
import { BrowserRouter,Routes,Route } from 'react-router'

// components import
import Home from './components/home'

// images import
import fb from './assets/icon-assets/fb.png'
import insta from './assets/icon-assets/insta.png'
import loc from './assets/icon-assets/loc.png'
import phone from './assets/icon-assets/phone.png'
import plate from './assets/icon-assets/plate.png'
import time from './assets/icon-assets/time.png'


function App() {

  return(
    <>
      <header>
        <div className="container-set">
          <div className="header-wrapper">
            <div>
              <div>
                <img src={time} alt="" />
                <span className='pop'>Open From 09:00 AM - 10:00 PM</span>
              </div>

              <div>
                <img src={loc} alt="" />
                <span className='pop'>Chennai, Tamil Nadu</span>
              </div>

              <div>
                <img src={phone} alt="" />
                <span className='pop'>+91 0000000000</span>
              </div>

              <div className='taste'>
                <img src={plate} alt="" />
                <span className='pop'>FREE SAMPLE TASTE</span>
              </div>

              <img src={insta} alt="" />

              <img src={fb} alt="" />
            </div>
          </div>
        </div>
      </header>

      <BrowserRouter>
       <Routes>
           <Route path='/' element={<Home/>} />
       </Routes>
      </BrowserRouter>

    </>
  )
}

export default App
