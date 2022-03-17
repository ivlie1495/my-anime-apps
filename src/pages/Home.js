import { useQuery } from "@apollo/client";
import AnimeList from "../components/AnimeList";
import Error from "../components/Error";
import Loading from "../components/Loading";
import SearchBar from "../components/SearchBar";
import { ANIME_LIST } from "../graphql/query";

const Home = ({ searchTerm, setSearchTerm }) => {
  const { loading, data, error } = useQuery(ANIME_LIST, {
    variables: {
      page: 1,
      perPage: 12,
      search: searchTerm,
    }
  });

  return (
    <div className="flex justify-center items-start flex-col">
      <SearchBar searchTerm={searchTerm} handleSearchBarChange={(value) => setSearchTerm(value.length > 0 ? value : null)} />
      <div className="py-2 px-4 md:px-10 w-full">
        <div className="text-gray-400 text-xl font-bold">Anime List</div>
        {loading && (
          <div className="mt-4 flex justify-center items-center">
            <Loading />
          </div>
        )}
        {error && (
          <div className="mt-4">
            <Error />
          </div>
        )}
        {data && (
          <AnimeList media={data?.Page?.media} />
        )}
      </div>
    </div>
  );
};

export default Home;