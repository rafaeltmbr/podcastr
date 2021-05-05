import React from "react";
import { IFormattedEpisode } from "./episodes";

export interface ILatestEpisodeSection extends React.HTMLAttributes<HTMLElement> {
  episodes: IFormattedEpisode[];
}
