import { React, useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useCookies } from 'react-cookie';
import { getNotice } from '../../api/User.js';
import styled from 'styled-components';
import Header from '../../components/Common/Header.js';
import Footer from '../../components/Common/Footer.js';
import Category from '../../components/Post/Category.js';
import ListButton from '../../components/Button/ListButton.js';
import PostTitle from '../../components/Post/PostTitle.js';

function PostDetailPage() {
  const navigate = useNavigate();
  const { noticeId } = useParams();
  const [cookies] = useCookies(['accessToken', 'freshToken']);
  const [notice, setNotice] = useState({
    id: 0,
    title: '',
    content: '',
    files: [],
  });

  const onClickNavigate = () => {
    navigate('/');
  };

  const onClickApplyButton = () => {
    navigate(`/apply/${noticeId}`);
  };

  useEffect(() => {
    const fetchNotice = async () => {
      try {
        const response = await getNotice(noticeId);
        setNotice({
          id: response.id,
          title: response.title,
          content: response.content,
          files: response.files,
        });
      } catch (error) {
        if (error.response) {
          const { status, code, message } = error.response.data;
          switch (code) {
            case 'MEMBER_NOT_FOUND': // AUTH-001
              alert(message);
              break;
            default:
              switch (status) {
                case 400:
                  alert('잘못된 요청입니다. 입력한 정보를 확인해 주세요.');
                  break;
                case 404:
                  alert('요청한 자원을 찾을 수 없습니다.');
                  break;
                case 500:
                  alert('서버 오류가 발생했습니다. 나중에 다시 시도해주세요.');
                  break;
                default:
                  alert('서버 오류가 발생했습니다. 나중에 다시 시도해주세요.');
                  break;
              }
          }
        } else {
          alert('네트워크 오류가 발생했습니다. 인터넷 연결을 확인해주세요.');
        }
      }
    };
    fetchNotice();
  }, [cookies.accessToken, noticeId]);

  return (
    <Container>
      <Header isLog={!!cookies.accessToken} />
      <ContentArea>
        <Category />
        <Menu>
          <ListButton onClick={onClickNavigate} />
        </Menu>
        <PostArea>
          <Post src={notice.files[0].url} />
          <PostTextArea>
            <PostTitle title={notice.title} />
            <TextArea value={notice.content} readOnly />
            <ApplyButton onClick={onClickApplyButton}>
              <Text>지원하기</Text>
            </ApplyButton>
          </PostTextArea>
        </PostArea>
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

const TextArea = styled.textarea`
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

const ApplyButton = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
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

const Text = styled.div`
  color: var(--background-color);
  font-size: var(--font-size-lm);
  font-weight: var(--font-weight-bold);
`;

export default PostDetailPage;
