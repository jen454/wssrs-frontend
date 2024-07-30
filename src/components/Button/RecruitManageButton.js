import React from 'react';
import styled from 'styled-components';

function RecruitManageButton({ onClick, title }) {
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
  padding: 9px 11px;
  background-color: var(--background-color);
  &:hover {
    background-color: var(--background-color-hover);
  }
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
  border: 1px solid var(--color-gray-100);
  border-radius: 10px;
  cursor: pointer;
`;

const Text = styled.div`
  font-size: var(--font-size-lm);
  font-weight: var(--font-weight-medium);
`;

export default RecruitManageButton;
