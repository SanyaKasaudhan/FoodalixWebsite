import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../../../assets/logo.jpg'
const Navbar = () => {
  return (
    <>
      {/* Navbar start */}
     <nav className='bg-orange-200'>
      <div className='navbar'>
      <img src={logo} alt="logo" className='nav-logo' />
      <ul className='nav-head'>
        <Link className='nav_link' to="/">Home</Link>
        <Link className='nav_link' to="/about">About </Link>
      </ul>
      <div className='nav-btn'>
        <button className='nav-signin'>Sign In</button>
        <button  className='nav-signin'>Register</button>
      </div>
      </div>
     </nav>
     
      {/* Navbar ends */}
    </>
  )
}

export default Navbar