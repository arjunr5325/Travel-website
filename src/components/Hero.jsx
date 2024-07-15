
import Button from "./Button"
import './Hero.css'
import '../App.css'

function lol() {
    return (
        <i className='far fa-play-circle'></i>
    )
}

function Hero() {
  return (
      <div className='hero-container'>
          <video src="\videos\video-1.mp4" autoPlay loop muted />
          <h1>ADVENTURE AWAITS</h1>
          <p>What are you waiting for</p>
          <div className='hero-btns'>
            <Button className="btns" bStyle='btn--outline' bSize='btn--large' text="GET STARTED" to='/Signup'/>
            <Button className="btns" bStyle='btn--outline' bSize='btn--large' text="WATCH TRAILER" to='/Signup' k={lol()}> </Button>
          </div>


    </div>
  )
}

export default Hero