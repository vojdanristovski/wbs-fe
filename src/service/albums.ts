import { AlbumApi } from "../api/albums";
import { Album, AlbumDetail, Artist, Result } from "../types";
import { Handler } from "./result";

export interface IAlbumService {
  fetchAll(): Promise<Result<Array<Album>>>;
  fetchById(id: number): Promise<Result<AlbumDetail>>;
  fetchArtistByName(name: string): Promise<Result<Artist>>;
}

export const AlbumService = {
  async fetchAll(): Promise<Result<Array<Album>>> {
    return await AlbumApi.fetchAll()
      .then((resp) => Handler.SuccessResult(resp.data))
      .catch((err) => Handler.ErrorResult(err));
  },
  async fetchById(id: number): Promise<Result<AlbumDetail>> {
    return await AlbumApi.fetchById(id)
      .then((resp) => Handler.SuccessResult(resp.data))
      .catch((err) => Handler.ErrorResult(err));
  },
  async fetchArtistByName(name: string): Promise<Result<Artist>> {
    return await AlbumApi.fetchArtistByName(name)
      .then((resp) => Handler.SuccessResult(resp.data))
      .catch((err) => Handler.ErrorResult(err));
  },
};
