import { useState, useEffect } from "react";
import { useOutletContext } from "react-router-dom";
import Card from "./Card";

let Movies = () => {
  let { closeSidebar } = useOutletContext();
  let [movies, setMovies] = useState([]);
  useEffect(() => {
    let fetchMovies = async () => {
      const res = await fetch(
        "https://api.themoviedb.org/3/discover/movie?api_key=b03225b8f2bb9b71538539f97ae5d036&page=6"
      );
      const dat = await res.json();
      setMovies(dat.results || []);
    };
    fetchMovies();
  }, []);
  return (
    <div
      className={`flex justify-start gap-2 flex-wrap mt-2 w-[77%] ${
        closeSidebar ? "min-w-[100%]" : "max-w-0 md:max-w-[78%]"
      } h-[88vh] overflow-scroll`}
    >
      <div>
        <h1 className="text-2xl text-white font-bold px-4 py-2 m-4">Movies</h1>
        <div className={` flex justify-start gap-2 flex-wrap m-4  `}>
          {movies.map((movie, i) => {
            return <Card key={i} movie={movie} id={movie.id} />;
          })}
        </div>
      </div>
    </div>
  );
};
export default Movies;
