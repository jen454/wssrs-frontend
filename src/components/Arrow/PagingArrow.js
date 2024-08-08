import React from 'react';
import styled from 'styled-components';
import LeftArrow from '../../assets/post/LeftArrow.svg';
import RightArrow from '../../assets/post/RightArrow.svg';

function PagingArrow({ pageName, onChangePage, currentPage, totalPages }) {
  const getArrows = () => {
    const isManagePage = pageName === 'Manage';
    return [
      {
        src: LeftArrow,
        onClick: () => onChangePage('prev'),
        disabled: isManagePage ? currentPage === 0 : currentPage === 1,
      },
      {
        src: RightArrow,
        onClick: () => onChangePage('next'),
        disabled: isManagePage ? totalPages < 8 : currentPage === totalPages,
      },
    ];
  };
  const arrows = getArrows();

  return (
    <Container>
      {arrows.map((arrow, index) => (
        <ArrowIcon
          key={index}
          src={arrow.src}
          onClick={arrow.onClick}
          disabled={arrow.disabled}
        />
      ))}
    </Container>
  );
}

const Container = styled.div`
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

export default PagingArrow;
