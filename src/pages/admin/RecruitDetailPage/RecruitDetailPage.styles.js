import styled from 'styled-components';
import {
  FlexEnd,
  FlexAlignCenter,
} from '../../../components/Styles/Flex.styles';
import {
  AdminContainer,
  AdminContentArea,
  AdminTitleArea,
  AdminButtonArea,
} from '../../../components/Styles/Admin.styles';

export const Container = styled(AdminContainer)``;

export const ContentArea = styled(AdminContentArea)``;

export const TitleArea = styled(AdminTitleArea)``;

export const Wrapper = styled(FlexAlignCenter)`
  gap: 20px;
`;

export const ButtonArea = styled(AdminButtonArea)``;

export const GrayText = styled.div`
  color: var(--color-gray-500);
  font-size: ${({ fontSize }) => `var(--font-size-${fontSize})`};
  font-weight: var(--font-weight-bold);
`;

export const SpanText = styled(FlexEnd)`
  align-items: center;
  margin: 0px 14px 14px 14px;
  font-size: var(--font-size-md);
  color: var(--color-gray-500);
`;
