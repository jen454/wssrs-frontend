import React from 'react';
import styled from 'styled-components';
import Menu from '../../assets/post/menu.svg';

function ListButton({ onClick }) {
  return (
    <Container onClick={onClick}>
      <MenuIcon src={Menu} />
      <Text>목록</Text>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 10px 17px;
  gap: 10px;
  background-color: var(--background-color);
  border: 1px solid var(--color-gray-200);
  backdrop-filter: blur(2px);
  cursor: pointer;
`;

const MenuIcon = styled.img`
  width: 24px;
  height: 19px;
`;

const Text = styled.div`
  font-size: var(--font-size-lm);
  font-weight: var(--font-weight-regular);
`;

export default ListButton;
