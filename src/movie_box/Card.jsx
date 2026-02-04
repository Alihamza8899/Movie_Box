import { Link } from "react-router-dom";

let Card = ({ movie, id }) => {
  if (!movie) return null;
  let imgBase = "https://image.tmdb.org/t/p/w500";
  let imgPath = imgBase + movie.poster_path;
  return (
    <div className="w-[25%] md:w-[20%] min-h-[15rem]  ml-4 md:m-2 bg-[#ffffff0f] rounded-lg">
      <div className="w-[100%]  tranform transition-tranform duration-300 ease hover:scale-95">
        <Link to={`/detail/${id}`}>
          <img
            className="rounded-lg"
            src={movie.poster_path && imgPath}
            alt="movie_poster"
          />
        </Link>
      </div>
      <div className="text-sm md:text-lg text-white p-2 flex items-center flex-col font-semibold">
        <h1 className="pt-2">{movie.title || movie.name}</h1>
        <h1 className="pt-2">{movie.release_date || movie.first_air_date}</h1>
      </div>
    </div>
  );
};
export default Card;
