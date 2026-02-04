import style from "./navbar.module.css";
let SNavbar = () => {
  return (
    <div className="w-[25%] bg-[#311847] h-screen p-2 text-white overflow-scroll">
      <h1 className="text-4xl cursor-pointer font-bold px-4 py-8 drop-shadow-[9px_8px_3px_rgba(0,0,0,0.7)]">
        Movie Box
      </h1>
      <hr />
      <ul className={`py-10 text-lg font-semibold `}>
        <li className={`px-16 py-2 ${style.hovereffect}`}>Home</li>

        <li className={`px-16 py-2 ${style.hovereffect}`}>Movies</li>

        <li className={`px-16 py-2 ${style.hovereffect}`}>Series</li>

        <li className={`px-16 py-2 ${style.hovereffect}`}>Anime</li>
      </ul>

      <h1 className={`text-xl font-semibold px-8 py-2 ${style.hovereffect}`}>
        log out
      </h1>
    </div>
  );
};

export default Navbar;
