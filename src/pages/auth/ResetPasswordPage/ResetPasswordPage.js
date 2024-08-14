import { React, useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { updatePassword } from '../../../api/Auth';
import AuthInput from '../../../components/Input/AuthInput';
import LargeBlueButton from '../../../components/Button/LargeBlueButton';
import {
  Container,
  ContentArea,
  InputArea,
  TextArea,
  Text,
  Alert,
} from './ResetPasswordPage.styles';

export default function ResetPasswordPage() {
  const [formData, setFormData] = useState({
    newPassword: '',
    rePassword: '',
  });
  const [equalPassword, setEqualPassword] = useState(true);
  const navigate = useNavigate();
  const location = useLocation();
  const { accessToken } = location.state || {};

  const textItems = [
    { content: '비밀번호 재설정', size: 'xxl' },
    { content: '새 비밀번호를 입력해주세요.', size: 'md' },
  ];

  const inputFields = [
    { name: 'newPassword', placeholder: '비밀번호를 입력해주세요.' },
    { name: 'rePassword', placeholder: '다시 입력해주세요.' },
  ];

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
      await updatePassword(newPassword, accessToken);
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
          {textItems.map(({ content, size }, index) => (
            <Text key={index} size={size}>
              {content}
            </Text>
          ))}
        </TextArea>
        <InputArea gap="5px">
          <InputArea gap="40px">
            {inputFields.map((field, index) => (
              <AuthInput
                key={index}
                name={field.name}
                value={formData[field.name]}
                onChange={onInputChange}
                placeholder={field.placeholder}
              />
            ))}
          </InputArea>
          {!equalPassword && <Alert>* 비밀번호가 일치하지 않습니다!</Alert>}
        </InputArea>
        <LargeBlueButton onClick={onClickButton} title={'설정'} />
      </ContentArea>
    </Container>
  );
}
