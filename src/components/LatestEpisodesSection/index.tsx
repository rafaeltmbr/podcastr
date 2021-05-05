import React from "react";
import { ILatestEpisodeSection } from "../../interfaces";

import {
  Section,
  SectionTitle,
  List,
  ListItem,
  EpisodeTitleAnchor,
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
              <EpisodeTitleAnchor href="">{episode.title}</EpisodeTitleAnchor>
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
