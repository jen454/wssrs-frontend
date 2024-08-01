import { React, useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useCookies } from 'react-cookie';
import styled from 'styled-components';
import Header from '../../components/Common/Header.js';
import Footer from '../../components/Common/Footer.js';
import RecruitManageButton from '../../components/Button/RecruitManageButton.js';
import Table from '../../components/Table.js';
import LeftArrow from '../../assets/post/LeftArrow.svg';
import RightArrow from '../../assets/post/RightArrow.svg';

function RecruitManagePage() {
  const navigate = useNavigate();
  const [cookies] = useCookies(['token']);
  const [data, setData] = useState([
    {
      number: 12,
      title: '[생활협동조합 근로학생 모집공고]',
      date: '2024.07.31',
    },
    {
      number: 11,
      title: '[생활협동조합 근로학생 모집공고]',
      date: '2024.07.31',
    },
    {
      number: 10,
      title: '[생활협동조합 근로학생 모집공고]',
      date: '2024.07.31',
    },
    {
      number: 9,
      title: '[생활협동조합 근로학생 모집공고]',
      date: '2024.07.31',
    },
    {
      number: 8,
      title: '[생활협동조합 근로학생 모집공고]',
      date: '2024.07.31',
    },
    {
      number: 7,
      title: '[생활협동조합 근로학생 모집공고]',
      date: '2024.07.31',
    },
    {
      number: 6,
      title: '[생활협동조합 근로학생 모집공고]',
      date: '2024.07.31',
    },
    {
      number: 5,
      title: '[생활협동조합 근로학생 모집공고]',
      date: '2024.07.31',
    },
    {
      number: 4,
      title: '[생활협동조합 근로학생 모집공고]',
      date: '2024.07.31',
    },
    {
      number: 3,
      title: '[생활협동조합 근로학생 모집공고]',
      date: '2024.07.31',
    },
    {
      number: 2,
      title: '[생활협동조합 근로학생 모집공고]',
      date: '2024.07.31',
    },
    {
      number: 1,
      title: '[생활협동조합 근로학생 모집공고]',
      date: '2024.07.31',
    },
  ]);
  const [showCheckboxes, setShowCheckboxes] = useState(false);
  const [selectedRows, setSelectedRows] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 8;

  const totalPages = Math.ceil(data.length / itemsPerPage);

  const onClickAddPost = () => {
    navigate('/recruit-add');
  };

  const onClickDeletePost = () => {
    if (showCheckboxes) {
      onClickSelectedRows();
    }
    setShowCheckboxes(!showCheckboxes);
  };

  const onChangeCheckBox = (number) => {
    setSelectedRows((prevSelectedRows) =>
      prevSelectedRows.includes(number)
        ? prevSelectedRows.filter((num) => num !== number)
        : [...prevSelectedRows, number],
    );
  };

  const onClickSelectedRows = () => {
    setData((prevData) =>
      prevData.filter((row) => !selectedRows.includes(row.number)),
    );
    setSelectedRows([]);
  };

  const onChangePage = (direction) => {
    setCurrentPage((prevPage) => {
      if (direction === 'next' && prevPage < totalPages) {
        return prevPage + 1;
      } else if (direction === 'prev' && prevPage > 1) {
        return prevPage - 1;
      } else {
        return prevPage;
      }
    });
  };

  const currentData = data.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage,
  );

  const columns = [
    {
      Header: '번호',
      accessor: 'number',
      Cell: ({ row }) => (
        <div>
          {showCheckboxes ? (
            <input
              type="checkbox"
              checked={selectedRows.includes(row.original.number)}
              onChange={() => onChangeCheckBox(row.original.number)}
            />
          ) : (
            row.original.number
          )}
        </div>
      ),
    },
    { Header: '제목', accessor: 'title' },
    { Header: '날짜', accessor: 'date' },
  ];

  return (
    <Container>
      <Header isLog={!!cookies.token} />
      <ContentArea>
        <Title>Administration</Title>
        <ButtonArea>
          <RecruitManageButton title={'공고글 작성'} onClick={onClickAddPost} />
          <RecruitManageButton
            title={showCheckboxes ? '삭제' : '공고글 삭제'}
            onClick={onClickDeletePost}
          />
        </ButtonArea>
        <Table columns={columns} data={currentData} />
        <ArrowArea>
          <ArrowIcon
            src={LeftArrow}
            onClick={() => onChangePage('prev')}
            disabled={currentPage === 1}
          />
          <ArrowIcon
            src={RightArrow}
            onClick={() => onChangePage('next')}
            disabled={currentPage === totalPages}
          />
        </ArrowArea>
        <SpanText>{`Page ${currentPage} of ${totalPages}`}</SpanText>
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

const SpanText = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  margin: 0px 14px 14px 14px;
  font-size: var(--font-size-md);
  color: var(--color-gray-500);
`;

export default RecruitManagePage;
