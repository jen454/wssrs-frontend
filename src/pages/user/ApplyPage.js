import { React, useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useCookies } from 'react-cookie';
import { getNotice, recruitNotice } from '../../api/User.js';
import styled from 'styled-components';
import recruitDetail from '../../assets/post/recruitDetail.svg';
import Header from '../../components/Common/Header.js';
import Footer from '../../components/Common/Footer.js';
import ListButton from '../../components/Button/ListButton.js';
import MediumBlueButton from '../../components/Button/MediumBlueButton.js';
import PostTitle from '../../components/Post/PostTitle.js';
import ApplyInput from '../../components/Input/ApplyInput.js';
import ApplyCheckBox from '../../components/Input/ApplyCheckBox.js';
import Category from '../../components/Post/Category.js';
import SubmitModal from '../../components/Modal.js';

const Days = ['월', '화', '수', '목', '금', '토', '일'];

function ApplyPage() {
  const navigate = useNavigate();
  const { noticeId } = useParams();
  const [cookies] = useCookies(['accessToken', 'refreshToken']);
  const [showModal, setShowModal] = useState(false);
  const [notice, setNotice] = useState({
    id: 0,
    title: '',
    content: '',
    files: [],
  });
  const [formData, setFormData] = useState({
    code: '',
    phoneNum: '',
    day: [],
    isUnion: false,
  });

  const onClickNavigate = () => {
    navigate('/');
  };

  const onChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const onCheckboxChange = (e) => {
    const { value, checked } = e.target;
    setFormData((prevFormData) => {
      if (checked) {
        return {
          ...prevFormData,
          day: [...prevFormData.day, value],
        };
      } else {
        return {
          ...prevFormData,
          day: prevFormData.day.filter((day) => day !== value),
        };
      }
    });
  };

  useEffect(() => {
    const fetchNotice = async () => {
      try {
        const response = await getNotice(cookies.accessToken, noticeId);
        setNotice({
          id: response.id,
          title: response.title,
          content: response.content,
          files: response.files,
        });
      } catch (error) {
        console.error(error);
      }
    };
    fetchNotice();
  }, [cookies.accessToken, noticeId]);

  const onClickSubmit = async () => {
    try {
      await recruitNotice(cookies.accessToken, noticeId, formData);
      setShowModal(true);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <Container>
      <Header isLog={!!cookies.accessToken} />
      <ContentArea>
        <Category />
        <Menu>
          <ListButton onClick={onClickNavigate} />
        </Menu>
        <PostArea>
          <Post src={notice.files[0]} />
          <PostTextArea>
            <PostTitle title={notice.title} />
            <FormArea>
              <ApplyInput
                title={'지원코드'}
                name="code"
                value={formData.code}
                onChange={onChange}
                placeholder="A1"
              />
              <ApplyInput
                title={'연락처'}
                name="phoneNum"
                value={formData.phoneNum}
                onChange={onChange}
                placeholder="010-xxxx-xxxx"
              />
              <PreferDayArea>
                <CheckboxTitle>희망 요일</CheckboxTitle>
                <CheckboxArea>
                  {Days.map((day) => (
                    <ApplyCheckBox
                      key={day}
                      value={day}
                      checked={formData.day.includes(day)}
                      onChange={onCheckboxChange}
                      label={day}
                    />
                  ))}
                </CheckboxArea>
              </PreferDayArea>
              <ApplyInput
                title={'조합원 가입 유무'}
                name="isUnion"
                value={formData.isUnion ? '예' : '아니오'}
                onChange={(e) =>
                  setFormData({ ...formData, isUnion: e.target.value === '예' })
                }
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
          <Backdrop onClick={() => setShowModal(false)} />
          <SubmitModal
            onClose={() => setShowModal(false)}
            text={'지원 완료 되었습니다.'}
            title={'확인'}
            nav={'/'}
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

const PreferDayArea = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
`;

const CheckboxArea = styled.div`
  display: flex;
  gap: 5px;
  flex-wrap: wrap;
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

const CheckboxTitle = styled.div`
  font-size: var(--font-size-lm);
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
