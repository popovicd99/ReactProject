import React from 'react';
import { Link } from "react-router-dom";
import Background from '../img/background.jpg'
import '../styles/Home.css'

function Home() {
  return (
    <div className='home' style={{backgroundImage: `url(${Background})`}}>
      <div className='header'>
        <h1>SNKR shop</h1>
        <p>Just do it!</p>       
        <div className='container'>
          <Link to="/menu">
          <div className='browse'>Browse</div>
          </Link>
        </div>
        
      </div>
    </div>
  )
}

export default Home