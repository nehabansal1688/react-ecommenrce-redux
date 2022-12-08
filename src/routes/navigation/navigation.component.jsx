import React, { useContext } from 'react';
import { useSelector } from 'react-redux';
import { Fragment } from 'react';
import { Outlet, Link } from 'react-router-dom';
import SVG from 'react-inlinesvg';

// import './navigation.styles.scss';
import { signOutUser } from '../../utils/firebase/firebase.utils';
import CardIcon from '../../components/card-icon/card-icon.component';
import CartDropDown from '../../components/cart-dropdown/cart-dropdown.component';
import { CartContext } from '../../contexts/cart.context';
import {
  NavigationContainer,
  LogoContainer,
  NavLink,
  NavLinkContainer,
} from './navigation.styles';
import { selectCurrentUser } from '../../store/user/user.selector';

const Navigation = () => {
  //whenever we use context it makes the component rerun the complete code. doesnt mattter if the code has actualy changed or not. code will re run. re render depends upon change in any parameter.

  //if 100 component are using UserContext that mean code for those 100 components will run on any single component change  which can be a performance bottle neck
  const { isCartOpen } = useContext(CartContext);
  const currentUser = useSelector(selectCurrentUser);
  const signOutHandler = async () => {
    await signOutUser();
  };
  return (
    <Fragment>
      <NavigationContainer>
        <LogoContainer to="/">
          <SVG
            className="shopping-icon"
            src={require('../../assets/crown.svg')}
            width={50}
          />
        </LogoContainer>
        <NavLinkContainer>
          <NavLink to="/shop">SHOP</NavLink>
          {currentUser ? (
            <NavLink as="span" onClick={signOutHandler}>
              Sign Out
            </NavLink>
          ) : (
            <NavLink to="/authentication">SIGN IN</NavLink>
          )}
          <CardIcon />
        </NavLinkContainer>
        {isCartOpen && <CartDropDown />}
      </NavigationContainer>
      <Outlet />
    </Fragment>
  );
};

export default Navigation;
