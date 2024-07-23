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
  padding: 8px 12px;
  gap: 5px;
  background-color: var(--background-color);
  border: 1px solid var(--color-gray-200);
  cursor: pointer;
`;

const MenuIcon = styled.img`
  width: 24px;
  height: 19px;
`;

const Text = styled.div`
  font-size: var(--font-size-lm);
`;

export default ListButton;
