import { React, useState } from 'react';
import styled from 'styled-components';
import koreanLogo from '../assets/header/koreanLogo.svg';
import englishLogo from '../assets/header/englishLogo.svg';
import chineseLogo from '../assets/header/chineseLogo.svg';

function LanguageSelector({ onClickLanguageChange }) {
  const [isDropdownVisible, setDropdownVisible] = useState(false);
  const [selectedLogo, setSelectedLogo] = useState(koreanLogo);

  const toggleDropdown = () => {
    setDropdownVisible(!isDropdownVisible);
  };

  const onClickLogoChange = (logo, lang) => {
    setSelectedLogo(logo);
    setDropdownVisible(false);
    onClickLanguageChange(lang);
  };

  const languages = [
    { logo: koreanLogo, lang: 'ko', text: '한국어' },
    { logo: englishLogo, lang: 'en', text: 'English' },
    { logo: chineseLogo, lang: 'zh', text: '汉语' },
  ];

  return (
    <Container>
      <TransLogo src={selectedLogo} onClick={toggleDropdown} />
      {isDropdownVisible && (
        <Dropdown>
          {languages.map(({ logo, lang, text }) => (
            <DropdownItem
              key={lang}
              onClick={() => onClickLogoChange(logo, lang)}
            >
              {text}
            </DropdownItem>
          ))}
        </Dropdown>
      )}
    </Container>
  );
}

const Container = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
`;

const TransLogo = styled.img`
  width: 66px;
  height: 26px;
  cursor: pointer;
`;

const Dropdown = styled.div`
  position: absolute;
  top: 30px;
  left: 0px;
  display: flex;
  flex-direction: column;
  background-color: var(--background-color);
  border: 1px solid var(--color-gray-200);
  box-shadow: 0 2px 4px var(--color-gray-100);
`;

const DropdownItem = styled.div`
  padding: 5px;
  cursor: pointer;
  font-size: var(--font-size-xs);
  &:hover {
    background-color: var(--color-gray-100);
  }
`;

export default LanguageSelector;
