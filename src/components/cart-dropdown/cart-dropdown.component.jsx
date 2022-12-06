import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '../button/button.component';
import CartItem from '../cart-item/cart-item.component';
import { CartContext } from '../../contexts/cart.context';
import {
  CartDropDownContainer,
  EmptyMessage,
  CartItems,
} from './cart-dropdown.style';

const CartDropDown = () => {
  const { cartItems } = useContext(CartContext);
  const navigate = useNavigate();
  const gotoCheckoutHandler = () => navigate('/checkkout');
  return (
    <CartDropDownContainer>
      <CartItems>
        {cartItems.length ? (
          cartItems.map((item) => <CartItem key={item.id} cartItem={item} />)
        ) : (
          <EmptyMessage>Your cart is empty</EmptyMessage>
        )}
        <Button onClick={gotoCheckoutHandler}> Go to Chcekout</Button>
      </CartItems>
    </CartDropDownContainer>
  );
};

export default CartDropDown;
