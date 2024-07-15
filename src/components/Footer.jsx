
import Button from './Button'
import { Link } from 'react-router-dom';
import "./Footer.css"

function Footer() {
  return (
      <div className="footer-container">
          <div className="footer-subscription">
              <p className='footer-subscription-heading'>
                  Join the Adventure newsletter to receive our best vacation deals
              </p>
         
          <div className="input-areas">
              <form>
                  <input type="text" placeholder="Enter your email" className='footer-input'  />
              
          
          <Button bStyle='btn--outline' bSize='btn--medium' text="Subscribe" to='/Signup' />
        </form>
          </div>
          </div>
          <div className='footer-links'>
        <div className='footer-link-wrapper'>
          <div className='footer-link-items'>
            <h2>About Us</h2>
            <Link to='/sign-up'>How it works</Link>
            <Link to='/'>Testimonials</Link>
            <Link to='/'>Careers</Link>
            
            <Link to='/'>Terms of Service</Link>
          </div>
          <div className='footer-link-items'>
            <h2>Contact Us</h2>
            <Link to='/'>Contact</Link>
            <Link to='/'>Support</Link>
            <Link to='/'>Destinations</Link>
            
          </div>
        </div>
        <div className='footer-link-wrapper'>
          <div className='footer-link-items'>
            <h2>Videos</h2>
            <Link to='/'>Submit Video</Link>
            <Link to='/'>Ambassadors</Link>
            <Link to='/'>Agency</Link>
            
          </div>
          <div className='footer-link-items'>
            <h2>Social Media</h2>
            <Link to='/'>Instagram</Link>
            <Link to='/'>Facebook</Link>
            <Link to='/'>Youtube</Link>
            <Link to='/'>Twitter</Link>
          </div>
        </div>
      </div>
      <div className='social-media'>
        <div className='social-media-wrap'>
          <div className='footer-logo'>
            <Link to='/' className='social-logo'>
              FLYT
              <i className='fa-solid fa-plane-departure' />
            </Link>
          </div>
          <small className='website-rights'>FLYT © 2024</small>
          <div className='social-icons'>
            <Link
              className='social-icon-link facebook'
              to='/'

            >
              <i className='fab fa-facebook-f' />
            </Link>
            <Link
              className='social-icon-link instagram'
              to='/'

            >
              <i className='fab fa-instagram' />
            </Link>
            <Link
              className='social-icon-link youtube'
              to='/'
             
            >
              <i className='fab fa-youtube' />
            </Link>
            <Link
              className='social-icon-link twitter'
              to='/'

            >
              <i className='fab fa-twitter' />
            </Link>
            <Link
              className='social-icon-link twitter'
              to='/'
         
            >
              <i className='fab fa-linkedin' />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
          
          

          
   
  


export default Footer