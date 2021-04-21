import styled from "styled-components";

export const Container = styled.div`
  height: 100vh;
  display: grid;
  grid-template-columns: 1fr 26.5rem;
  grid-template-rows: 6.5rem 1fr;
  grid-template-areas:
    "header  player"
    "content player";
`;
