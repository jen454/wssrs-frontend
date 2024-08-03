import { React, useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { updatePassword } from '../../api/Auth';
import styled from 'styled-components';
import AuthInput from '../../components/Input/AuthInput';
import LargeBlueButton from '../../components/Button/LargeBlueButton';

function ResetPasswordPage() {
  const [formData, setFormData] = useState({
    newPassword: '',
    rePassword: '',
  });
  const [equalPassword, setEqualPassword] = useState(true);
  const navigate = useNavigate();
  const location = useLocation();
  const { accessToken } = location.state || {};

  const onInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const validateForm = () => {
    const { newPassword, rePassword } = formData;
    if (!newPassword || !rePassword) {
      return '모든 필드를 채워주세요.';
    }
    return null;
  };

  const onClickButton = async () => {
    const validationError = validateForm();
    if (validationError) {
      alert(validationError);
      return;
    }

    const { newPassword, rePassword } = formData;
    if (newPassword !== rePassword) {
      setEqualPassword(false);
      return;
    }

    try {
      const response = await updatePassword(newPassword, accessToken);
      navigate('/sign-in');
    } catch (error) {
      if (error.response) {
        const { status, code, message } = error.response.data;
        switch (code) {
          case 'MEMBER_NOT_FOUND': // AUTH-001
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
        <TextArea>
          <Text>비밀번호 재설정</Text>
          <SubText>새 비밀번호를 입력해주세요.</SubText>
        </TextArea>
        <AuthInput
          name="password"
          value={formData.password}
          onChange={onInputChange}
          placeholder="비밀번호를 입력해주세요."
        />
        <InputArea>
          <AuthInput
            name="rePassword"
            value={formData.rePassword}
            onChange={onInputChange}
            placeholder="다시 입력해주세요."
          />
          {!equalPassword && <Alert>* 비밀번호가 일치하지 않습니다!</Alert>}
        </InputArea>
        <LargeBlueButton onClick={onClickButton} title={'설정'} />
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

const TextArea = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 5px;
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

const SubText = styled.div`
  color: var(--color-gray-500);
  font-size: var(--font-size-md);
  font-weight: var(--font-weight-bold);
`;

const Alert = styled.div`
  display: flex;
  justify-content: flex-end;
  color: var(--color-red);
  font-size: var(--font-size-sm);
  font-weight: var(--font-weight-bold);
`;

export default ResetPasswordPage;
