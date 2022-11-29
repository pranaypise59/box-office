import React from 'react';
import { useLocation } from 'react-router-dom';
import { LinkStyled, NavList } from './Navbar.styled';

const Navbar = () => {
  const location = useLocation().pathname
  return (
    <div>
      <NavList>
        <li><LinkStyled to='/' className={location === '/'?'active':''} >Home</LinkStyled></li>
        <li><LinkStyled to='/starred' className={location === '/starred'?'active':''}  >Starred</LinkStyled></li>
      </NavList>
    </div>
  );
};

export default Navbar;
