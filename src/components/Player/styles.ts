import styled from "styled-components";

export const Container = styled.div`
  grid-area: player;
  display: flex;
  flex-direction: column;
  align-items: stretch;
  justify-content: space-between;

  padding: 3rem 4rem;

  background: var(--purple-500);
  color: var(--white);
`;

export const Header = styled.header`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 1rem;
`;

interface IHeaderImage {
  path: string;
}

export const HeaderImage = styled.div<IHeaderImage>`
  background-image: url(${(props) => props.path});
  background-position: center;
  background-size: contain;
  background-repeat: no-repeat;
  height: 2rem;
  width: 2rem;
`;

export const Title = styled.span``;

export const EmptyPlayer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  height: 20rem;
  border: 1.5px dashed var(--purple-300);
  border-radius: 1.5rem;
  background: linear-gradient(143.8deg, rgba(145, 100, 250, 0.8) 0%, rgba(0, 0, 0, 0) 100%);

  padding: 4rem;
  text-align: center;
`;

export const EmptyPlayerText = styled.span``;

interface IFooter {
  isEmpty?: boolean;
}

export const Footer = styled.footer<IFooter>`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  opacity: ${(props) => (props.isEmpty ? 0.6 : 1)};
`;

export const Time = styled.span`
  font-size: 0.875rem;
  display: inline-block;
  width: 4rem;
  text-align: center;
`;

export const Slider = styled.div`
  flex: 1;
`;

export const EmpltySlider = styled.div`
  height: 4px;
  border-radius: 2px;
  background: var(--purple-300);
`;

export const Buttons = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 2.5rem;
`;

interface IButton {
  path: string;
  isPlay?: boolean;
}

export const Button = styled.button<IButton>`
  background: transparent;
  border: none;
  width: 1.75rem;
  height: 1.75rem;

  background-image: url(${(props) => props.path});
  background-position: center;
  background-size: contain;
  background-repeat: no-repeat;
`;

export const PlayButton = styled.button<IButton>`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 4rem;
  height: 4rem;
  border-radius: 1rem;
  background: var(--purple-400);
  border: none;

  ::after {
    content: "";
    width: 1.75rem;
    height: 1.75rem;

    background-image: url(${(props) => props.path});
    background-position: center;
    background-size: contain;
    background-repeat: no-repeat;
  }
`;
