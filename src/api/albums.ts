import { AxiosResponse } from "axios";
import { Album, AlbumDetail, Artist } from "../types";
import { instance } from "./axios";

export interface IAlbumApi {
  fetchAll(): Promise<AxiosResponse<Array<Album>>>;
  fetchById(id: number): Promise<AxiosResponse<AlbumDetail>>;
  fetchArtistByName(name : string) : Promise<AxiosResponse<Artist>>;
}

export const AlbumApi: IAlbumApi = {
  async fetchAll(): Promise<AxiosResponse<Array<Album>>> {
    const route = "albums/";
    return await instance.get<Array<Album>>(route);
  },
  async fetchById(id: number): Promise<AxiosResponse<AlbumDetail>> {
    const route = `albums/${id}`;
    return await instance.get<AlbumDetail>(route);
  },
  async fetchArtistByName(name : string) : Promise<AxiosResponse<Artist>>{
    const route = `albums/artist/${name}`;
    return await instance.get<Artist>(route);
  }
};
