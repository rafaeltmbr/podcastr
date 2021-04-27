import React from "react";
import { GetStaticProps } from "next";
import format from "date-fns/format";
import ptBR from "date-fns/locale/pt-BR";

import { api } from "../services/api";
import { convertDurationToTimeString } from "../utils/convertDurationToTimeString";
import { IEpisodes, IFormattedEpisodes } from "../interfaces";
import { Container } from "../../styles/index";

interface Props {
  data?: IFormattedEpisodes[];
  error?: string;
}

const Home: React.FC<Props> = ({ data, error }) => {
  if (data) console.log(data);
  if (error) console.warn(error);

  return <Container>{JSON.stringify(data)}</Container>;
};

export default Home;

export const getStaticProps: GetStaticProps = async () => {
  try {
    const { data } = await api.get<IEpisodes[]>("episodes", {
      params: {
        _limit: 12,
        _page: 1,
        _sort: "published_at",
        _order: "desc",
      },
    });

    const formattedData: IFormattedEpisodes[] = data.map((episode) => ({
      id: episode.id,
      title: episode.title,
      members: episode.members,
      publishedAt: format(new Date(episode.published_at), "d MMM yy", { locale: ptBR }),
      thumbnail: episode.thumbnail,
      description: episode.description,
      url: episode.file.url,
      type: episode.file.type,
      duration: episode.file.duration,
      durationString: convertDurationToTimeString(episode.file.duration),
    }));

    return {
      props: { data: formattedData },
      revalidate: 10,
    };
  } catch (err) {
    return {
      props: { error: err.message },
      revalidate: 5,
    };
  }
};
