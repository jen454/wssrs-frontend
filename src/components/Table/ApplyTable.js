import React from 'react';
import { useTable } from 'react-table';
import styled from 'styled-components';

const ApplyTable = ({ columns, data, onClick }) => {
  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    useTable({
      columns,
      data,
    });

  const handleRowClick = (recruitId, event) => {
    if (event.target.type === 'checkbox') {
      // 이벤트 전파 방지
      event.stopPropagation();
      return;
    }
    onClick(recruitId);
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
                className={row.original.isConfirmed ? 'confirmed' : ''}
                onClick={(event) =>
                  handleRowClick(row.original.recruitId, event)
                }
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

  .confirmed {
    background-color: var(--color-blue-confirm);
  }
`;

export default ApplyTable;
