import { React, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { login } from '../../api/Auth';
import { useCookies } from 'react-cookie';
import { useSetRecoilState } from 'recoil';
import styled from 'styled-components';
import AuthInput from '../../components/Input/AuthInput';
import LargeBlueButton from '../../components/Button/LargeBlueButton';
import userState from '../../recoil/userState';

function SignInPage() {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });
  const [cookies, setCookie] = useCookies(['accessToken', 'refreshToken']);
  const setUser = useSetRecoilState(userState);
  const navigate = useNavigate();

  const onInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const validateForm = () => {
    const { email, password } = formData;
    if (!email || !password) {
      return '모든 필드를 채워주세요.';
    }
    return null;
  };

  const onClickSignInButton = async () => {
    const validationError = validateForm();
    if (validationError) {
      alert(validationError);
      return;
    }

    try {
      const response = await login(formData);
      setCookie('accessToken', response.accessToken);
      setCookie('refreshToken', response.refreshToken);
      setUser({
        studentId: response.studentId,
        userName: response.username,
        email: formData.email,
        isAuthenticated: true,
      });
      if (formData.email === 'admin' && formData.password === 'admin12!@') {
        navigate('/recruit-manage');
      } else {
        navigate('/');
      }
    } catch (error) {
      if (error.response) {
        const { status, code, message } = error.response.data;
        switch (code) {
          case 'MEMBER_NOT_FOUND': // AUTH-001
            alert(message);
            break;
          case 'INVALID_PASSWORD': // AUTH-002
            alert(message);
            break;
          default:
            switch (status) {
              case 400:
                alert('잘못된 요청입니다. 입력한 정보를 확인해 주세요.');
                break;
              case 404:
                alert('요청한 자원을 찾을 수 없습니다.');
                break;
              case 500:
                alert('서버 오류가 발생했습니다. 나중에 다시 시도해주세요.');
                break;
              default:
                alert('서버 오류가 발생했습니다. 나중에 다시 시도해주세요.');
                break;
            }
        }
      } else {
        alert('네트워크 오류가 발생했습니다. 인터넷 연결을 확인해주세요.');
      }
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
        <AuthInput
          name="email"
          value={formData.email}
          onChange={onInputChange}
          placeholder="이메일을 입력해주세요."
        />
        <AuthInput
          name="password"
          value={formData.password}
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
