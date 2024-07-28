import { React, useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { updatePassword } from '../../api/Auth';
import styled from 'styled-components';
import ApplyInput from '../../components/Input/AuthInput';
import LargeBlueButton from '../../components/Button/LargeBlueButton';

function ResetPasswordPage() {
  const [formData, setFormData] = useState({
    password: '',
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

  const onClickButton = async () => {
    const { password, rePassword } = formData;
    if (password !== rePassword) {
      setEqualPassword(false);
      return;
    }

    try {
      const response = await updatePassword(password, accessToken);
      if (response.msg) {
        navigate('/sign-in');
      }
    } catch (error) {
      console.error('비밀번호 재설정 오류', error);
    }
  };

  return (
    <Container>
      <ContentArea>
        <TextArea>
          <Text>비밀번호 재설정</Text>
          <SubText>새 비밀번호를 입력해주세요.</SubText>
        </TextArea>
        <ApplyInput
          name="password"
          value={password}
          onChange={onInputChange}
          placeholder="비밀번호를 입력해주세요."
        />
        <InputArea>
          <ApplyInput
            name="rePassword"
            value={rePassword}
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
