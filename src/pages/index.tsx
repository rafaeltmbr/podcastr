import React from "react";
import { GetStaticProps } from "next";
import format from "date-fns/format";
import ptBR from "date-fns/locale/pt-BR";

import { api } from "../services/api";
import { convertDurationToTimeString } from "../utils/convertDurationToTimeString";
import { IEpisode, IFormattedEpisode } from "../interfaces";

import { LatestEpisodesSection } from "../components/LatestEpisodesSection";
import { AllEpisodesSection } from "../components/AllEpisodesSection";
import { Container } from "../../styles/index";

interface Props {
  allEpisodes?: IFormattedEpisode[];
  latestEpisodes?: IFormattedEpisode[];
  error?: string;
}

const Home: React.FC<Props> = ({ latestEpisodes, allEpisodes, error }) => {
  if (error) console.warn(error);

  return (
    <Container>
      <LatestEpisodesSection episodes={latestEpisodes?.slice(0, 2)} />
      <AllEpisodesSection episodes={allEpisodes?.slice(2)} />
    </Container>
  );
};

export default Home;

export const getStaticProps: GetStaticProps = async () => {
  try {
    const { data } = await api.get<IEpisode[]>("episodes", {
      params: {
        _limit: 12,
        _page: 1,
        _sort: "published_at",
        _order: "desc",
      },
    });

    const episodes: IFormattedEpisode[] = data.map((episode) => ({
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

    const latestEpisodes = episodes.slice(0, 2);

    const allEpisodes = episodes.slice(2);

    return {
      props: { latestEpisodes, allEpisodes },
      revalidate: 10,
    };
  } catch (err) {
    return {
      props: { error: err.message },
      revalidate: 5,
    };
  }
};
