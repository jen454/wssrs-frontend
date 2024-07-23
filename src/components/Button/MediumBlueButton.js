import React from 'react';
import styled from 'styled-components';

function MediumBlueButton({ onClick, title }) {
  return (
    <Container onClick={onClick}>
      <Text>{title}</Text>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 10px 30px;
  margin: auto;
  background-color: var(--color-blue);
  &:hover {
    background-color: var(--color-blue-hover);
  }
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
  border-radius: 20px;
  cursor: pointer;
`;

const Text = styled.div`
  color: var(--background-color);
  font-size: var(--font-size-lm);
  font-weight: var(--font-weight-bold);
`;

export default MediumBlueButton;
