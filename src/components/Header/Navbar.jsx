import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../../../assets/logo.jpg'
import {useSelector} from 'react-redux'
const Navbar = () => {
  const cartItems=useSelector(store=> store.cart.items)
  return (
    <>
      {/* Navbar start */}
     <nav className='navbar-back'>
      <div className='navbar'>
      <img src={logo} alt="logo" className='nav-logo' />
      
      <ul className='nav-head'>
        <Link className='nav_link' to="/">Home</Link>
        <Link className='nav_link' to="/about">About </Link>
        <Link className='nav_link' to="/instamart">Instamart </Link>
        <Link className='nav_link cart-length' to="/cart"><>
        <i className="fa fa-shopping-cart" style={{fontSize:"25px"}}></i> 
        <span className="badge">{cartItems.length}</span>
        </> 
        </Link>
      </ul>
      <div className='nav-btn'>
      <button className="button-71 reg" role="button">Register</button>
      <button className="button-71 log" role="button">Login</button>
      </div>
      </div>
     </nav>
     
      {/* Navbar ends */}
    </>
  )
}

export default Navbar