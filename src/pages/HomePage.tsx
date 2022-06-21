import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { AlbumService } from "../service/albums";
import { Album, Status } from "../types";

export const HomePage: React.FC = () => {
  const [albums, setAlbums] = useState<Array<Album>>([]);

  useEffect(() => {
    AlbumService.fetchAll().then((resp) => {
      if (resp.status === Status.SUCCESS) {
        setAlbums(resp.value);
      }
    });
  }, []);

  return (
    <div>
      <h1 className="text-center text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl mt-4">
        Albums after 2021
      </h1>
      <ul className="grid grid-cols-1 gap-6 m-5 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {albums
          .filter((v, i, a) => a.findIndex((v2) => v.name === v2.name) === i)
          .map((album) => (
            <Link to={`/albums/${album.id}`}>
              <li
                key={album.id}
                className="col-span-1 flex flex-col text-center bg-white rounded-lg shadow divide-y divide-gray-200"
              >
                <div className="flex-1 flex flex-col p-8">
                  <h3 className="mt-1 text-gray-900 text-sm font-medium">
                    Album Name :{" "}
                    <span className="text-black font-semibold">
                      {album.name}
                    </span>
                  </h3>
                  <h3 className="mt-1 text-gray-900 text-sm font-medium">
                    Artist :{" "}
                    <span className="text-black font-semibold">
                      {album.artist}
                    </span>
                  </h3>
                  <dl className="mt-1 flex-grow flex flex-col justify-between">
                    <dd className="text-gray-500 text-sm truncate">
                      Album decription :{" "}
                      <span className="text-gray-600">{album.description}</span>
                    </dd>
                  </dl>
                </div>
              </li>
            </Link>
          ))}
      </ul>
    </div>
  );
};
