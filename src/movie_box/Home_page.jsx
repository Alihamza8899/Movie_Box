import HomePageContent from "./HomePageContent";
import { useState, useEffect } from "react";
import Search from "./Search";
import { Outlet } from "react-router-dom";
import TopNavbar from "./TopNavbar";
import SideNavbar from "./SideNavbar";

let Home = () => {
  let [trending, setTrending] = useState([]);
  let [popular, setPopular] = useState([]);
  let [upcoming, setUpcoming] = useState([]);
  let [toprated, setToprated] = useState([]);
  let [closeSidebar, setCloseSidebar] = useState(false);
  let [searchName, setSearchName] = useState("");
  let [isSearch, setIsSearch] = useState(false);

  let fetchTrending = async () => {
    const res = await fetch(
      "https://api.themoviedb.org/3/trending/all/week?api_key=b03225b8f2bb9b71538539f97ae5d036"
    );
    const dat = await res.json();
    setTrending(dat.results || []);
  };
  let fetchPopular = async () => {
    const res = await fetch(
      "https://api.themoviedb.org/3/movie/popular?api_key=b03225b8f2bb9b71538539f97ae5d036"
    );
    const dat = await res.json();
    setPopular(dat.results || []);
  };
  let fetchUpcoming = async () => {
    const res = await fetch(
      "https://api.themoviedb.org/3/movie/upcoming?api_key=b03225b8f2bb9b71538539f97ae5d036"
    );
    const dat = await res.json();
    setUpcoming(dat.results || []);
  };
  let fetchToprated = async () => {
    const res = await fetch(
      "https://api.themoviedb.org/3/movie/top_rated?api_key=b03225b8f2bb9b71538539f97ae5d036"
    );
    const dat = await res.json();
    setToprated(dat.results || []);
  };
  let CloseSidebar = () => {
    setCloseSidebar(!closeSidebar);
  };
  let search = (key) => {
    if (key == "Enter" && searchName) setIsSearch(true);
    else if (key == "Backspace" && searchName) setIsSearch(false);
  };
  useEffect(() => {
    fetchTrending();
    fetchPopular();
    fetchUpcoming();
    fetchToprated();
  }, []);
  return (
    <div className="bg-[#101114] opacity-95">
      <TopNavbar
        CloseSidebar={CloseSidebar}
        setSearchName={setSearchName}
        searchName={searchName}
        search={search}
      />
      <hr className="border border-[#fff3]" />
      <div className="flex ">
        <SideNavbar
          closeSidebar={closeSidebar}
          setCloseSidebar={setCloseSidebar}
        />
        {isSearch ? (
          <Search searchName={searchName} closeSidebar={closeSidebar} />
        ) : (
          <Outlet
            context={{
              trending,
              popular,
              upcoming,
              toprated,
              closeSidebar,
            }}
          />
        )}
      </div>
    </div>
  );
};
export default Home;
