import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import ApplyInput from '../../components/Input/AuthInput';
import LargeBlueButton from '../../components/Button/LargeBlueButton';

function SignUpPage() {
  const [studentId, setStudentId] = useState('');
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const onClickSignUpButton = () => {
    navigate('/login');
  };

  const onInputChange = (e) => {
    const { name, value } = e.target;
    if (name === 'studentId') {
      setStudentId(value);
    } else if (name === 'email') {
      setEmail(value);
    } else if (name === 'name') {
      setName(value);
    } else if (name === 'password') {
      setPassword(value);
    }
  };

  return (
    <Container>
      <ContentArea>
        <Text>Sign Up</Text>
        <ApplyInput
          name="studentId"
          value={studentId}
          onChange={onInputChange}
          placeholder="학번을 입력해주세요."
        />
        <ApplyInput
          name="email"
          value={email}
          onChange={onInputChange}
          placeholder="학교 메일을 입력해주세요."
        />
        <ApplyInput
          name="name"
          value={name}
          onChange={onInputChange}
          placeholder="이름을 입력해주세요."
        />
        <ApplyInput
          name="password"
          value={password}
          onChange={onInputChange}
          placeholder="비밀번호를 입력해주세요."
        />
        <LargeBlueButton onClick={onClickSignUpButton} title={'회원가입'} />
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

const Text = styled.div`
  color: var(--color-gray-500);
  font-size: var(--font-size-xxl);
  font-weight: var(--font-weight-bold);
`;

export default SignUpPage;
