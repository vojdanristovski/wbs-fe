import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { AlbumService } from "../service/albums";
import { Artist, Status } from "../types";

export const ArtistDetails: React.FC = () => {
  const { name } = useParams();
  const [artist, setArtist] = useState<Artist>({} as Artist);
  const [loading, setIsLoading] = useState(true);
  useEffect(() => {
    setIsLoading(true);
    AlbumService.fetchArtistByName(name!).then((resp) => {
      if (resp.status === Status.SUCCESS) {
        setArtist(resp.value);
        setIsLoading(false);
      }
    });
  }, [name]);

  return (
    <>
      {!loading && (
        <div className="bg-white">
          <div className="mx-auto py-16 sm:py-24 sm:px-6 lg:grid lg:grid-cols-2">
            {/* Product details */}
            <div className="lg:self-end pr-3">
              <div className="mt-4">
                <h1 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
                  {artist.name}
                </h1>
              </div>

              <section aria-labelledby="information-heading" className="mt-4">
                <h2 id="information-heading" className="sr-only">
                  Artist info
                </h2>

                <div className="flex items-center">
                  <p className="text-lg text-gray-900 sm:text-xl">
                    Birthplace : {artist.birthPlace}
                  </p>

                  <div className="ml-4 pl-4 border-l border-gray-300">
                    <div className="flex items-center">
                      <p className="text-lg text-gray-900 sm:text-xl">
                        Birthdate : {artist.birthDate}
                      </p>
                    </div>
                  </div>
                </div>

                <div className="mt-4 space-y-6">
                  <p className="text-base text-gray-500">{artist.desc}</p>
                </div>
              </section>
              <h1 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl my-3">
                  Songs
                </h1>
              <div className="grid grid-cols-2">
                {artist.songs.map((s) => {
                  return <h3>{s}</h3>;
                })}
              </div>
            </div>

            {/* Product image */}
            <div className=" lg:row-span-2 lg:self-center">
              <div className="aspect-w-1 aspect-h-1 rounded-lg overflow-hidden">
                <img
                  src={artist.thumbnail}
                  alt={artist.name}
                  className="w-full h-full object-center object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
