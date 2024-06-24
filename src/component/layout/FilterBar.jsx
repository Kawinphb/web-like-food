import { useEffect, useState } from "react";
import SearchBox from "../search-box/SearchBox";
function FilterBar({
  sortItemUp,
  sortItemDn,
  searchItem,
  setDisplay,
  iniData,
  state,
  setState
}) {

  return (
    <div className="flex px-32 items-center h-[50px]">
      <div className="flex w-full justify-between items-center px-6">
        <div className="flex items-center justify-end">
          <label htmlFor="button-ratting">Sort by ratting:</label>
          <div className="flex py-2 mx-4 gap-0.5">
            <button
              onClick={() => {sortItemUp(),setState("up")}}
              className={state==="up"
                ?"bg-gray-400 w-[100px] text-gray-800  py-1 rounded-l-lg"
                :"bg-gray-300 w-[100px] hover:bg-gray-400 text-gray-800  py-1 rounded-l-lg"
              }
            >
              Descending
            </button>
            <button
              onClick={() => {sortItemDn(),setState("down")}}
              className={state==="down"
                ?"bg-gray-400 w-[100px] text-gray-800  py-1 rounded-r-lg"
                :"bg-gray-300 w-[100px] hover:bg-gray-400 text-gray-800  py-1 rounded-r-lg"
              }
            >
              Inscending
            </button>
          </div>
        </div>
        <SearchBox
          searchItem={searchItem}
          setDisplay={setDisplay}
          iniData={iniData}
        />
      </div>
    </div>
  );
}

export default FilterBar;
