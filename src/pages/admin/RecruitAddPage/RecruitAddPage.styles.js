import styled from 'styled-components';
import { FlexColumn } from '../../../components/Style';
import { FlexCenter } from '../../../components/Style';

export const Container = styled(FlexColumn)`
  align-items: center;
  min-height: 100vh;
`;

export const TitleArea = styled(FlexColumn)`
  gap: 16px;
  margin-top: 16px;
`;

export const ContentArea = styled(FlexColumn)`
  flex: 1;
  gap: 62px;
  margin-bottom: 32px;
  width: 100%;
  max-width: 1040px;
`;

export const Title = styled.div`
  display: flex;
  justify-content: flex-start;
  color: var(--color-gray-500);
  font-size: var(--font-size-xxl);
  font-weight: var(--font-weight-bold);
`;

export const FormArea = styled(FlexColumn)`
  gap: 30px;
`;

export const FileInputArea = styled.div`
  display: flex;
  align-items: center;
  overflow-x: auto;
`;

export const ImagePreviewArea = styled.div`
  display: flex;
  flex-wrap: nowrap;
`;

export const ButtonArea = styled.div`
  display: flex;
  justify-content: flex-end;
`;

export const Input = styled.input`
  font-size: var(--font-size-xl);
  font-weight: var(--font-weight-bold);
  border: none;
  outline: none;
`;

export const FileInput = styled.input`
  display: none;
`;

export const UploadButton = styled.img`
  width: 250px;
  height: 250px;
  cursor: pointer;
`;

export const ImagePreviewWrapper = styled.div`
  position: relative;
  width: 250px;
  height: 250px;
`;

export const PreviewImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

export const DeleteButton = styled.button`
  position: absolute;
  top: 10px;
  right: 10px;
  background-color: var(--color-gray-300);
  color: var(--background-color);
  border: none;
  padding: 5px 10px;
  cursor: pointer;
  border-radius: 4px;
`;

export const Textarea = styled.textarea`
  font-size: var(--font-size-lm);
  border: none;
  outline: none;
  resize: none;
  height: 200px;
`;

export const SubmitButton = styled(FlexCenter)`
  padding: 10px 35px;
  color: var(--background-color);
  font-size: var(--font-size-lm);
  font-weight: var(--font-weight-bold);
  background-color: var(--color-blue);
  &:hover {
    background-color: var(--color-blue-hover);
  }
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
  border-radius: 20px;
  cursor: pointer;
`;
