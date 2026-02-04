import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./movie_box/Home_page";
import HomePageContent from "./movie_box/HomePageContent";
import Movies from "./movie_box/Movies";
import Series from "./movie_box/Series";
import Animation from "./movie_box/Animation";
import Tvshow from "./movie_box/Tvshow";
import Trending from "./movie_box/Trending";
import Toprated from "./movie_box/Toprated";
import Popular from "./movie_box/Popular";
import Search from "./movie_box/Search";
import DetailBox from "./movie_box/DetailBox";

function App() {
  return (
    <main style={{ padding: "0px", margin: "0px" }}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}>
            <Route path="" element={<HomePageContent />} />
            <Route path="home" element={<HomePageContent />} />
            <Route path="movies" element={<Movies />} />
            <Route path="series" element={<Series />} />
            <Route path="animation" element={<Animation />} />
            <Route path="tv_show" element={<Tvshow />} />
            <Route path="trending" element={<Trending />} />
            <Route path="popular" element={<Popular />} />
            <Route path="top_rated" element={<Toprated />} />
            <Route path="search" element={<Search />} />
            <Route path="detail/:id" element={<DetailBox />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </main>
  );
}

export default App;
