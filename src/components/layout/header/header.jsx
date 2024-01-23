import React from 'react';
import { HeaderWrapper, HeaderLink, HeaderContainer } from './styles';

const Header = () => {
  return (
    <HeaderWrapper>
      <HeaderContainer>
        <nav>
          <HeaderLink to="/">Projects</HeaderLink>
          <HeaderLink to="/tasks">Tasks</HeaderLink>
        </nav>
      </HeaderContainer>
    </HeaderWrapper>
  );
};

export default Header;
