import { useState } from "react";
import Card from "./Card";
import { useEffect } from "react";

let Search = ({ searchName, closeSidebar }) => {
  let [searchData, setSearchData] = useState([]);
  let fetchData = async () => {
    let res = await fetch(
      `https://api.themoviedb.org/3/search/multi?api_key=b03225b8f2bb9b71538539f97ae5d036&query=${searchName}`
    );
    let data = await res.json();
    setSearchData(data.results || []);
    console.log(data.results);
  };
  useEffect(() => {
    fetchData();
  }, [searchName]);
  if (!searchData)
    return <h1 className="text-white">{searchName} Not Found</h1>;
  return (
    <div
      className={`flex justify-start gap-2 flex-wrap mt-2 w-[77%] ${
        closeSidebar ? "min-w-[100%]" : "max-w-0 md:max-w-[78%]"
      } h-[88vh] overflow-scroll`}
    >
      <h1 className="text-2xl text-white font-bold px-4 py-2 m-4">
        Search for "{searchName}"
      </h1>
      <div className={`flex justify-start gap-2 flex-wrap m-4  `}>
        {searchData.map((movie, i) => {
          return <Card key={i} movie={movie} id={movie.id} />;
        })}
      </div>
    </div>
  );
};
export default Search;
