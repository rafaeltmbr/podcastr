import React from "react";
import format from "date-fns/format";
import ptBR from "date-fns/locale/pt-BR";

import { Container, Logo, Title, CurrentDate } from "./styles";

export const Header: React.FC = () => {
  const currentDate = format(new Date(), "EEEEEE, d MMMM", {
    locale: ptBR,
  });

  return (
    <Container>
      <Logo path="/assets/img/logo.svg" />
      <Title>O melhor para você ouvir, sempre</Title>
      <CurrentDate>{currentDate}</CurrentDate>
    </Container>
  );
};
