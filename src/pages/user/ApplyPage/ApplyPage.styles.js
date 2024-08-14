import styled from 'styled-components';
import { Flex, FlexColumn } from '../../../components/Styles/Flex.styles';
import {
  UserContainer,
  UserBackdrop,
  UserPostTextArea,
  UserPostArea,
  UserMenu,
  UserPost,
} from '../../../components/Styles/User.styles';

export const Container = styled(UserContainer)``;

export const PostTextArea = styled(UserPostTextArea)``;

export const ContentArea = styled(UserPostTextArea)``;

export const PostArea = styled(UserPostArea)``;

export const FormArea = styled(FlexColumn)`
  gap: 20px;
  padding: 60px 110px;
`;

export const PreferDayArea = styled(FlexColumn)`
  gap: 5px;
`;

export const UnionArea = styled(PreferDayArea)``;

export const CheckboxArea = styled(Flex)`
  gap: 5px;
  flex-wrap: wrap;
`;

export const Menu = styled(UserMenu)``;

export const Post = styled(UserPost)``;

export const CheckboxTitle = styled.div`
  font-size: var(--font-size-lm);
`;

export const Backdrop = styled(UserBackdrop)``;
