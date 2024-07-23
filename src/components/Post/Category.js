import React from 'react';
import styled from 'styled-components';

function Category() {
  return (
    <Container>
      <Text>근로신청</Text>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  align-items: center;
  height: 80px;
  padding: 0px 40px;
  border-bottom: 1px solid var(--color-gray-500);
  background-color: var(--background-color);
`;

const Text = styled.div`
  font-size: var(--font-size-xl);
  font-weight: var(--font-weight-regular);
`;

export default Category;
