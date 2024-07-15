import React from 'react'
import Button from '../Button'
import { Link } from 'react-router-dom'

import "./Signup.css"



function Signup() {
    
    return (
        <div className="container1">
            <div className='child'>
            
                <h1>Signup</h1>
                
            <form>
                <div className="inpy">
                    <input type="text" placeholder="Enter your name" className='' />
                    <input type="text" placeholder="Enter your email" className='' />
                    <input type="password" placeholder="Enter your password" className='' />
                    <input type="password" placeholder="confirm your password" className='' />
                    


                  
                    <Button bStyle='btn--outline' bSize='btn--medium' text="Register" to='/'/>
                    
                    

                </div>
                </form>
                </div>



        </div>
      

  )
}

export default Signup