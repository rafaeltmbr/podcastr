import React from "react";
import Link from "next/link";

import { ILatestEpisodeSection } from "../../interfaces";

import {
  Section,
  SectionTitle,
  List,
  ListItem,
  EpisodeTitle,
  Details,
  PublishedAt,
  Duration,
  Members,
  PlayButton,
  PlayIcon,
  Thumbnail,
} from "./styles";

export const LatestEpisodesSection: React.FC<ILatestEpisodeSection> = ({ episodes, ...rest }) => {
  return (
    <Section {...rest}>
      <SectionTitle>Últimos lançamentos</SectionTitle>
      <List>
        {episodes?.map((episode) => (
          <ListItem key={episode.id}>
            <Thumbnail
              width={192}
              height={192}
              src={episode.thumbnail}
              alt={episode.title}
              objectFit="cover"
            />
            <Details>
              <EpisodeTitle>
                <Link href="">{episode.title}</Link>
              </EpisodeTitle>
              <Members>{episode.members}</Members>
              <PublishedAt>{episode.publishedAt}</PublishedAt>
              <Duration>{episode.durationString}</Duration>
            </Details>
            <PlayButton title="Tocar Podcast">
              <PlayIcon source="./assets/img/play-green.svg" />
            </PlayButton>
          </ListItem>
        ))}
      </List>
    </Section>
  );
};
