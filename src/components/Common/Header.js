import React, { useState } from 'react';
import styled from 'styled-components';
import kmuLogo from '../assets/header/kmuLogo.svg';
import LanguageSelector from '../../util/LanguageSelector';
import logoutLogo from '../assets/header/logoutButton.svg';

function Header() {
  const [language, setLanguage] = useState('ko');

  const onClickLanguageChange = (lang) => {
    setLanguage(lang);
  };

  const translations = {
    ko: {
      coop: '| 생활협동조합',
    },
    en: {
      coop: '| Cooperative',
    },
    zh: {
      coop: '| 生活合作社',
    },
  };

  const transLanguage = translations[language];

  return (
    <Container>
      <HeaderArea>
        <LogoArea>
          <a
            href="https://www.kookmin.ac.kr/user/index.do"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Logo src={kmuLogo} />
          </a>
          <Text>{transLanguage.coop}</Text>
        </LogoArea>
        <InfoArea>
          <UserName>20223098 신진욱</UserName>
          <LanguageSelector onClickLanguageChange={onClickLanguageChange} />
          <LogLogo src={logoutLogo} />
        </InfoArea>
      </HeaderArea>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  width: 100%;
  background-color: var(--background-color);
  border-bottom: 0.5px solid var(--color-gray-500);
`;

const HeaderArea = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  max-width: 1040px;
  height: 100px;
`;

const LogoArea = styled.div`
  display: flex;
  height: 50px;
  align-items: center;
  justify-content: center;
`;

const InfoArea = styled.div`
  display: flex;
  align-items: center;
  height: 50px;
  padding: 0px 13px;
  gap: 10px;
  background-color: var(--color-yellow);
`;

const Logo = styled.img`
  width: 134px;
  height: 50px;
  cursor: pointer;
`;

const LogLogo = styled.img`
  width: 30px;
  height: 30px;
  cursor: pointer;
`;

const Text = styled.div`
  display: flex;
  align-items: center;
  font-size: var(--font-size-md);
  color: var(--color-gray-500);
  margin-left: 4px;
`;

const UserName = styled.div`
  font-size: var(--font-size-sm);
  color: var(--background-color);
  margin-right: 40px;
`;

export default Header;
