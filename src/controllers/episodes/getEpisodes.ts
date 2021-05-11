import { IGetEpisodesParams } from "../../interfaces/controllers/IGetEpisodes";
import { IEpisode } from "../../interfaces/episode/IEpisode";
import { api } from "../../services/api";

type GetEpisodes = (params?: IGetEpisodesParams) => Promise<IEpisode[]>;

export const getEpisodes: GetEpisodes = async (params) => {
  const { data } = await api.get<IEpisode[]>("episodes", {
    params: {
      _limit: params?._limit || 12,
      _page: params?._page || 1,
      _sort: params?._sort || "published_at",
      _order: params?._order || "desc",
    },
  });

  return data;
};
