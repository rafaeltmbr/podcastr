import React from "react";
import { IAllEpisodeSection } from "../../interfaces";

import { EpisodesSection, EpisodesTitle, EpisodesList, EpisodesListItem } from "./styles";

export const AllEpisodesSection: React.FC<IAllEpisodeSection> = ({ episodes, ...rest }) => {
  return (
    <EpisodesSection {...rest}>
      <EpisodesTitle></EpisodesTitle>
      <EpisodesList>
        <EpisodesListItem></EpisodesListItem>
      </EpisodesList>
    </EpisodesSection>
  );
};
