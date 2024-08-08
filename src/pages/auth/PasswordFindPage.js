import { React, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { findMember } from '../../api/Auth';
import styled from 'styled-components';
import AuthInput from '../../components/Input/AuthInput';
import LargeBlueButton from '../../components/Button/LargeBlueButton';

export default function PasswordFindPage() {
  const [formData, setFormData] = useState({
    email: '',
    studentId: '',
  });
  const [userInfoValid, setUserInfoValid] = useState(true);
  const navigate = useNavigate();

  const onInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const validateForm = () => {
    const { email, studentId } = formData;
    if (!email || !studentId) {
      return '모든 필드를 채워주세요.';
    }
    return null;
  };

  const onClickNextButton = async () => {
    const validationError = validateForm();
    if (validationError) {
      alert(validationError);
      return;
    }

    try {
      const response = await findMember(formData);
      if (response.accessToken && !response.refreshToken) {
        const { accessToken, refreshToken } = response;
        navigate('/reset-password', { state: { accessToken, refreshToken } });
      }
    } catch (error) {
      if (error.response) {
        const { status, code, message } = error.response.data;
        switch (code) {
          case 'MEMBER_NOT_FOUND': // AUTH-001
            setUserInfoValid(false);
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
        <Text>비밀번호 찾기</Text>
        <AuthInput
          name="studentId"
          value={formData.studentId}
          onChange={onInputChange}
          placeholder="학번을 입력해주세요."
        />
        <InputArea>
          <AuthInput
            name="email"
            value={formData.email}
            onChange={onInputChange}
            placeholder="이메일을 입력해주세요."
          />
          {!userInfoValid && <Alert>* 사용자 정보가 일치하지 않습니다!</Alert>}
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
