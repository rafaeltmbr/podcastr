import styled from "styled-components";
import Image from "next/image";

export const Section = styled.section``;

export const SectionTitle = styled.h2`
  margin: 3rem 0 1.5rem;
`;

export const List = styled.ul`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1.5rem;
`;

export const ListItem = styled.li`
  list-style: none;
  background: var(--white);
  border: 1px solid var(--gray-100);
  padding: 1.25rem;
  border-radius: 1.5rem;
  position: relative;
  min-width: 0;

  display: grid;
  grid-template-columns: 6rem calc(100% - 6rem);
  grid-template-rows: 1fr;
`;

export const Thumbnail = styled(Image)`
  border-radius: 1rem;
`;

export const Details = styled.div`
  flex: 1;
  margin-left: 1rem;
`;

export const EpisodeTitle = styled.h3`
  font-family: Lexend, sans-serif;
  font-weight: 600;
  font-size: 1rem;
  line-height: 1.4rem;

  * {
    text-decoration: none;
    color: var(--gray-600);
  }

  &:hover * {
    text-decoration: underline;
  }
`;

export const Members = styled.p`
  font-size: 0.875rem;
  margin-top: 0.5rem;
  max-width: 70%; // makes Thumbnail disapear :(
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

export const PublishedAt = styled.span`
  display: inline-block;
  margin-top: 0.5rem;
  font-size: 0.875rem;
`;

export const Duration = styled.span`
  display: inline-block;
  margin-top: 0.5rem;
  font-size: 0.875rem;

  &::before {
    content: "";
    display: inline-block;
    font-size: 0.25rem;
    width: 1em;
    height: 1em;
    border-radius: 0.5em;
    margin: 0 0.5rem;
    background: var(--gray-500);
    vertical-align: middle;
    transform: translateY(-1px);
  }
`;

export const PlayButton = styled.button`
  position: absolute;
  right: 2rem;
  bottom: 2rem;

  width: 2.5rem;
  height: 2.5rem;
  background: var(--white);
  border: 1px solid var(--gray-100);
  border-radius: 0.675rem;
  font-size: 0;
  transition: filter 0.2s;

  &:hover {
    filter: brightness(0.95);
  }
`;

interface PlayIconProps {
  source: string;
}

export const PlayIcon = styled.span<PlayIconProps>`
  width: 1.25rem;
  height: 1.25rem;
  display: inline-block;

  background-image: url(${(props) => props.source});
  background-position: center;
  background-size: contain;
  background-repeat: no-repeat;
`;
