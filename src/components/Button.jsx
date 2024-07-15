/* eslint-disable react/prop-types */

import { Link } from 'react-router-dom'
import './Button.css'
const STYLES= ['btn--primary', 'btn--outline']
const SIZES = ['btn--medium', 'btn--large']

function Button(props){
    const buttonStyle=STYLES.includes(props.bStyle)?props.bStyle:STYLES[0]
    const buttonSize=SIZES.includes(props.bSize)?props.bSize:SIZES[0]
    return(
        <Link to={props.to} className='btn-mobile'>
            <button className={`btn ${buttonStyle} ${buttonSize}`} onClick={props.onClick} type={props.type}>{props.text} { props.k}</button>
            {console.log(props.type)}
        </Link>
    )


}
export default Button

