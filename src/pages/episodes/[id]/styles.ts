import styled from "styled-components";
import Image from "next/image";

export const Container = styled.div`
  height: 100%;
  overflow-y: auto;
`;

export const Content = styled.div`
  max-width: 45rem; // ~700px
  margin: 0 auto;
  padding: 3rem 2rem;
`;

export const ThumbnailContainer = styled.div`
  position: relative;

  button {
    font-size: 3rem;
    width: 1em;
    height: 1em;
    border-radius: 0.25em;
    border: none;
    z-index: 2;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: stretch;
    position: absolute;
    top: 50%;
    transition: filter 0.2s;

    &::after {
      content: "";
      width: 100%;
      flex: 1;
      display: inline-block;
      background-position: center;
      background-size: contain;
      background-repeat: no-repeat;
    }

    &:hover {
      filter: brightness(0.9);
    }
  }
`;

export const BackButton = styled.button`
  padding: 0.3em;
  left: 0;
  transform: translate(-50%, -50%);
  background-color: var(--purple-500);

  &::after {
    background-image: url(/assets/img/arrow-left.svg);
  }
`;

export const PlayButton = styled.button`
  padding: 0.15em;
  right: 0;
  transform: translate(50%, -50%);
  background-color: var(--green-500);

  &::after {
    background-image: url(/assets/img/play.svg);
  }
`;

export const Thumbnail = styled(Image)`
  border-radius: 1rem;
`;

export const TextSection = styled.section`
  padding-bottom: 1rem;
  border-bottom: 1px solid var(--gray-100);

  span {
    display: inline-block;
    font-size: 0.875rem;
    position: relative;

    & + span {
      margin-left: 1rem;
      padding-left: 1rem;

      &::before {
        content: "";
        display: inline-block;
        font-size: 0.25rem;
        width: 1em;
        height: 1em;
        border-radius: 0.5em;
        background: var(--gray-500);
        position: absolute;
        top: 50%;
        left: 0;
        transform: translate(-50%, -50%);
      }
    }
  }
`;

export const Header = styled.h1`
  margin-top: 2rem;
  margin-bottom: 1.5rem;
`;

export const Members = styled.span``;

export const PublishedAt = styled.span``;

export const DurationString = styled.span``;

export const DescriptionSection = styled.section`
  margin-top: 2rem;
  line-height: 1.675rem;
  color: var(--gray-800);

  p {
    margin: 1.5rem 0;
  }
`;
