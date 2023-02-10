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
        <span class="badge">{cartItems.length}</span>
        </> 
        </Link>
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