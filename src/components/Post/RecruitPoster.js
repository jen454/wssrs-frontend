import React from 'react';
import styled from 'styled-components';
import recruitPoster from '../../assets/post/recruitPoster.svg';

function RecruitPoster({ onClick, date }) {
  return (
    <Container>
      <Date>2024년 7월 23일</Date>
      <Poster src={recruitPoster} />
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

const Date = styled.div`
  font-size: var(--font-size-lm);
  font-weight: var(--font-weight-regular);
  padding: 10px 15px;
  border: 0.5px solid var(--color-gray-500);
`;

const Poster = styled.img`
  width: 350px;
  height: 350px;
  cursor: pointer;
`;

export default RecruitPoster;
