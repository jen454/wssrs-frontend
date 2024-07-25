import React, { useState } from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import recruitDetail from '../../assets/post/recruitDetail.svg';
import Header from '../../components/Common/Header.js';
import Footer from '../../components/Common/Footer.js';
import ListButton from '../../components/Button/ListButton.js';
import MediumBlueButton from '../../components/Button/MediumBlueButton.js';
import PostTitle from '../../components/Post/PostTitle.js';
import ApplyInput from '../../components/Input/ApplyInput.js';
import Category from '../../components/Post/Category.js';
import SubmitModal from '../../components/SubmitModal.js';

function ApplyPage() {
  const navigate = useNavigate();
  const [showModal, setShowModal] = useState(false);
  const [formData, setFormData] = useState({
    applyCode: '',
    contactNumber: '',
    preferredDays: '',
    isMember: '',
  });

  const onClickNavigate = () => {
    navigate('/');
  };

  const onChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const onClickSubmit = () => {
    setShowModal(true);
  };

  return (
    <Container>
      <Header isLog={false} />
      <ContentArea>
        <Category />
        <Menu>
          <ListButton onClick={onClickNavigate} />
        </Menu>
        <PostArea>
          <Post src={recruitDetail} />
          <PostTextArea>
            <PostTitle title={'[생활협동조합 근로학생 지원]'} />
            <FormArea>
              <ApplyInput
                title={'지원코드'}
                name="applyCode"
                value={formData.applyCode}
                onChange={onChange}
                placeholder="A1"
              />
              <ApplyInput
                title={'연락처'}
                name="contactNumber"
                value={formData.contact}
                onChange={onChange}
                placeholder="010-xxxx-xxxx"
              />
              <ApplyInput
                title={'희망 요일'}
                name="preferredDays"
                value={formData.preferredDays}
                onChange={onChange}
                placeholder="월,화"
              />
              <ApplyInput
                title={'조합원 가입 유무'}
                name="isMember"
                value={formData.isMember}
                onChange={onChange}
                placeholder="예 / 아니오"
              />
            </FormArea>
            <MediumBlueButton title={'제출하기'} onClick={onClickSubmit} />
          </PostTextArea>
        </PostArea>
      </ContentArea>
      <Footer />
      {showModal && (
        <>
          <Backdrop />
          <SubmitModal onClose={() => setShowModal(false)} />
        </>
      )}
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
`;

const PostArea = styled.div`
  display: flex;
  width: 100%;
  height: 650px;
  justify-content: center;
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
  background-color: var(--color-gray-10);
`;

const PostTextArea = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
`;

const FormArea = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding: 60px 110px;
`;

const Menu = styled.div`
  display: flex;
  justify-content: flex-end;
  padding: 6px 0px;
`;

const Post = styled.img`
  width: 550px;
  height: 650px;
  background-color: var(--background-color);
`;

const Backdrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  z-index: 1000;
`;

export default ApplyPage;
