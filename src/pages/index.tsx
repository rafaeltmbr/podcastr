import React from "react";
import { GetStaticProps } from "next";
import format from "date-fns/format";
import ptBR from "date-fns/locale/pt-BR";

import { convertDurationToTimeString } from "../utils/convertDurationToTimeString";

import { LatestEpisodesSection } from "../components/LatestEpisodesSection";
import { AllEpisodesSection } from "../components/AllEpisodesSection";
import { Container } from "./styles";
import { getEpisodes } from "../controllers/episodes/getEpisodes";
import { IFormattedEpisode } from "../interfaces/episode/IEpisode";

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
    const data = await getEpisodes();

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
