import { useQuery } from "@apollo/client";
import MasonryLayout from "../components/MasonryLayout";
import SearchBar from "../components/SearchBar";
import { ANIME_LIST } from "../graphql/query";

const Home = ({ searchTerm, setSearchTerm }) => {
  const { loading, data, error } = useQuery(ANIME_LIST, {
    variables: {
      page: 1,
      perPage: 10,
      search: searchTerm,
    }
  });

  return (
    <>
      <SearchBar searchTerm={searchTerm} handleSearchBarChange={(value) => setSearchTerm(value.length > 0 ? value : null)} />
      <div className="max-w-6xl">
        {loading && (
          <div>Loading...</div>
        )}
        {error && (
          <div>Error...</div>
        )}
        {data && (
          <MasonryLayout
            media={data?.Page?.media}
          />
        )}
      </div>
    </>
  );
};

export default Home;