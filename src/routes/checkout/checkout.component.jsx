import { useContext } from 'react';
import { CartContext } from '../../contexts/cart.context';
import './checkout.styles.scss';

const Checkout = () => {
  const { cartItems, addItemToCart } = useContext(CartContext);

  return (
    <div className='checkout-container'>
      <p>Checkout Page</p>
      <div>
        {
          cartItems.map(cartItem => {
            const { id, name, quantity, price, imageUrl } = cartItem;
            return (
              <div className='checkout-items-container' key={id}>
                <img src={imageUrl} alt={`${name}`} />
                <div className='checkout-details'>
                  <h2>{name}</h2>
                  <div className='quanitity-container'>
                    <span
                      className='quantity-btn'
                      onClick={() => console.log('decrease')}
                    >
                      decrement
                    </span>
                    <span>{quantity}</span>
                    <span
                      className='quantity-btn'
                      onClick={() => addItemToCart(cartItem)}
                    >
                      increment
                    </span>
                  </div>
                  <span>{price}</span>
                  <span onClick={() => console.log('remove')}>Remove</span>
                </div>
              </div>
            );
          })
        }
      </div>
    </div>
  );
};

export default Checkout;