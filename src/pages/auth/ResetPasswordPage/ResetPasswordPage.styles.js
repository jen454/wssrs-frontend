import styled from 'styled-components';
import { FlexColumn } from '../../../components/Styles/Flex.styles';
import {
  AuthContainer,
  AuthContentArea,
  AuthText,
  AuthAlert,
} from '../../../components/Styles/Auth.styles';

export const Container = styled(AuthContainer)``;

export const ContentArea = styled(AuthContentArea)``;

export const InputArea = styled(FlexColumn)`
  gap: ${(props) => props.gap || '5px'};
`;

export const TextArea = styled(InputArea)`
  align-items: center;
`;

export const Text = styled(AuthText)`
  font-size: var(--font-size-${(props) => props.size});
`;

export const Alert = styled(AuthAlert)``;
