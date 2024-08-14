import styled from 'styled-components';
import { FlexColumn } from '../../../components/Style';

export const Container = styled(FlexColumn)`
  align-items: center;
  min-height: 100vh;
`;

export const ContentArea = styled(FlexColumn)`
  flex: 1;
  width: 100%;
  max-width: 1040px;
`;

export const TitleArea = styled(FlexColumn)`
  gap: 16px;
  margin-top: 16px;
`;

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
`;

export const ButtonArea = styled.div`
  display: flex;
  justify-content: flex-end;
  margin: 11px;
  gap: 20px;
`;

export const GrayText = styled.div`
  color: var(--color-gray-500);
  font-size: ${({ fontSize }) => `var(--font-size-${fontSize})`};
  font-weight: var(--font-weight-bold);
`;

export const SpanText = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  margin: 0px 14px 14px 14px;
  font-size: var(--font-size-md);
  color: var(--color-gray-500);
`;
