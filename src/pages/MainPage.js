import React from 'react';
import styled from 'styled-components';
import Header from '../components/Header.js';
import Footer from '../components/Footer.js';

function MainPage() {
  return (
    <Container>
      <Header />
      <Contents>1</Contents>
      <Footer />
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;

const Contents = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
`;

export default MainPage;
