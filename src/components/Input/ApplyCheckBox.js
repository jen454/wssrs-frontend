import React from 'react';
import styled from 'styled-components';

function ApplyCheckBox({ value, checked, onChange, label }) {
  return (
    <Container>
      <Input
        type="checkbox"
        value={value}
        checked={checked}
        onChange={onChange}
      />
      {label}
    </Container>
  );
}

const Container = styled.label`
  display: flex;
  align-items: center;
  font-size: var(--font-size-lm);
  gap: 3px;
`;

const Input = styled.input`
  margin: 0;
`;

export default ApplyCheckBox;
