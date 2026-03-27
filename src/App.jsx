import './App.css'

// packages import
import { BrowserRouter,Routes,Route } from 'react-router'

// components import
import Home from './components/home'
import Navbar from './components/navbar'

// images import
import fb from './assets/icon-assets/fb.png'
import insta from './assets/icon-assets/insta.png'
import plate from './assets/icon-assets/plate.png'


function App() {

  return(
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

      {/* navbar */}
      <Navbar/>

      <BrowserRouter>
       <Routes>
           <Route path='/' element={<Home/>} />
       </Routes>
      </BrowserRouter>

    </>
  )
}

export default App
