import React, { useContext } from 'react';
import { CartIconContainer, ShoppingIcon, ItemCount } from './card-icon.style';
import { CartContext } from '../../contexts/cart.context';

const CartIcon = () => {
  const { isCartOpen, setIsCartOpen, cartCount } = useContext(CartContext);
  const cartClickHandler = () => setIsCartOpen(!isCartOpen);
  return (
    <CartIconContainer onClick={cartClickHandler}>
      <ShoppingIcon
        className="shopping-icon"
        src={require('../../assets/shopping-bag.svg')}
        width={30}
      />
      <ItemCount>{cartCount}</ItemCount>
    </CartIconContainer>
  );
};

export default CartIcon;
