import React from "react";
import { AppProps } from "next/app";

import { GlobalStyle } from "../../styles/global";
import { Container } from "../../styles/app";

import { Header } from "../components/Header";
import { Player } from "../components/Player";

const App: React.FC<AppProps> = ({ Component, pageProps }) => (
  <Container>
    <GlobalStyle />
    <Header />
    <Player />
    <Component {...pageProps} />
  </Container>
);

export default App;
