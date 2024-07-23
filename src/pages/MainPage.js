import React from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import Header from '../components/Common/Header.js';
import Footer from '../components/Common/Footer.js';
import RecruitPoster from '../components/Post/RecruitPoster.js';

function MainPage() {
  const navigate = useNavigate();

  const onClickPost = () => {
    navigate('/post-detail');
  };

  return (
    <Container>
      <Header />
      <ContentArea>
        <RecruitPoster onClick={onClickPost} />
        <RecruitPoster onClick={onClickPost} />
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
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export default MainPage;
