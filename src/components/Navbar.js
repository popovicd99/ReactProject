import React, { useState } from 'react'
import Logo from '../img/logo.png'
import Menu from '../img/menu.png'
import { Link } from 'react-router-dom'
import '../styles/Navbar.css'

function Navbar() {
  const [show, setVisibility] = useState(false);

  const showHiddenLinks = () =>{
    setVisibility(!show);
  };

  return (
    <div className='navbar'>
        <div className='left' id={show ? "open" : "close"}>
            <img src={Logo} />
            <div className='links'>
                <Link to="/"> Home </Link>
                <Link to="/products"> Products </Link>
                <Link to="/about"> About </Link>
                <Link to="/contact"> Contact </Link>
            </div>
        </div>
        <div className='right'>
            <Link to="/"> Home </Link>
            <Link to="/products"> Products </Link>
            <Link to="/about"> About </Link>
            <Link to="/contact"> Contact </Link>
            <button onClick={showHiddenLinks}>
                <img src={Menu}/>
            </button>
        </div>
    </div>
  );
}

export default Navbar