import styled from 'styled-components';
import { FlexColumn } from '../../../components/Style';

export const Container = styled(FlexColumn)`
  align-items: center;
  min-height: 100vh;
`;

export const PostTextArea = styled(FlexColumn)`
  flex: 1;
`;

export const ContentArea = styled(PostTextArea)`
  width: 100%;
  max-width: 1040px;
`;

export const PostArea = styled.div`
  display: flex;
  width: 100%;
  height: 650px;
  justify-content: center;
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
  background-color: var(--color-gray-10);
`;

export const FormArea = styled(FlexColumn)`
  gap: 20px;
  padding: 60px 110px;
`;

export const PreferDayArea = styled(FlexColumn)`
  gap: 5px;
`;

export const UnionArea = styled(PreferDayArea)``;

export const CheckboxArea = styled.div`
  display: flex;
  gap: 5px;
  flex-wrap: wrap;
`;

export const Menu = styled.div`
  display: flex;
  justify-content: flex-end;
  padding: 6px 0px;
`;

export const Post = styled.img`
  width: 550px;
  height: 650px;
  background-color: var(--background-color);
`;

export const CheckboxTitle = styled.div`
  font-size: var(--font-size-lm);
`;

export const Backdrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  z-index: 1000;
`;
