import styled from 'styled-components';
import { FlexColumn } from '../../../components/Style';
import { FlexCenter } from '../../../components/Style';

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

export const TextArea = styled.textarea`
  width: 100%;
  height: 520px;
  padding: 20px;
  border: none;
  resize: none;
  outline: none;
  background: transparent;
  font-size: var(--font-size-md);
  font-weight: var(--font-weight-regular);
  line-height: 1;
  overflow-y: auto;
  box-sizing: border-box;
  text-align: left;
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

export const ApplyButton = styled(FlexCenter)`
  padding: 10px 30px;
  margin: auto;
  background-color: var(--color-yellow);
  &:hover {
    background-color: var(--color-yellow-hover);
  }
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
  border-radius: 20px;
  cursor: pointer;
`;

export const Text = styled.div`
  color: var(--background-color);
  font-size: var(--font-size-lm);
  font-weight: var(--font-weight-bold);
`;
