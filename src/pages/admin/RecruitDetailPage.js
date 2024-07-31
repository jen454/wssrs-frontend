import { React, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useCookies } from 'react-cookie';
import styled from 'styled-components';
import Header from '../../components/Common/Header.js';
import Footer from '../../components/Common/Footer.js';
import RecruitManageButton from '../../components/Button/RecruitManageButton.js';
import Table from '../../components/Table.js';
import LeftArrow from '../../assets/post/LeftArrow.svg';
import RightArrow from '../../assets/post/RightArrow.svg';
import BackArrow from '../../assets/post/BackArrow.svg';

function RecruitDetailPage() {
  const navigate = useNavigate();
  const [cookies] = useCookies(['token']);
  const [data, setData] = useState([
    {
      number: 1,
      userName: '신진욱',
      studentId: '20223098',
      contactNumber: '010-4630-2765',
      workCode: 'A1',
      preferredDays: ['월', '화', '수', '목', '금', '토', '일'],
      isMember: '예',
      isConfirmed: false,
    },
    {
      number: 2,
      userName: '신진욱',
      studentId: '20223098',
      contactNumber: '010-4630-2765',
      workCode: 'A1',
      preferredDays: ['월', '화'],
      isMember: '예',
      isConfirmed: false,
    },
    {
      number: 3,
      userName: '신진욱',
      studentId: '20223098',
      contactNumber: '010-4630-2765',
      workCode: 'A1',
      preferredDays: ['월', '화'],
      isMember: '예',
      isConfirmed: false,
    },
  ]);
  const [showCheckboxes, setShowCheckboxes] = useState(false);
  const [selectedRows, setSelectedRows] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 8;

  const totalPages = Math.ceil(data.length / itemsPerPage);

  const onClickBackArrow = () => {
    navigate(-1);
  };

  const onClickConfirmPost = () => {
    if (showCheckboxes && selectedRows.length > 0) {
      setData((prevData) =>
        prevData.map((row) =>
          selectedRows.includes(row.number)
            ? { ...row, isConfirmed: true }
            : row,
        ),
      );
      setSelectedRows([]);
      setShowCheckboxes(false);
    } else {
      setShowCheckboxes(!showCheckboxes);
    }
  };

  const onChangeCheckBox = (number) => {
    setSelectedRows((prevSelectedRows) =>
      prevSelectedRows.includes(number)
        ? prevSelectedRows.filter((num) => num !== number)
        : [...prevSelectedRows, number],
    );
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
    { Header: '이름', accessor: 'userName' },
    { Header: '학번', accessor: 'studentId' },
    { Header: '연락처', accessor: 'contactNumber' },
    { Header: '근무코드', accessor: 'workCode' },
    {
      Header: '희망요일',
      accessor: 'preferredDays',
      Cell: ({ cell: { value } }) => value.join(', '),
    },
    { Header: '조합원 가입 유무', accessor: 'isMember' },
  ];

  return (
    <Container>
      <Header isLog={!!cookies.token} />
      <ContentArea>
        <TitleArea>
          <Wraaper>
            <BackArrowIcon src={BackArrow} onClick={onClickBackArrow} />
            <Date>2024.07.18</Date>
          </Wraaper>
          <Title>Administration</Title>
        </TitleArea>
        <ButtonArea>
          <RecruitManageButton
            title={
              showCheckboxes
                ? selectedRows.length > 0
                  ? '확인'
                  : '취소'
                : '근로 확정'
            }
            onClick={onClickConfirmPost}
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

const TitleArea = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  margin-top: 16px;
`;

const Wraaper = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
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
  width: 30px;
  height: 30px;
  cursor: ${({ disabled }) => (disabled ? 'not-allowed' : 'pointer')};
  opacity: ${({ disabled }) => (disabled ? 0.5 : 1)};
`;

const BackArrowIcon = styled.img`
  width: 40px;
  height: 40px;
  cursor: pointer;
`;

const Title = styled.div`
  color: var(--color-gray-500);
  font-size: var(--font-size-xxl);
  font-weight: var(--font-weight-bold);
`;

const Date = styled.div`
  color: var(--color-gray-500);
  font-size: var(--font-size-xl);
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

export default RecruitDetailPage;
