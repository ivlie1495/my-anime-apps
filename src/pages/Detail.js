import { useQuery } from "@apollo/client";
import { useParams } from "react-router-dom";
import parse from 'html-react-parser';
import Chip from "../components/Chip";
import { ANIME_DETAIL } from "../graphql/query";
import Loading from "../components/Loading";
import Error from "../components/Error";

const Detail = () => {
  const { id } = useParams();
  const { loading, data, error } = useQuery(ANIME_DETAIL, {
    variables: { id }
  });

  return (
    <div className="flex justify-center items-center flex-col">
      {loading && (
        <div className="py-10 my-10">
          <Loading />
        </div>
      )}
      {error && (
        <div className="py-10 my-10">
          <Error />
        </div>
      )}
      {data && (
        <div className="container sm:px-2 py-10 my-10 flex flex-col bg-gray-100 bg-opacity-80 rounded-3xl">
          <div className="mx-auto">
            <div className="flex flex-col sm:flex-row">
              <div className="sm:w-3/6 text-center sm:pr-8 sm:py-8">
                <div className="rounded-lg overflow-hidden inline-flex items-center justify-center bg-transparent text-gray-400">
                  <img src={data?.Media?.bannerImage ?? data?.Media?.coverImage.large} alt={data?.Media?.title?.english ?? data?.Media?.title?.romaji} />
                </div>
                <div className="flex flex-col items-center text-center justify-center">
                  <h1 className="font-bold font-heading text-2xl md:text-3xl mt-4 text-gray-900">
                    {data?.Media?.title?.english ?? data?.Media?.title?.romaji}
                  </h1>
                  <div className="flex flex-row flex-wrap justify-center">
                    {data?.Media?.duration} mins
                  </div>
                  <div className="flex flex-row flex-wrap justify-center mt-4">
                    {data?.Media?.genres?.map((genre) => (
                      <Chip 
                        key={genre}
                        text={genre}
                      />
                    ))}
                  </div>
                  <p className="mt-2 px-5 font-sans text-md lg:text-lg text-gray-800">
                    {parse(data?.Media?.description)}
                  </p>
                </div>
              </div>
              <div className="sm:w-3/6 sm:pl-8 sm:py-8 sm:border-l border-gray-600  sm:border-t-0 border-t mt-4 pt-4 sm:mt-0 text-center sm:text-left">
                <div className="grid grid-cols-2 text-center mt-4">
                  <div className="text-lg sm:text-xl font-bold font-heading text-gray-800">
                    Average Score
                  </div>
                  <div className="text-lg sm:text-xl font-bold font-heading text-gray-800">
                    Status
                  </div>
                  <div className="text-xl sm:text-3xl font-bold font-heading mx-5 md:mx-auto border-t border-gray-600">
                    {data?.Media?.averageScore}
                  </div>
                  <div className="text-xl sm:text-3xl font-bold font-heading mx-5 md:mx-auto border-t border-gray-600">
                    {data?.Media?.status}
                  </div>
                </div>
                <div className="text-center font-heading mt-8">
                  <span className="text-4xl">&ldquo;</span>
                  <span className="text-2xl font-heading font-semibold">
                    {data?.Media?.favourites} peoples liked this.
                  </span>
                  <span className="text-4xl">&rdquo;</span>
                </div>
                <div className="container w-full flex justify-center mt-4 mx-auto">
                  <img src={data?.Media?.coverImage?.large} alt="banner" />
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Detail;