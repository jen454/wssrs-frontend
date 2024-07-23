import React from 'react';
import styled from 'styled-components';

function ApplyInput({ title, name, value, onChange, placeholder }) {
  return (
    <Container>
      <Label>{title}</Label>
      <Input
        type="text"
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
      />
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
`;

const Label = styled.div`
  font-size: var(--font-size-lm);
`;

const Input = styled.input`
  padding: 10px 20px;
  font-size: var(--font-size-lm);
  border: 1px solid var(--color-blue);
  border-radius: 5px;
`;

export default ApplyInput;
