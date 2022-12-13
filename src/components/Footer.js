import React from 'react'
import Instagram from '../img/instagram.png'
import Facebook from '../img/facebook.png'
import Twitter from '../img/twitter.png'
import '../styles/Footer.css'
function Footer() {
  return (
    <div className='footer'>
        <div className='social'>
            <img src={Instagram}/><img src={Twitter}/><img src={Facebook}/>
        </div>
        <p> &copy; 2022 Danilo Popovic  </p>
    </div>
  )
}

export default Footer