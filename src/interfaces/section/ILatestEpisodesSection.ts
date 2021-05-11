import React from "react";
import { IFormattedEpisode } from "../episode/IEpisode";

export interface ILatestEpisodeSection extends React.HTMLAttributes<HTMLElement> {
  episodes: IFormattedEpisode[];
}
