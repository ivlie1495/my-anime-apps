import { Link } from "react-router-dom";

const AnimeCard = ({ item }) => {
  const { id, title: { romaji, english }, coverImage: { large }} = item;

  return (
    <Link to={`/detail/${id}`}>
      <div className="h-60 w-40 flex flex-col bg-gray-200 items-center justify-center mb-3 text-gray-400 cursor-pointer rounded-xl overflow-hidden">
        <img className="w-full h-full" src={large} alt={english ?? romaji} />
      </div>
    </Link>
  );
};

export default AnimeCard;