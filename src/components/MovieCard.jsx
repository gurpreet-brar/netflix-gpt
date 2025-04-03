import { IMG_CDN_URL } from "../utils/constants";

const MovieCard = ({ posterPath }) => {
  if (!posterPath) return null;
  return (
    <div className="w-30 ">
      <img
        className="rounded-sm hover:scale-120 cursor-pointer overflow-visible"
        alt="Movie Card"
        src={`${IMG_CDN_URL}${posterPath}`}
      />
    </div>
  );
};

export default MovieCard;
