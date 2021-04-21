import styled from "styled-components";

export const Container = styled.header`
  background: var(--white);
  grid-area: header;
  padding: 2rem 4rem;

  display: flex;
  align-items: center;

  border-bottom: 1px solid var(--gray-100);
`;

interface ILogo {
  path: string;
}

export const Logo = styled.div<ILogo>`
  display: block;
  height: 100%;
  width: 10rem;

  background-image: url(${(props) => props.path});
  background-position: center;
  background-size: contain;
  background-repeat: no-repeat;
`;

export const Title = styled.span`
  margin-left: 2rem;
  padding-left: 2rem;
  border-left: 1px solid var(--gray-100);
`;

export const CurrentDate = styled.span`
  margin-left: auto;
  text-transform: capitalize;
`;
