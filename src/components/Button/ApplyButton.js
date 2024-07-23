import React from 'react';
import styled from 'styled-components';

function ApplyButton({ onClick }) {
  return (
    <Container onClick={onClick}>
      <Text>지원하기</Text>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 10px 30px;
  margin: auto;
  margin-top: 50px;
  background-color: var(--color-yellow);
  border-radius: 20px;
  cursor: pointer;
`;

const Text = styled.div`
  color: var(--background-color);
  font-size: var(--font-size-ls);
  font-weight: var(--font-weight-bold);
`;

export default ApplyButton;
