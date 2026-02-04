let TopNavbar = ({ CloseSidebar, setSearchName, searchName, search }) => {
  return (
    <div className="w-full text-3xl text-white flex justify-start flex-wrap md:flex-nowrap  p-2 ">
      <button className="px-2" onClick={() => CloseSidebar()}>
        {" "}
        &#9776;
      </button>
      <h1 className="text-4xl w-[80%] md:w-auto text-center my-4 md:m-2 text-green-500 cursor-pointer font-bold px-4 drop-shadow-[9px_8px_3px_rgba(0,0,0,0.7)]">
        Movie Box
      </h1>
      <div className="w-[95%] md:w-[50%] text-xl bg-[#fff3] rounded-lg flex items-center p-2 m-2 md:ml-4">
        <p className="px-2">&#128269;</p>
        <input
          value={searchName}
          onChange={(e) => setSearchName(e.target.value)}
          onKeyDown={(e) => search(e.key)}
          type="text"
          placeholder="Search by name"
          className="bg-transparent outline-none h-auto w-full"
        />
      </div>
    </div>
  );
};
export default TopNavbar;
