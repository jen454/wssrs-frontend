import { React, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useCookies } from 'react-cookie';
import { getAllNotices } from '../../api/User.js';
import styled from 'styled-components';
import Header from '../../components/Common/Header.js';
import Footer from '../../components/Common/Footer.js';
import RecruitPoster from '../../components/Post/RecruitPoster.js';
import LoginModal from '../../components/Modal.js';

function MainPage() {
  const navigate = useNavigate();
  const [cookies] = useCookies(['accessToken', 'refreshToken']);
  const [showModal, setShowModal] = useState(false);
  const [notices, setNotices] = useState([]);

  const onClickPost = (noticeId) => {
    if (!cookies.accessToken) {
      setShowModal(true);
    } else {
      navigate(`/post-detail/${noticeId}`);
    }
  };

  useEffect(() => {
    const fetchNotices = async () => {
      try {
        const response = await getAllNotices();
        setNotices(response);
      } catch (error) {
        console.error(error);
      }
    };
    fetchNotices();
  }, [cookies.accessToken]);

  return (
    <Container>
      <Header isLog={!!cookies.accessToken} />
      <ContentArea>
        {notices.map((notice) => (
          <RecruitPoster
            key={notice.id}
            date={notice.createdAt}
            onClick={() => onClickPost(notice.id)}
          />
        ))}
      </ContentArea>
      <Footer />
      {showModal && (
        <>
          <Backdrop onClick={() => setShowModal(false)} />
          <LoginModal
            onClose={() => setShowModal(false)}
            text={'로그인이 필요합니다.'}
            title={'로그인하기'}
            nav={'/sign-in'}
          />
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
  align-items: center;
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

export default MainPage;
