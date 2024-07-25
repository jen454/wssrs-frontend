import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import styled from 'styled-components';
import ApplyInput from '../../components/Input/AuthInput';
import LargeBlueButton from '../../components/Button/LargeBlueButton';

function SignInPage() {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });
  const navigate = useNavigate();

  const onInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const onClickSignInButton = async () => {
    try {
      const response = await axios.post('endPoint', formData);
      if (response.status === 200) {
        // 로그인 성공 처리
        navigate('/');
      }
    } catch (error) {
      console.error('로그인 에러', error);
      // 에러 처리
    }
  };

  const onClickSignUp = () => {
    navigate('/sign-up');
  };

  const onClickFindPassWord = () => {
    navigate('/find-password');
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
        <LargeBlueButton onClick={onClickSignInButton} title={'로그인'} />
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
