import React from "react";
import {
  Container,
  Header,
  Title,
  HeaderImage,
  EmptyPlayer,
  Footer,
  EmptyPlayerText,
  Time,
  Slider,
  Buttons,
  Button,
  PlayButton,
  EmpltySlider,
} from "./styles";

const Player: React.FC = () => {
  return (
    <Container>
      <Header>
        <HeaderImage path="/assets/img/playing.svg" />
        <Title>Tocando agora</Title>
      </Header>

      <EmptyPlayer>
        <EmptyPlayerText>Selecione um podcast para ouvir</EmptyPlayerText>
      </EmptyPlayer>

      <Footer isEmpty>
        <Time>00:00</Time>
        <Slider>
          <EmpltySlider />
        </Slider>
        <Time>00:00</Time>
      </Footer>

      <Buttons>
        <Button path="/assets/img/shuffle.svg" />
        <Button path="/assets/img/play-previous.svg" />
        <PlayButton path="/assets/img/play.svg" />
        <Button path="/assets/img/play-next.svg" />
        <Button path="/assets/img/repeat.svg" />
      </Buttons>
    </Container>
  );
};

export default Player;
