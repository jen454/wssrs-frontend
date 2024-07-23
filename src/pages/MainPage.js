import React from 'react';
import styled from 'styled-components';
import Header from '../components/Header.js';
import Footer from '../components/Footer.js';
import RecruitPoster from '../components/Post/RecruitPoster.js';

function MainPage() {
  return (
    <Container>
      <Header />
      <ContentArea>
        <RecruitPoster />
        <RecruitPoster />
        <RecruitPoster />
      </ContentArea>
      <Footer />
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;

const ContentArea = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  align-items: center;
`;

export default MainPage;
