import React from 'react';
import styled from 'styled-components';

function Category() {
  return <Container>근로신청</Container>;
}

const Container = styled.div`
  display: flex;
  align-items: center;
  height: 60px;
  padding: 0px 40px;
  border-bottom: 1px solid var(--color-gray-500);
  background-color: var(--background-color);
  font-size: var(--font-size-lr);
`;

export default Category;
