import React, { useState } from 'react';
import styled from 'styled-components';

function ApplyInput({ name, value, onChange, placeholder }) {
  const [isFocused, setIsFocused] = useState(false);

  const onFocus = () => {
    setIsFocused(true);
  };

  const onBlur = () => {
    if (value === '') {
      setIsFocused(false);
    }
  };

  return (
    <Container>
      <Input
        type={
          name === 'password' || name === 'rePassword' ? 'password' : 'text'
        }
        name={name}
        value={value}
        onChange={onChange}
        placeholder={isFocused ? '' : placeholder}
        onFocus={onFocus}
        onBlur={onBlur}
      />
    </Container>
  );
}

const Container = styled.div``;

const Input = styled.input`
  height: 50px;
  padding: 10px 100px;
  font-size: var(--font-size-lm);
  text-align: center;
  box-sizing: border-box;
  border-radius: 20px;
  border-top: 1px solid var(--color-blue);
  border-right: 1px solid var(--color-blue);
  border-bottom: 1px solid var(--color-blue);
  border-left: 7px solid var(--color-blue);
`;

export default ApplyInput;
