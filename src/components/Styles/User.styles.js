import styled from 'styled-components';
import { FlexColumn, FlexEnd, FlexJustifyContentCenter } from './Flex.styles';

export const UserContainer = styled(FlexColumn)`
  align-items: center;
  min-height: 100vh;
`;

export const UserPostTextArea = styled(FlexColumn)`
  flex: 1;
`;

export const UserContentArea = styled(UserPostTextArea)`
  width: 100%;
  max-width: 1040px;
`;

export const UserTitleArea = styled(FlexColumn)`
  gap: 16px;
  margin-top: 16px;
`;

export const UserPostArea = styled(FlexJustifyContentCenter)`
  width: 100%;
  height: 650px;
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
  background-color: var(--color-gray-10);
`;

export const UserMenu = styled(FlexEnd)`
  padding: 6px 0px;
`;

export const UserPost = styled.img`
  width: 550px;
  height: 650px;
  background-color: var(--background-color);
`;

export const UserBackdrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  z-index: 1000;
`;
