import { useState } from "react";
import { useEffect } from "react";
import { data, useOutletContext, useParams } from "react-router-dom";

let DetailBox = () => {
  let { closeSidebar } = useOutletContext();
  let [dataDetail, setDataDetail] = useState([]);
  let id = useParams().id;
  useEffect(() => {
    let fetchDetail = async () => {
      try {
        let res = await fetch(
          `https://api.themoviedb.org/3/movie/${id}?api_key=b03225b8f2bb9b71538539f97ae5d036`
        );
        let data = await res.json();

        if (data.success === false) {
          let res2 = await fetch(
            `https://api.themoviedb.org/3/tv/${id}?api_key=b03225b8f2bb9b71538539f97ae5d036`
          );
          let data2 = await res2.json();

          setDataDetail(data2);
        } else {
          setDataDetail(data);
        }
      } catch (error) {
        console.error(error);
      }
    };
    fetchDetail();
  }, []);

  console.log(dataDetail);
  return (
    dataDetail && (
      <div
        className={`${
          closeSidebar ? "min-w-[100%]" : "max-w-0 md:max-w-[78%]"
        } text-3xl text-white  md:w-[77%] flex flex-col md:flex-row `}
      >
        <div className="w-[90%] md:w-[50%] m-4">
          <img
            className="w-[100%] rounded-2xl"
            src={`https://image.tmdb.org/t/p/w500/${dataDetail.poster_path}`}
            alt="poster"
          />
        </div>
        <div className="w-[100%] md:w-[50%] mx-4 md:my-12">
          <h5 className="text-2xl font-bold py-2 text-green-500">
            Name :{" "}
            <span className="text-xl font-semibold  text-white px-4">
              {dataDetail.title || dataDetail.name}
            </span>
          </h5>
          <h5 className="text-2xl font-bold py-2 text-green-500 ">
            Released Date:{" "}
            <span className="text-xl font-semibold text-white px-4">
              {dataDetail.release_date || dataDetail.first_air_date}
            </span>
          </h5>
          <div className="w-[100%] flex flex-col items-center">
            <h5 className="text-2xl font-bold py-2 text-green-500 self-start">
              Overview :-
            </h5>
            <p className="text-lg w-[70%] ">{dataDetail.overview}</p>
          </div>

          <h5 className="text-2xl font-bold py-2 text-green-500 ">
            Popularity:{" "}
            <span className="text-xl font-semibold text-white px-4">
              {dataDetail.popularity}
            </span>
          </h5>
        </div>
      </div>
    )
  );
};
export default DetailBox;
