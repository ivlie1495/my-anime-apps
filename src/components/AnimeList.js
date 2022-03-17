import AnimeCard from "./AnimeCard";

const AnimeList = ({ media }) => {
  return (
    <div className="flex flex-wrap gap-2 mt-3">
      {media?.map((data) => (
        <AnimeCard
          key={data.id}
          item={data}
        />
      ))}
    </div>
  );
}

export default AnimeList;