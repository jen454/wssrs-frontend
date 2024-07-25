import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import styled from 'styled-components';
import ApplyInput from '../../components/Input/AuthInput';
import LargeBlueButton from '../../components/Button/LargeBlueButton';

function PasswordFindPage() {
  const [formData, setFormData] = useState({
    studentId: '',
    email: '',
  });
  const [studentIdValid, setStudentIdValid] = useState(true);
  const [emailValid, setEmailValid] = useState(true);
  const navigate = useNavigate();

  const onInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const onClickNextButton = async () => {
    try {
      const response = await axios.post('endPoint', formData);
      if (response.status === 200) {
        navigate('/reset-password');
      }
    } catch (error) {
      console.error('비밀번호 찾기', error);
      // 에러 처리 -> Valid 에러 처리 조건문 나누기
      setStudentIdValid(false);
      setEmailValid(false);
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
