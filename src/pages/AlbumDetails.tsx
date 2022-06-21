import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import { AlbumService } from "../service/albums";
import { AlbumDetail, Status } from "../types";

export const AlbumDetails: React.FC = () => {
  const { id } = useParams();
  const [album, setAlbum] = useState<AlbumDetail>({} as AlbumDetail);
  const [loading, setIsLoading] = useState(true);
  useEffect(() => {
    setIsLoading(true);
    AlbumService.fetchById(parseInt(id!)).then((resp) => {
      console.log(resp);
      if (resp.status === Status.SUCCESS) {
        setAlbum(resp.value);
        setIsLoading(false);
      }
    });
  }, [id]);

  return (
    <>
      {!loading && (
        <div className="bg-white shadow overflow-hidden sm:rounded-lg">
          <div className="px-4 py-5 sm:px-6">
            <h3 className="text-xl leading-6 font-semibold text-gray-900 text-center">
              Album Information
            </h3>
          </div>
          <div className="border-t border-gray-200 px-4 py-5 sm:px-6">
            <dl className="grid grid-cols-1 gap-x-4 gap-y-8 sm:grid-cols-2">
              <div className="sm:col-span-1">
                <dt className="text-sm font-medium text-gray-500">Name</dt>
                <dd className="mt-1 text-sm text-gray-900">{album.name}</dd>
              </div>
              <div className="sm:col-span-1">
                <dt className="text-sm font-medium text-gray-500">Genre</dt>
                <dd className="mt-1 text-sm text-gray-900">{album.genre}</dd>
              </div>
              <div className="sm:col-span-1">
                <dt className="text-sm font-medium text-gray-500">Artist</dt>
                <Link
                  to={`/artists/${album.artist}`}
                  className="bg-indigo-500 rounded-md"
                >
                  <dd className="mt-1 text-sm text-white mt-3">
                    <span className="bg-indigo-500 rounded-md px-3 py-2">
                      {album.artist}
                    </span>
                  </dd>
                </Link>
              </div>
              <div className="sm:col-span-1">
                <dt className="text-sm font-medium text-gray-500">
                  Release year
                </dt>
                <dd className="mt-1 text-sm text-gray-900">{album.released}</dd>
              </div>
              <div className="sm:col-span-2">
                <dt className="text-sm font-medium text-gray-500">About</dt>
                <dd className="mt-1 text-sm text-gray-900">
                  {album.description}
                </dd>
              </div>
              <div className="sm:col-span-2">
                <dt className="text-sm font-medium text-gray-500">Songs</dt>
                <dd className="mt-1 text-sm text-gray-900">
                  <ul className="border border-gray-200 rounded-md divide-y divide-gray-200">
                    {album.songs.map((s) => {
                      return (
                        <li className="pl-3 pr-4 py-3 flex items-center justify-between text-sm">
                          <div className="w-0 flex-1 flex items-center">
                            <span className="ml-2 flex-1 w-0 truncate">
                              {s}
                            </span>
                          </div>
                        </li>
                      );
                    })}
                  </ul>
                </dd>
              </div>
            </dl>
          </div>
        </div>
      )}
    </>
  );
};
