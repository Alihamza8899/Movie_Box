import { useOutletContext } from "react-router-dom";
import Card from "./Card";

let Popular = () => {
  let { closeSidebar, popular } = useOutletContext();

  return (
    <div
      className={`flex justify-start gap-2 flex-wrap mt-2 w-[77%] ${
        closeSidebar ? "min-w-[100%]" : "max-w-0 md:max-w-[78%]"
      } h-[88vh] overflow-scroll`}
    >
      <div>
        <h1 className="text-2xl text-white font-bold px-4 py-2 m-4">Popular</h1>
        <div className={` flex justify-start gap-2 flex-wrap m-4  `}>
          {popular.map((movie, i) => {
            return <Card key={i} movie={movie} id={movie.id} />;
          })}
        </div>
      </div>
    </div>
  );
};
export default Popular;
