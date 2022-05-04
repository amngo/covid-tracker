import List from "components/List";
import { FaGlobe } from "react-icons/fa";
import Search from "./Search";

function Cases() {
  return (
    <div className="flex flex-col h-full self-center sm:self-center w-[300px] sm:w-[500px] xl:mb-0">
      <div className="flex items-center justify-center p-4 text-xl text-center bg-base-200">
        <FaGlobe />
        <p className="ml-2">Cases by Country</p>
      </div>
      <Search />
      <List />
    </div>
  );
}

export default Cases;
