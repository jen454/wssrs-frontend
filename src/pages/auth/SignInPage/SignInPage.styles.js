import styled from 'styled-components';
import { FlexCenter } from '../../../components/Style';

export const Container = styled(FlexCenter)`
  min-height: 100vh;
`;

export const ContentArea = styled(FlexCenter)`
  flex-direction: column;
  width: 90%;
  max-width: 700px;
  height: 700px;
  gap: 30px;
  border-radius: 50px;
  background-color: var(--background-color);
  box-sizing: border-box;
  box-shadow: 4px 4px 30px 0px rgba(0, 0, 0, 0.25);
`;

export const UserAuthArea = styled(FlexCenter)`
  gap: 10px;
  background-color: var(--background-color);
`;

export const Text = styled.div`
  color: var(--color-gray-500);
  font-size: var(--font-size-xxl);
  font-weight: var(--font-weight-bold);
`;

export const UserAuth = styled.div`
  color: var(--color-gray-500);
  &:hover {
    color: var(--color-gray-hover);
  }
  font-size: var(--font-size-sm);
  font-weight: var(--font-weight-bold);
  cursor: pointer;
`;
