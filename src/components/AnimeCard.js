import { Link } from "react-router-dom";
import Chip from "./Chip";

const AnimeCard = ({ item }) => {
  const { id, title: { romaji, english }, coverImage: { large }, genres, duration, favourites } = item;

  return (
    <Link to={`/detail/${id}`}>
      <div className="max-w-xs m-2 rounded overflow-hidden shadow-lg cursor-pointer">
        <img className="w-full" src={large} alt="banner" />
        <div className="px-6 py-4">
          <div className="font-bold text-lg mb-2">{english ?? romaji}</div>
          <div className="text-sm">
            <span>Duration: {duration ? (<strong>{duration} mins</strong>) : 'No data.'}</span>
          </div>
          <div className="text-sm">
            <strong>{favourites}</strong> liked this
          </div>
        </div>
        <div className="px-6 pb-2">
          {genres?.map((genre) => (
            <Chip 
              key={genre}
              text={genre}
            />
          ))}
        </div>
      </div>
    </Link>
  );
};

export default AnimeCard;