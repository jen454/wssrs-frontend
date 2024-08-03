import { React, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { signUp } from '../../api/Auth';
import styled from 'styled-components';
import AuthInput from '../../components/Input/AuthInput';
import LargeBlueButton from '../../components/Button/LargeBlueButton';

function SignUpPage() {
  const [formData, setFormData] = useState({
    studentId: '',
    password: '',
    username: '',
    email: '',
  });
  const navigate = useNavigate();

  const onInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const validateForm = () => {
    const { studentId, password, username, email } = formData;
    if (!studentId || !password || !username || !email) {
      return '모든 필드를 채워주세요.';
    }
    return null;
  };

  const onClickSignUpButton = async () => {
    const validationError = validateForm();
    if (validationError) {
      alert(validationError);
      return;
    }

    try {
      const response = await signUp(formData);
      navigate('/sign-in');
    } catch (error) {
      if (error.response) {
        const { status, code, message } = error.response.data;
        switch (code) {
          case 'DUPLICATED_MEMBER': // AUTH-003
            alert(message);
            break;
          case 'MISSING_INFORMATION': // AUTH-004
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

  return (
    <Container>
      <ContentArea>
        <Text>Sign Up</Text>
        <AuthInput
          name="studentId"
          value={formData.studentId}
          onChange={onInputChange}
          placeholder="학번을 입력해주세요."
        />
        <AuthInput
          name="email"
          value={formData.email}
          onChange={onInputChange}
          placeholder="이메일을 입력해주세요."
        />
        <AuthInput
          name="username"
          value={formData.username}
          onChange={onInputChange}
          placeholder="이름을 입력해주세요."
        />
        <AuthInput
          name="password"
          value={formData.password}
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
