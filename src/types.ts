
export type Album = {
    released : number;
    name : string;
    artist : string;
    description : string;
    id : number;
    thumbnail : string;
}

export type AlbumDetail = {
    released : number;
    name : string;
    artist : string;
    description : string;
    genre : string;
    songs : Array<string>;

}

export type Artist = {
    desc : string;
    name : string;
    birthPlace : string;
    birthDate : string;
    thumbnail : string;
    songs : Array<string>;
}

export enum Status {
    SUCCESS,
    ERROR,
    LOADING,
  }
  
  export type Result<T> =
    | {
        value: T;
        message: null;
        status: Status.SUCCESS;
      }
    | {
        value: null;
        message: string;
        status: Status.ERROR;
      }
    | {
        value: null;
        message: null;
        status: Status.LOADING;
      };
  