import styled from "styled-components";

export const Section = styled.section``;

export const Title = styled.h2`
  margin: 3rem 0 1.5rem;
`;

export const Table = styled.table`
  width: 100%;
`;

export const TableHead = styled.thead``;

export const TableBody = styled.tbody``;

export const TableRow = styled.tr``;

export const TableHeadCell = styled.th`
  padding: 0.75rem 1rem;
  border-bottom: 1px solid var(--gray-100);

  color: var(--gray-200);
  text-transform: uppercase;
  font: 500 0.75rem Lexend, sans-serif;
  text-align: left;
`;

export const TableDataCell = styled.td`
  padding: 0.75rem 1rem;
  border-bottom: 1px solid var(--gray-100);
  vertical-align: top;

  &.date {
    width: 11ch;
  }

  &.button,
  &.image {
    padding: 0.5rem;
    vertical-align: middle;
  }

  &.image * {
    width: 4rem;
    height: 4em;
    border-radius: 0.5rem;
  }
`;

export const TableDataTitle = styled.td`
  font-family: Lexend, sans-serif;
  font-weight: 600;
  font-size: 1rem;
  line-height: 1.4rem;
  vertical-align: top;
  padding: 0.75rem 1rem;
  border-bottom: 1px solid var(--gray-100);

  * {
    text-decoration: none;
    color: var(--gray-800);
  }

  &:hover * {
    text-decoration: underline;
  }
`;

export const PlayButton = styled.button`
  width: 2rem;
  height: 2rem;
  background: var(--white);
  border: 1px solid var(--gray-100);
  border-radius: 0.5rem;
  font-size: 0;
  transition: filter 0.2s;
  padding: 0.75rem 1rem;
  border-bottom: 1px solid var(--gray-100);

  &:hover {
    filter: brightness(0.95);
  }

  background-image: url(/assets/img/play-green.svg);
  background-size: 60%;
  background-position: center;
  background-repeat: no-repeat;
`;
