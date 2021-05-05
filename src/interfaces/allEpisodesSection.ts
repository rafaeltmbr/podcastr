import React from "react";
import { IFormattedEpisode } from "./episodes";

export interface IAllEpisodeSection extends React.HTMLAttributes<HTMLElement> {
  episodes: IFormattedEpisode[];
}
