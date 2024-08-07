import React from 'react';
import { useTable } from 'react-table';
import styled from 'styled-components';

const RecruitTable = ({ columns, data, onClick }) => {
  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    useTable({
      columns,
      data,
    });

  const handleRowClick = (row, event) => {
    // 이벤트가 체크박스에서 발생한 경우는 무시
    if (event.target.type === 'checkbox') return;
    onClick(row);
  };

  return (
    <TableContainer>
      <table {...getTableProps()}>
        <thead>
          {headerGroups.map((headerGroup) => (
            <tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map((column) => (
                <th {...column.getHeaderProps()}>{column.render('Header')}</th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody {...getTableBodyProps()}>
          {rows.map((row) => {
            prepareRow(row);
            return (
              <tr
                {...row.getRowProps()}
                onClick={(event) => handleRowClick(row.original, event)}
              >
                {row.cells.map((cell) => (
                  <td {...cell.getCellProps()}>{cell.render('Cell')}</td>
                ))}
              </tr>
            );
          })}
        </tbody>
      </table>
    </TableContainer>
  );
};

const TableContainer = styled.div`
  width: 100%;
  margin: 10px 0;

  table {
    width: 100%;
    border-collapse: collapse;
  }

  th,
  td {
    padding: 10px;
    text-align: center;
    border-bottom: 1px solid var(--color-gray-100);
  }

  th {
    background-color: var(--color-gray-200);
    font-weight: var(--font-weight-bold);
    font-size: var(--font-size-lr);
    border-right: 2px solid var(--color-gray-100);
  }

  td {
    font-size: var(--font-size-lm);
  }

  th:last-child {
    border-right: none;
  }

  tr {
    cursor: pointer;
  }
`;

export default RecruitTable;
