import { useEffect } from "react";
import { useState } from "react";
import { useOutletContext } from "react-router-dom";
import Card from "./Card";

let Tvshow = () => {
  let { closeSidebar } = useOutletContext();
  let [show, setShow] = useState([]);
  useEffect(() => {
    let fetchShow = async () => {
      let res = await fetch(
        "https://api.themoviedb.org/3/discover/tv?api_key=b03225b8f2bb9b71538539f97ae5d036&with_genres=10764,10767&page=1"
      );
      let dat = await res.json();
      setShow(dat.results || []);
    };
    fetchShow();
  }, []);
  return (
    <div
      className={`flex justify-start gap-2 flex-wrap mt-2 w-[77%] ${
        closeSidebar ? "min-w-[100%]" : "max-w-0 md:max-w-[78%]"
      } h-[88vh] overflow-scroll`}
    >
      <div>
        <h1 className="text-2xl text-white font-bold px-4 py-2 m-4">Tv Show</h1>
        <div className={` flex justify-start gap-2 flex-wrap m-4  `}>
          {show.map((movie, i) => {
            return <Card key={i} movie={movie} id={movie.id} />;
          })}
        </div>
      </div>
    </div>
  );
};
export default Tvshow;
