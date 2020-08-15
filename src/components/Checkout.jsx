import React from 'react';
import { useStateValue } from './StateProvider';
import './Checkout.css';
import CheckoutProduct from './CheckoutProduct';

const Checkout = () => {
  const [{ basket }, dispatch] = useStateValue();
  return (
    <div className="checkout">
      <img
        className="checkout__ad"
        src="https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg"
        alt=""
      />
      {basket?.length === 0 ? (
        <div>
          <h2>
            You have no items in your basket. To buy one or more items, click
            "Add to basket" next to the item.
          </h2>
        </div>
      ) : (
        <div>
          <h2 className="checkout__title">Your Shopping Basket</h2>
          {/* LIst out all of the Checkout Products */}
          {basket.map((item) => (
            <CheckoutProduct
              key={item.id}
              id={item.id}
              title={item.title}
              image={item.image}
              price={item.price}
              rating={item.rating}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default Checkout;
