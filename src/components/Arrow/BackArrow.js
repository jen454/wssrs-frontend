import React from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import BackArrowIcon from '../../assets/post/BackArrowIcon.svg';

function BackArrow() {
  const navigate = useNavigate();
  return <Image src={BackArrowIcon} onClick={() => navigate(-1)} />;
}

const Image = styled.img`
  width: 40px;
  height: 40px;
  cursor: pointer;
`;

export default BackArrow;
