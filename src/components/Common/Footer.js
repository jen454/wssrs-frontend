import React from 'react';
import styled from 'styled-components';
import kmuLogo from '../../assets/footer/kmuLogo.svg';
import instaLogo from '../../assets/footer/instaLogo.svg';
import faceBookLogo from '../../assets/footer/faceBookLogo.svg';
import twitterLogo from '../../assets/footer/twitterLogo.svg';

function Footer() {
  const socialMediaLinks = [
    { href: 'https://www.instagram.com/kookmin.univ', src: instaLogo },
    { href: 'https://www.facebook.com/kookmin.univ', src: faceBookLogo },
    { href: 'https://x.com/kmu_tweet', src: twitterLogo },
  ];

  const policyTexts = [
    '개인정보처리방침',
    '02707 서울특별시 성북구 정릉로 77 국민대학교 TEL 02.910.4114',
    'COPYRIGHT© 2024 WINK ALL RIGHTS RESERVED.',
  ];

  return (
    <Container>
      <ContentArea>
        <a
          href="https://www.kookmin.ac.kr/user/index.do"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image src={kmuLogo} width="134px" height="50px" />
        </a>
        <PolicyArea>
          {policyTexts.map((text, index) => (
            <SmallMediumText key={index}>{text}</SmallMediumText>
          ))}
        </PolicyArea>
      </ContentArea>
      <InfoArea>
        {socialMediaLinks.map((link, index) => (
          <a
            key={index}
            href={link.href}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image src={link.src} width="30px" height="30px" />
          </a>
        ))}
      </InfoArea>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  max-width: 1040px;
  height: 110px;
  background-color: var(--background-color);
  border-top: 0.5px solid var(--color-gray-500);
`;

const ContentArea = styled.div`
  display: flex;
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
  gap: 30px;
`;

const Image = styled.img`
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  cursor: pointer;
`;

const SmallMediumText = styled.div`
  font-size: var(--font-size-sm);
  color: var(--color-gray-500);
`;

export default Footer;
