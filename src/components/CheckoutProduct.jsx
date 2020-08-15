import React from 'react';
import './CheckoutProduct.css';
import { useStateValue } from './StateProvider';

const CheckoutProduct = ({ id, title, price, rating, image }) => {
  const [{ basket }, dispatch] = useStateValue();

  const removeFromBasket = () => {
    //  * remove item from basket
    dispatch({
      type: 'REMOVE_FROM_BASKET',
      id: id,
    });
  };
  return (
    <div className="checkoutProduct">
      <img className="checkoutProduct__image" src={image} alt="" />

      <div className="checkoutProduct__info">
        <p className="checkoutPorduct__title">{title}</p>
        <p className="checkoutProduct__price">
          <small>$</small>
          <strong>{price}</strong>
        </p>
        <div className="checkoutProduct__rating">
          {Array(rating)
            .fill()
            .map((_, i) => (
              <span
                key={'key-' + (i + 100)}
                aria-label="stars"
                aria-labelledby="stars"
                role="img"
              >
                ⭐️
              </span>
            ))}
        </div>
        <button onClick={removeFromBasket}>Remove from basket</button>
      </div>
    </div>
  );
};

export default CheckoutProduct;
