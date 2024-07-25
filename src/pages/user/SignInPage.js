import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import ApplyInput from '../../components/Input/AuthInput';
import LargeBlueButton from '../../components/Button/LargeBlueButton';

function SignInPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const onClickSignUpButton = () => {
    // api 연결
    navigate('/');
  };

  const onClickSignUp = () => {
    navigate('/sign-up');
  };

  const onClickFindPassWord = () => {
    navigate('/find-password');
  };

  const onInputChange = (e) => {
    const { name, value } = e.target;
    if (name === 'email') {
      setEmail(value);
    } else if (name === 'password') {
      setPassword(value);
    }
  };

  return (
    <Container>
      <ContentArea>
        <Text>Log In</Text>
        <ApplyInput
          name="email"
          value={email}
          onChange={onInputChange}
          placeholder="학교 메일을 입력해주세요."
        />
        <ApplyInput
          name="password"
          value={password}
          onChange={onInputChange}
          placeholder="비밀번호를 입력해주세요."
        />
        <UserAuthArea>
          <UserAuth onClick={onClickSignUp}>회원가입</UserAuth>
          <UserAuth onClick={onClickFindPassWord}>비밀번호 찾기</UserAuth>
        </UserAuthArea>
        <LargeBlueButton onClick={onClickSignUpButton} title={'로그인'} />
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
  gap: 30px;
  border-radius: 50px;
  background-color: var(--background-color);
  box-sizing: border-box;
  box-shadow: 4px 4px 30px 0px rgba(0, 0, 0, 0.25);
`;

const UserAuthArea = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  background-color: var(--background-color);
`;

const Text = styled.div`
  color: var(--color-gray-500);
  font-size: var(--font-size-xxl);
  font-weight: var(--font-weight-bold);
`;

const UserAuth = styled.div`
  color: var(--color-gray-500);
  &:hover {
    color: var(--color-gray-hover);
  }
  font-size: var(--font-size-sm);
  font-weight: var(--font-weight-bold);
  cursor: pointer;
`;

export default SignInPage;
