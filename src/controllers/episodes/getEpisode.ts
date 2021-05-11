import { api } from "../../services/api";
import { IEpisode } from "../../interfaces/episode/IEpisode";
import { IGetEpisodeParams } from "../../interfaces/episode/IGetEpisode";

type GetEpisode = (params: IGetEpisodeParams) => Promise<IEpisode>;

export const getEpisode: GetEpisode = async ({ id }) => {
  const { data } = await api.get(`episodes/${id}`);
  return data;
};
