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

export const ButtonArea = styled.div`
  display: flex;
  justify-content: flex-end;
  margin: 11px;
  gap: 20px;
`;

export const Title = styled.div`
  display: flex;
  justify-content: flex-start;
  margin-top: 62px;
  color: var(--color-gray-500);
  font-size: var(--font-size-xxl);
  font-weight: var(--font-weight-bold);
`;
