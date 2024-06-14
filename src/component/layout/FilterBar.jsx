import SearchBox from "../search-box/SearchBox";
function FilterBar({ sortItemUp, sortItemDn }) {
  return (
    <div className="flex px-10 items-center h-[50px]">
      <div className="flex w-full justify-between items-center">
        <div className="flex items-center justify-end">
          <label htmlFor="button-ratting">Sort by ratting:</label>
          <div className="flex py-2 mx-4 gap-0.5">
            <button
              onClick={() => sortItemUp()}
              className="bg-gray-300 w-[100px] hover:bg-gray-400 text-gray-800  py-1 rounded-l-lg focus:outline-none focus:border-sky-100 focus:ring-orange-100 focus:ring-1"
            >
              Descending
            </button>
            <button
              onClick={() => sortItemDn()}
              className="bg-gray-300  w-[100px] hover:bg-gray-400 text-gray-800  py-1 rounded-r-lg"
            >
              Inscending
            </button>
          </div>
        </div>
        <SearchBox />
      </div>
    </div>
  );
}

export default FilterBar;
