import React from 'react';
import kmuLogo from '../assets/header/kmuLogo.svg';
import styled from 'styled-components';

function Header() {
  return (
    <Container>
      <HeaderArea>
        <LogoArea>
          <Logo src={kmuLogo} />
          <Text>| 생활협동조합</Text>
        </LogoArea>
      </HeaderArea>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100px;
  background-color: var(--background-color);
  border-bottom: 0.5px solid var(--color-gray-500);
`;

const HeaderArea = styled.div`
  display: flex;
  justify-content: space-between;
  @media screen and (max-width: 767px) {
    width: 100%;
  }
  @media screen and (min-width: 768px) {
    width: 1040px;
  }
`;

const LogoArea = styled.div`
  display: flex;
  justify-content: center;
`;

const UserArea = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Logo = styled.img`
  width: 144px;
  height: 50px;
`;

const Text = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: var(--font-size-md);
  color: var(--color-gray-500);
`;

export default Header;
