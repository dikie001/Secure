import React, { useState } from 'react';
import './Hero.css';
import { FaTimes } from 'react-icons/fa';


const Hero = () => {
  const [isClicked, setIsClicked] = useState(false)
  const seeMore =()=>{
    setIsClicked(!isClicked)
  }
  return (
    <div className='hero '>
        <div className="container">
            <div className="content">
                <h1 className='font-semibold'>Data</h1>
                <h1 className='blue font-semibold'>Secured</h1>
                <h1 className='font-semibold'>Protection</h1>
                <div><button onClick={seeMore}>See More</button></div>
                <div className={isClicked? "display":"nullDisplay"}>
                  <FaTimes className='icon' onClick={()=>setIsClicked(!isClicked)}/>
                    <div className="content">
                  <h2 className='font-semibold text-white relative'>Bringing Lost Data Back to Life</h2>
                  <p className='text-white font-semibold'>Your Data is valuable, and losing it can be frustrating, if not 
                    devastating. Thats why <span>Secured</span> is here to provide fast 
                    secure, and reliable data recovery solutions. Whether it's personal files
                    or business data, we help you get what matters most. <br />
                    Need help? We've got You covered
                    <button>Get Started</button>
                    
                  </p>
                  </div>
                </div>
            </div>
        </div>
    </div>
  )
}
export default Hero
