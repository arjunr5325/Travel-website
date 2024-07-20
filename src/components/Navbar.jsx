
import Button from "./Button"
import {Link} from 'react-router-dom'
import { useState,useEffect} from 'react'
import './Navbar.css'


function Navbar() {
  const[click,setClick]=useState(false)
  const[button,setButton]=useState(true)

  function handleClick(){
    setClick(!click)
  }

  function change(){
    setClick(false)
  }

  function showButton(){
    if(window.innerWidth<=960){
      setButton(false)
  }else{
    setButton(true)
    }
  }

  useEffect(function () {
    showButton()
  },[])
  

  window.addEventListener("resize",showButton)

  return (
    <nav className='navbar'>
        <div className="navbar-container" >
        
            <Link to="/" className='navbar-logo' onCLick={change}>
            FLYT <i className="fa-solid fa-plane-departure"></i>
            </Link>
         </div>
         <div className="menu-icon" onClick={handleClick}>
          <i className={click? "fas fa-times" : "fas fa-bars" }></i>
          </div>
          <ul className={click?'nav-menu active':'nav-menu'}>
            <li className='nav-item'><Link to="/" className="nav-links" onClick={change}>Home</Link></li>
            <li className='nav-item'><Link to="/services" className="nav-links" onClick={change}>Services</Link></li>
            <li className='nav-item'><Link to="/Product" className="nav-links" onClick={change}>Product</Link></li>
            <li className='nav-item'><Link to="/Signup" className="nav-links-mobile" onClick={change}>Signup</Link></li>
            </ul>
      {button ? <Button bStyle='btn--outline' text="SIGN UP" to='/Signup'/>: null}

          


    </nav>

  )
}

export default Navbar