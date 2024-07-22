import React from 'react';
import styled from 'styled-components';
import kmuLogo from '../assets/footer/kmuLogo.svg';
import instaLogo from '../assets/footer/instaLogo.svg';
import faceBookLogo from '../assets/footer/faceBookLogo.svg';
import twitterLogo from '../assets/footer/twitterLogo.svg';

function Header() {
  return (
    <Container>
      <FooterArea>
        <ContentArea>
          <a
            href="https://www.kookmin.ac.kr/user/index.do"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Logo src={kmuLogo} />
          </a>
          <PolicyArea>
            <Title>개인정보처리방침</Title>
            <Address>
              02707 서울특별시 성북구 정릉로 77 국민대학교 TEL 02.910.4114
            </Address>
            <Copyright>COPYRIGHT© 2024 WINK ALL RIGHTS RESERVED.</Copyright>
          </PolicyArea>
        </ContentArea>
        <InfoArea>
          <a
            href="https://www.instagram.com/kookmin.univ"
            target="_blank"
            rel="noopener noreferrer"
          >
            <InfoLogo src={instaLogo} />
          </a>
          <a
            href="https://www.facebook.com/kookmin.univ"
            target="_blank"
            rel="noopener noreferrer"
          >
            <InfoLogo src={faceBookLogo} />
          </a>
          <a
            href="https://x.com/kmu_tweet"
            target="_blank"
            rel="noopener noreferrer"
          >
            <InfoLogo src={twitterLogo} />
          </a>
        </InfoArea>
      </FooterArea>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 110px;
  background-color: var(--background-color);
  border-top: 0.5px solid var(--color-gray-500);
`;

const FooterArea = styled.div`
  display: flex;
  justify-content: space-between;
  @media screen and (max-width: 767px) {
    width: 100%;
  }
  @media screen and (min-width: 768px) {
    width: 1040px;
  }
`;

const ContentArea = styled.div`
  gap: 30px;
`;

const PolicyArea = styled.div`
  display: flex;
  flex-direction: column;
  align-itmes: center;
`;

const InfoArea = styled.div`
  display: flex;
  align-items: center;
  height: 35px;
  gap: 30px;
`;

const Logo = styled.img`
  width: 134px;
  height: 50px;
  cursor: pointer;
`;

const InfoLogo = styled.img`
  width: 30px;
  height: 30px;
  cursor: pointer;
`;

const Title = styled.div`
  font-size: var(--font-size-sm);
  color: var(--color-gray-500);
`;

const Address = styled.div`
  font-size: var(--font-size-sm);
  color: var(--color-gray-500);
`;

const Copyright = styled.div`
  font-size: var(--font-size-sm);
  color: var(--color-gray-500);
`;

export default Header;
