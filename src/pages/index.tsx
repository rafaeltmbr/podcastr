import React from "react";

import api from "../services/api";
import { IEpisodes } from "../interfaces";
import { Container } from "../../styles/index";

interface Props {
  data?: IEpisodes;
  error?: string;
}

const Home: React.FC<Props> = ({ data, error }) => {
  if (data) console.log(data);
  if (error) console.warn(error);

  return <Container>{JSON.stringify(data)}</Container>;
};

export default Home;

export const getStaticProps = async () => {
  try {
    const response = await api.get("episodes");
    return {
      props: {
        data: response.data,
      },
      revalidate: 10,
    };
  } catch (err) {
    return {
      props: {
        error: err.message,
      },
      revalidate: 5,
    };
  }
};
