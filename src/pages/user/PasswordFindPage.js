import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import ApplyInput from '../../components/Input/AuthInput';
import LargeBlueButton from '../../components/Button/LargeBlueButton';

function PasswordFindPage() {
  const [studentId, setStudentId] = useState('');
  const [email, setEmail] = useState('');
  const [studentIdValid, setStudentIdValid] = useState(true);
  const [emailValid, setEmailValid] = useState(true);
  const navigate = useNavigate();

  const onClickNextButton = () => {
    // 백엔드 요청 및 응답 처리
    navigate('/reset-password');
  };

  const onInputChange = (e) => {
    const { name, value } = e.target;
    if (name === 'studentId') {
      setStudentId(value);
    } else if (name === 'email') {
      setEmail(value);
    }
  };

  return (
    <Container>
      <ContentArea>
        <Text>비밀번호 찾기</Text>
        <InputArea>
          <ApplyInput
            name="studentId"
            value={studentId}
            onChange={onInputChange}
            placeholder="학번을 입력해주세요."
          />
          {!studentIdValid && <Alert>* 학번이 유효하지 않습니다!</Alert>}
        </InputArea>
        <InputArea>
          <ApplyInput
            name="email"
            value={email}
            onChange={onInputChange}
            placeholder="학교 메일을 입력해주세요."
          />
          {!emailValid && <Alert>* 이메일이 유효하지 않습니다!</Alert>}
        </InputArea>
        <LargeBlueButton onClick={onClickNextButton} title={'다음'} />
      </ContentArea>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
`;

const ContentArea = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 90%;
  max-width: 1040px;
  height: 700px;
  gap: 40px;
  border-radius: 50px;
  background-color: var(--background-color);
  box-sizing: border-box;
  box-shadow: 4px 4px 30px 0px rgba(0, 0, 0, 0.25);
`;

const InputArea = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
`;

const Text = styled.div`
  color: var(--color-gray-500);
  font-size: var(--font-size-xxl);
  font-weight: var(--font-weight-bold);
`;

const Alert = styled.div`
  display: flex;
  justify-content: flex-end;
  color: var(--color-red);
  font-size: var(--font-size-sm);
  font-weight: var(--font-weight-bold);
`;

export default PasswordFindPage;
