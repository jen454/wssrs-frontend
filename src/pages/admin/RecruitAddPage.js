import { React, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useCookies } from 'react-cookie';
import styled from 'styled-components';
import Header from '../../components/Common/Header.js';
import Footer from '../../components/Common/Footer.js';
import imageSelector from '../../assets/post/imageSelector.svg';

function RecruitAddPage() {
  const navigate = useNavigate();
  const [cookies] = useCookies(['token']);
  const [title, setTitle] = useState('');
  const [files, setFiles] = useState([]);
  const [content, setContent] = useState('');

  const onTitleChange = (e) => {
    setTitle(e.target.value);
  };

  const onFileChange = (e) => {
    const newFiles = Array.from(e.target.files);
    setFiles((prevFiles) => [...prevFiles, ...newFiles]);
  };

  const onContentChange = (e) => {
    setContent(e.target.value);
  };

  const onClickDeleteImage = (index) => {
    setFiles((prevFiles) => prevFiles.filter((_, i) => i !== index));
  };

  const onClickSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('title', title);
    formData.append('content', content);
    files.forEach((file, index) => {
      formData.append(`file_${index}`, file);
    });
    navigate('/recruit-manage');
  };

  return (
    <Container>
      <Header isLog={!!cookies.token} />
      <ContentArea>
        <Title>Administration</Title>
        <FormArea>
          <Input
            type="text"
            value={title}
            onChange={onTitleChange}
            placeholder="제목"
          />
          <FileInputArea>
            <FileInput
              type="file"
              onChange={onFileChange}
              multiple
              id="fileInput"
              accept="image/*"
            />
            <UploadButton
              src={imageSelector}
              alt="Upload"
              onClick={() => document.getElementById('fileInput').click()}
            />
            <ImagePreviewArea>
              {files.map((file, index) => (
                <ImagePreviewWrapper key={index}>
                  <PreviewImage
                    src={URL.createObjectURL(file)}
                    alt={`image-${index}`}
                  />
                  <DeleteButton onClick={() => onClickDeleteImage(index)}>
                    X
                  </DeleteButton>
                </ImagePreviewWrapper>
              ))}
            </ImagePreviewArea>
          </FileInputArea>
          <Textarea
            value={content}
            onChange={onContentChange}
            placeholder="내용을 입력해주세요."
          />
          <ButtonArea>
            <SubmitButton onClick={onClickSubmit}>등록</SubmitButton>
          </ButtonArea>
        </FormArea>
      </ContentArea>
      <Footer />
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;

const ContentArea = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 62px;
  margin: 62px 0px 32px;
`;

const Title = styled.div`
  display: flex;
  justify-content: flex-start;
  color: var(--color-gray-500);
  font-size: var(--font-size-xxl);
  font-weight: var(--font-weight-bold);
`;

const FormArea = styled.div`
  display: flex;
  flex-direction: column;
  gap: 30px;
`;

const FileInputArea = styled.div`
  display: flex;
  align-items: center;
  overflow-x: auto;
`;

const ImagePreviewArea = styled.div`
  display: flex;
  flex-wrap: nowrap;
`;

const ButtonArea = styled.div`
  display: flex;
  justify-content: flex-end;
`;

const Input = styled.input`
  font-size: var(--font-size-xl);
  font-weight: var(--font-weight-bold);
  border: none;
  outline: none;
`;

const FileInput = styled.input`
  display: none;
`;

const UploadButton = styled.img`
  width: 250px;
  height: 250px;
  cursor: pointer;
`;

const ImagePreviewWrapper = styled.div`
  position: relative;
  width: 250px;
  height: 250px;
`;

const PreviewImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const DeleteButton = styled.button`
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

const Textarea = styled.textarea`
  font-size: var(--font-size-lm);
  border: none;
  outline: none;
  resize: none;
  height: 200px;
`;

const SubmitButton = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
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

export default RecruitAddPage;
