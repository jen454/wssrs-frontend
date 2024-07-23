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
  border-radius: 20px;
  cursor: pointer;
`;

const Text = styled.div`
  color: var(--background-color);
  font-size: var(--font-size-lm);
  font-weight: var(--font-weight-medium);
`;

export default MediumBlueButton;
