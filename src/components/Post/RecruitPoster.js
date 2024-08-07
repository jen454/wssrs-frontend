import React from 'react';
import styled from 'styled-components';
import recruitPoster from '../../assets/post/recruitPoster.svg';
import { FormatDate } from '../../util/FormatDate';

function RecruitPoster({ onClick, date }) {
  return (
    <Container onClick={onClick}>
      <Date>{FormatDate(date)}</Date>
      <Poster src={recruitPoster} />
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  cursor: pointer;
`;

const Date = styled.div`
  font-size: var(--font-size-lm);
  padding: 10px 15px;
  border: 0.5px solid var(--color-gray-500);
  border-bottom: none;
`;

const Poster = styled.img`
  width: 350px;
  height: 350px;
`;

export default RecruitPoster;
