import { React, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { signUp } from '../../../api/Auth';
import AuthInput from '../../../components/Input/AuthInput';
import LargeBlueButton from '../../../components/Button/LargeBlueButton';
import { Container, ContentArea, Text } from './SignUpPage.styles';

export default function SignUpPage() {
  const [formData, setFormData] = useState({
    studentId: '',
    password: '',
    username: '',
    email: '',
  });
  const navigate = useNavigate();

  const inputFields = [
    { name: 'studentId', placeholder: '학번을 입력해주세요.' },
    { name: 'email', placeholder: '이메일을 입력해주세요.' },
    { name: 'username', placeholder: '이름을 입력해주세요.' },
    { name: 'password', placeholder: '비밀번호를 입력해주세요.' },
  ];

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
      await signUp(formData);
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
        {inputFields.map((field, index) => (
          <AuthInput
            key={index}
            name={field.name}
            value={formData[field.name]}
            onChange={onInputChange}
            placeholder={field.placeholder}
          />
        ))}
        <LargeBlueButton onClick={onClickSignUpButton} title={'회원가입'} />
      </ContentArea>
    </Container>
  );
}
