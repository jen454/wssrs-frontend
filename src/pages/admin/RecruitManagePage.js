import { React, useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useCookies } from 'react-cookie';
import { getAllNotices, deleteNotice } from '../../api/Admin.js';
import { FormatDate } from '../../util/FormatDate.js';
import styled from 'styled-components';
import Header from '../../components/Common/Header.js';
import Footer from '../../components/Common/Footer.js';
import RecruitManageButton from '../../components/Button/RecruitManageButton.js';
import RecruitTable from '../../components/Table/RecruitTable.js';
import LeftArrow from '../../assets/post/LeftArrow.svg';
import RightArrow from '../../assets/post/RightArrow.svg';

function RecruitManagePage() {
  const navigate = useNavigate();
  const [cookies] = useCookies(['accessToken', 'refreshToken']);
  const [notices, setNotices] = useState([]);
  const [showCheckboxes, setShowCheckboxes] = useState(false);
  const [selectedRows, setSelectedRows] = useState([]);
  const [pageNum, setPageNum] = useState(0);

  useEffect(() => {
    const fetchNotices = async () => {
      try {
        const response = await getAllNotices(pageNum);
        setNotices(response);
      } catch (error) {
        if (error.response) {
          switch (error.response.status) {
            case 400:
              alert('잘못된 요청입니다. 요청 데이터를 확인해주세요.');
              break;
            case 404:
              alert('요청한 리소스를 찾을 수 없습니다.');
              break;
            case 500:
              alert('서버 오류가 발생했습니다. 나중에 다시 시도해주세요.');
              break;
            default:
              alert('서버 오류가 발생했습니다. 나중에 다시 시도해주세요.');
          }
        } else {
          alert('네트워크 오류가 발생했습니다. 인터넷 연결을 확인해주세요.');
        }
      }
    };
    fetchNotices();
  }, [pageNum]);

  const onClickAddPost = () => {
    navigate('/recruit-add');
  };

  const onClickRowPost = (notice) => {
    navigate(`/recruit-detail/${notice.id}`, {
      state: { formattedDate: FormatDate(notice.createdAt) },
    });
  };

  const onClickDeletePost = async () => {
    if (showCheckboxes) {
      if (selectedRows.length > 0) {
        try {
          await Promise.all(
            selectedRows.map(async (noticeId) => {
              await deleteNotice(noticeId);
            }),
          );
          setSelectedRows([]);
          setShowCheckboxes(false);
          const response = await getAllNotices(pageNum);
          setNotices(response);
        } catch (error) {
          alert('삭제에 실패했습니다. 다시 시도해주세요.');
        }
      } else {
        setShowCheckboxes(false);
      }
    } else {
      setShowCheckboxes(true);
    }
  };

  const onChangeCheckBox = (id) => {
    setSelectedRows((prevSelectedRows) => {
      const updatedRows = prevSelectedRows.includes(id)
        ? prevSelectedRows.filter((num) => num !== id)
        : [...prevSelectedRows, id];
      return updatedRows;
    });
  };

  const onChangePage = (direction) => {
    setPageNum((prevPage) => {
      if (direction === 'next') {
        return prevPage + 1;
      } else if (direction === 'prev' && prevPage > 1) {
        return prevPage - 1;
      } else {
        return prevPage;
      }
    });
  };

  const columns = [
    {
      Header: '번호',
      accessor: 'id',
      Cell: ({ row }) => (
        <div>
          {showCheckboxes ? (
            <input
              type="checkbox"
              checked={selectedRows.includes(row.original.id)}
              onChange={() => onChangeCheckBox(row.original.id)}
            />
          ) : (
            row.original.id
          )}
        </div>
      ),
    },
    { Header: '제목', accessor: 'title' },
    {
      Header: '날짜',
      accessor: 'createdAt',
      Cell: ({ value }) => FormatDate(value),
    },
  ];

  return (
    <Container>
      <Header isLog={!!cookies.accessToken} />
      <ContentArea>
        <Title>Administration</Title>
        <ButtonArea>
          <RecruitManageButton title={'공고글 작성'} onClick={onClickAddPost} />
          <RecruitManageButton
            title={
              showCheckboxes
                ? selectedRows.length > 0
                  ? '삭제'
                  : '취소'
                : '공고글 삭제'
            }
            onClick={onClickDeletePost}
          />
        </ButtonArea>
        <RecruitTable
          columns={columns}
          data={notices}
          onClick={onClickRowPost}
        />
        <ArrowArea>
          <ArrowIcon
            src={LeftArrow}
            onClick={() => onChangePage('prev')}
            disabled={pageNum === 0}
          />
          <ArrowIcon
            src={RightArrow}
            onClick={() => onChangePage('next')}
            disabled={notices.length < 8}
          />
        </ArrowArea>
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

const ButtonArea = styled.div`
  display: flex;
  justify-content: flex-end;
  margin: 11px;
  gap: 20px;
`;

const ArrowArea = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  margin: 11px;
  gap: 10px;
`;

const ArrowIcon = styled.img`
  width: 40px;
  height: 40px;
  cursor: ${({ disabled }) => (disabled ? 'not-allowed' : 'pointer')};
  opacity: ${({ disabled }) => (disabled ? 0.5 : 1)};
`;

const Title = styled.div`
  display: flex;
  justify-content: flex-start;
  margin-top: 62px;
  color: var(--color-gray-500);
  font-size: var(--font-size-xxl);
  font-weight: var(--font-weight-bold);
`;

export default RecruitManagePage;
