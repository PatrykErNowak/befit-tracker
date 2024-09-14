import { IoArrowBackCircle, IoArrowForwardCircle } from 'react-icons/io5';
import ButtonIcon from './Buttons/ButtonIcon';
import styled from 'styled-components';
import { useEffect, useState } from 'react';

const StyledPagination = styled.ul`
  display: flex;
  align-items: center;
  gap: 0.5em;
  margin: 0 auto;
  font-size: 1.1em;

  .pagination-item {
    font-family: monospace;
    color: var(--color-grey-600);

    button {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 1.3em;
      height: 1.3em;
      border: none;
      border-bottom: 2px solid transparent;
      background: none;
      outline: none;
    }

    &.active button {
      border-color: var(--color-brand-600);
    }
  }
`;

type PaginationProps = {
  numOfItems: number;
  itemsPerPage: number;
  onPageChange: (page: number) => void;
};

function Pagination({
  itemsPerPage,
  numOfItems,
  onPageChange,
}: PaginationProps) {
  const [activePage, setActivePage] = useState(1);
  const numOfPages = numOfItems ? Math.ceil(numOfItems / itemsPerPage) : 1;

  useEffect(() => {
    onPageChange(activePage);
  }, [activePage]);

  function goNextPage() {
    if (activePage === numOfPages) return;
    setActivePage((prev) => prev + 1);
  }
  function goPreviousPage() {
    if (activePage === 1) return;
    setActivePage((prev) => prev - 1);
  }

  if (!numOfItems) return null;

  return (
    <StyledPagination>
      <li>
        <ButtonIcon $size={2.5} aria-label="previous" onClick={goPreviousPage}>
          <IoArrowBackCircle />
        </ButtonIcon>
      </li>
      {[...Array(numOfPages)].map((_, i) => (
        <li
          key={i}
          className={`pagination-item ${activePage === i + 1 ? 'active' : ''}`}>
          <button onClick={() => setActivePage(i + 1)}>{i + 1}</button>
        </li>
      ))}
      <li>
        <ButtonIcon $size={2.5} aria-label="next" onClick={goNextPage}>
          <IoArrowForwardCircle />
        </ButtonIcon>
      </li>
    </StyledPagination>
  );
}

export default Pagination;
