import React from 'react';
import styled from 'styled-components';

function PostTitle({ title }) {
  return <Container>{title}</Container>;
}

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 43px;
  background-color: var(--color-gray-200);
  font-size: var(--font-size-lm);
  font-weight: var(--font-weight-regular);
`;

export default PostTitle;
