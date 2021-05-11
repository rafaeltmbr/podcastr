import React from "react";
import { IFormattedEpisode } from "../episode/IEpisode";

export interface IAllEpisodeSection extends React.HTMLAttributes<HTMLElement> {
  episodes: IFormattedEpisode[];
}
