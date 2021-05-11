import React from "react";
import { GetStaticPaths, GetStaticProps } from "next";
import format from "date-fns/format";
import ptBR from "date-fns/locale/pt-BR";

import { useRouter } from "next/dist/client/router";
import { getEpisode } from "../../../controllers/episodes/getEpisode";
import { IFormattedEpisode } from "../../../interfaces/episode/IEpisode";
import { convertDurationToTimeString } from "../../../utils/convertDurationToTimeString";
import {
  Container,
  Content,
  DescriptionSection,
  DurationString,
  Header,
  Members,
  BackButton,
  PlayButton,
  PublishedAt,
  TextSection,
  Thumbnail,
  ThumbnailContainer,
} from "./styles";

interface IEpisodeProps {
  episode: IFormattedEpisode;
}

const Episode: React.FC<IEpisodeProps> = ({ episode }) => {
  const router = useRouter();

  return (
    <Container>
      <Content>
        <ThumbnailContainer>
          <BackButton title="Voltar" onClick={() => router.push("/")} />
          <Thumbnail width={700} height={160} src={episode.thumbnail} objectFit="cover" />
          <PlayButton title="Tocar" />
        </ThumbnailContainer>

        <TextSection>
          <Header>{episode.title}</Header>
          <Members>{episode.members}</Members>
          <PublishedAt>{episode.publishedAt}</PublishedAt>
          <DurationString>{episode.durationString}</DurationString>
        </TextSection>

        <DescriptionSection dangerouslySetInnerHTML={{ __html: episode.description }} />
      </Content>
    </Container>
  );
};

export default Episode;

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: [],
    fallback: "blocking",
  };
};

export const getStaticProps: GetStaticProps = async (ctx) => {
  const response = await getEpisode({ id: ctx.params.id as string });

  const episode: IFormattedEpisode = {
    id: response.id,
    title: response.title,
    members: response.members,
    publishedAt: format(new Date(response.published_at), "d MMM yy", { locale: ptBR }),
    thumbnail: response.thumbnail,
    description: response.description,
    url: response.file.url,
    type: response.file.type,
    duration: response.file.duration,
    durationString: convertDurationToTimeString(response.file.duration),
  };

  return {
    props: { episode },
    revalidate: 60 * 60 * 24, // 24 hours
  };
};
