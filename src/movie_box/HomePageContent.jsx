import { useState } from "react";
import Card from "./Card.jsx";
import Style from "./home.module.css";
import { useOutletContext } from "react-router-dom";

let HomePageContent = () => {
  let { trending, popular, upcoming, toprated, closeSidebar } =
    useOutletContext();
  console.log(useOutletContext());
  let [showBtnT, setShowBtnT] = useState(false);
  let [showBtnU, setShowBtnU] = useState(false);
  let [showBtnP, setShowBtnP] = useState(false);
  let [showBtnTop, setShowBtnTop] = useState(false);

  if (trending.length === 0) {
    return <h1>Not Found</h1>;
  }

  return (
    <div
      className={`flex justify-start md:gap-2 flex-wrap mt-2 w-[70%] md:w-[78%] ${
        closeSidebar ? "min-w-[100%]" : "max-w-0 md:max-w-[78%]"
      } h-[90vh]  overflow-scroll`}
    >
      <div className="my-4">
        <h1 className="text-2xl text-white font-bold p-2 md:px-4 md:py-2 m-4">
          Trending Now
        </h1>
        <div
          className={` ${Style.hide} ${
            showBtnT ? Style.show : ""
          } flex justify-start gap-2 flex-wrap m-4  `}
        >
          {trending.map((movie, i) => {
            return <Card key={i} movie={movie} id={movie.id} />;
          })}
        </div>
        <button
          onClick={() => setShowBtnT(!showBtnT)}
          className="text-white text-3xl font-bold flex justify-center w-full"
        >
          {showBtnT ? (
            <i className="fa-solid fa-angle-up"></i>
          ) : (
            <i className="fa-solid fa-angle-down"></i>
          )}
        </button>
      </div>
      <div className="my-4">
        <h1 className="text-2xl text-white font-bold px-4 py-2 m-4">
          Upcoming
        </h1>
        <div
          className={` ${Style.hide} ${
            showBtnU ? Style.show : ""
          } flex justify-start gap-2 flex-wrap m-4  `}
        >
          {upcoming.map((movie, i) => {
            return <Card key={i} movie={movie} id={movie.id} />;
          })}
        </div>
        <button
          onClick={() => setShowBtnU(!showBtnU)}
          className="text-white text-3xl font-bold flex justify-center w-full"
        >
          {showBtnU ? (
            <i className="fa-solid fa-angle-up"></i>
          ) : (
            <i className="fa-solid fa-angle-down"></i>
          )}
        </button>
      </div>
      <div className="my-4">
        <h1 className="text-2xl text-white font-bold px-4 py-2 m-4">Popular</h1>
        <div
          className={` ${Style.hide} ${
            showBtnP ? Style.show : ""
          } flex justify-start gap-2 flex-wrap m-4  `}
        >
          {popular.map((movie, i) => {
            return <Card key={i} movie={movie} id={movie.id} />;
          })}
        </div>
        <button
          onClick={() => setShowBtnP(!showBtnP)}
          className="text-white text-3xl font-bold flex justify-center w-full"
        >
          {showBtnP ? (
            <i className="fa-solid fa-angle-up"></i>
          ) : (
            <i className="fa-solid fa-angle-down"></i>
          )}
        </button>
      </div>
      <div className="my-4">
        <h1 className="text-2xl text-white font-bold px-4 py-2 m-4">
          Top Rated
        </h1>
        <div
          className={` ${Style.hide} ${
            showBtnTop ? Style.show : ""
          } flex justify-start gap-2 flex-wrap m-4  `}
        >
          {toprated.map((movie, i) => {
            return <Card key={i} movie={movie} id={movie.id} />;
          })}
        </div>
        <button
          onClick={() => setShowBtnTop(!showBtnTop)}
          className="text-white text-3xl font-bold flex justify-center w-full"
        >
          {showBtnTop ? (
            <i className="fa-solid fa-angle-up"></i>
          ) : (
            <i className="fa-solid fa-angle-down"></i>
          )}
        </button>
      </div>
    </div>
  );
};
export default HomePageContent;
