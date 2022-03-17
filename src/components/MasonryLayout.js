import Masonry from "react-masonry-css";
import AnimeCard from "./AnimeCard";

const breakPointObject = {
  default: 4,
  3000: 6,
  2000: 5,
  1200: 3,
  1000: 2,
  500: 1
}

const MasonryLayout = ({ media }) => {
  return (
    <Masonry className="flex animate-slide-fwd" breakpointCols={breakPointObject}>
      {media?.map((data) => (
        <AnimeCard
          key={data.id}
          item={data}
        />
      ))}
    </Masonry>
  );
}

export default MasonryLayout;