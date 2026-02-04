import { NavLink } from "react-router-dom";
import style from "./navbar.module.css";
let SideNavbar = ({ closeSidebar, setCloseSidebar }) => {
  return (
    <div
      className={`${style.navbar} ${
        closeSidebar && style.animate
      } w-[40vh] md:w-[23%] bg-[rgba(50,50,50,0.3)] h-[88vh]  mt-2 text-white overflow-y-scroll ${
        closeSidebar ? "w-0" : ""
      }`}
    >
      <NavLink
        onClick={() => setCloseSidebar(true)}
        to="/"
        className={({ isActive }) =>
          isActive ? "block text-green-500 bg-[#fff3] " : ""
        }
      >
        <h1 className="text-4xl hover:bg-[#fff3] cursor-pointer font-bold px-4 py-4 drop-shadow-[9px_8px_3px_rgba(0,0,0,0.7)]">
          Home
        </h1>
      </NavLink>
      <hr className="border border-[#fff3]" />
      <ul className={`py-10 text-2xl md:text-lg font-semibold `}>
        <NavLink
          onClick={() => setCloseSidebar(true)}
          to="/movies"
          className={({ isActive }) =>
            isActive ? "block text-green-500 bg-[#fff3] " : ""
          }
        >
          <li className={`px-8 py-4 hover:bg-[#fff3] `}>Movies</li>
        </NavLink>
        <NavLink
          onClick={() => setCloseSidebar(true)}
          to="/series"
          className={({ isActive }) =>
            isActive ? "block text-green-500 bg-[#fff3] " : ""
          }
        >
          <li className={`px-8 py-4 hover:bg-[#fff3]`}>Series</li>
        </NavLink>
        <NavLink
          onClick={() => setCloseSidebar(true)}
          to="/animation"
          className={({ isActive }) =>
            isActive ? "block text-green-500 bg-[#fff3] " : ""
          }
        >
          <li className={`px-8 py-4 hover:bg-[#fff3]`}>Animation</li>
        </NavLink>
        <NavLink
          onClick={() => setCloseSidebar(true)}
          to="/tv_show"
          className={({ isActive }) =>
            isActive ? "block text-green-500 bg-[#fff3] " : ""
          }
        >
          <li className={`px-8 py-4 hover:bg-[#fff3]`}>TV show</li>
        </NavLink>
        <NavLink
          onClick={() => setCloseSidebar(true)}
          to="/trending"
          className={({ isActive }) =>
            isActive ? "block text-green-500 bg-[#fff3] " : ""
          }
        >
          <li className={`px-8 py-4 hover:bg-[#fff3]`}>Trending</li>
        </NavLink>
        <NavLink
          onClick={() => setCloseSidebar(true)}
          to="/popular"
          className={({ isActive }) =>
            isActive ? "block text-green-500 bg-[#fff3] " : ""
          }
        >
          <li className={`px-8 py-4 hover:bg-[#fff3]`}>Popular </li>
        </NavLink>
        <NavLink
          onClick={() => setCloseSidebar(true)}
          to="/top_rated"
          className={({ isActive }) =>
            isActive ? "block text-green-500 bg-[#fff3] " : ""
          }
        >
          <li className={`px-8 py-4 hover:bg-[#fff3]`}>Top Rated</li>
        </NavLink>
      </ul>
    </div>
  );
};

export default SideNavbar;
