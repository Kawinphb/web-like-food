function FilterBar({ sortItemUp, sortItemDn }) {
  return (
    <div className="flex justify-end px-16 items-center h-10">
      <div className="inline-flex h-10">
        <button
          onClick={() => sortItemUp()}
          className="bg-gray-300 w-20 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded-l-lg border-r-4"
        >
          Up
        </button>
        <button 
        onClick={() => sortItemDn()}
        className="bg-gray-300  w-20 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded-r-lg">
          Down
        </button>
      </div>
    </div>
  );
}

export default FilterBar;
