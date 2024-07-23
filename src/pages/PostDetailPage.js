import React from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import Header from '../components/Common/Header.js';
import Footer from '../components/Common/Footer.js';
import Category from '../components/Post/Category.js';
import ListButton from '../components/Button/ListButton.js';
import PostTitle from '../components/Post/PostTitle.js';
import recruitDetail from '../assets/post/recruitDetail.svg';

function PostDetailPage() {
  const navigate = useNavigate();

  const onClickNavigate = () => {
    navigate('/');
  };

  const onClickApplyButton = () => {
    navigate('/apply');
  };

  const postContent = `
  1. 모집 부문
  - 북악관 쿱스켓
  - 과학관 쿱스켓
  - 공학관 쿱스켓
  - 생활관 쿱스켓
  - 복지관 쿱스켓
  - 법학관 쿱스켓
  - 예술관 쿱스켓

  2. 지원자격 : 국민대학교 재학생(2024년 1학기 학부생 기준)

  3. 제출서류 : 재학증명서 , 통장사본

  4. 근로기간 : 2024.6.24.~2024.8.30.

  5. 결과발표 : 합격자 개별통보

  6. 신청방법 : 국민대학교 생활협동조합 홈페이지에서 지원 신청
  - 필수기입사항 : 지원코드, 연락처, 희망 요일, 조합원 가입 여부

  7. 기타사항
  (1) 사전교육은 근로시간으로 인정하며, 합격 통보 시 교육일정 협의 예정
  (2) 근로 시작일 및 종료일, 근로 시간 등은 지점 상황에 따라 변동 될 수 있음.
  (3) 일부 매장은 조기 마감 될 수 있음.
  `;

  return (
    <Container>
      <Header />
      <ContentArea>
        <Category />
        <Menu>
          <ListButton onClick={onClickNavigate} />
        </Menu>
        <PostArea>
          <Post src={recruitDetail} />
          <PostTextArea>
            <PostTitle title={'[샐활협동조합 근로학생 모집공고]'} />
            <TextArea value={postContent} readOnly />
            <ApplyButton onClick={onClickApplyButton}>
              <Text>지원하기</Text>
            </ApplyButton>
          </PostTextArea>
        </PostArea>
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
`;

const PostArea = styled.div`
  display: flex;
  width: 100%;
  height: 650px;
  justify-content: center;
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
  background-color: var(--color-gray-10);
`;

const PostTextArea = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
`;

const TextArea = styled.textarea`
  width: 100%;
  height: 520px;
  padding: 20px;
  border: none;
  resize: none;
  outline: none;
  background: transparent;
  font-size: var(--font-size-md);
  font-weight: var(--font-weight-regular);
  line-height: 1;
  overflow-y: auto;
  box-sizing: border-box;
  text-align: left;
`;

const Menu = styled.div`
  display: flex;
  justify-content: flex-end;
  padding: 6px 0px;
`;

const Post = styled.img`
  width: 550px;
  height: 650px;
  background-color: var(--background-color);
`;

const ApplyButton = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 10px 30px;
  margin: auto;
  background-color: var(--color-yellow);
  &:hover {
    background-color: var(--color-yellow-hover);
  }
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
  border-radius: 20px;
  cursor: pointer;
`;

const Text = styled.div`
  color: var(--background-color);
  font-size: var(--font-size-lm);
  font-weight: var(--font-weight-bold);
`;

export default PostDetailPage;
