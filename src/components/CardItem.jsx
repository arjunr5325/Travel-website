/* eslint-disable react/prop-types */
import { Link } from 'react-router-dom';

function CardItem(props) {
  return (
    
      <li className='cards__item'>
        <Link className='cards__item__link' to={props.path}>
          <div className='cards__item__pic-wrap' data-category={props.label}>
            <img
              className='cards__item__img'
              alt='Travel Image'
              src={props.src}
            />
          </div>
          <div className='cards__item__info'>
            <h5 className='cards__item__text'>{props.text}</h5>
          </div>
        </Link>
      </li>
   
  );
}

export default CardItem;