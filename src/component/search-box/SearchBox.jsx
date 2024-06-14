import { useState } from "react";

function SearchBox({ searchItem, setDisplay, iniData }) {
  const [query, setQuery] = useState("");
  const handleSubmit = (event) => {
    event.preventDefault();
    searchItem(query);
  };
  console.log(query);
  return (
    <div className="flex py-2 px-4 ">
      <form className="relative" onSubmit={handleSubmit}>
        <input
          onChange={(e) => {
            if (e.target.value === "") {
              setDisplay(iniData);
            } else {
              setQuery(e.target.value);
            }
          }}
          type="text"
          id="search-navbar"
          className="block w-[300px] px-2 pt-2 pb-2.5 ps-10 text-sm text-gray-600  rounded-full bg-gray-200 focus:outline-none focus:border-sky-100 focus:ring-orange-100 focus:ring-1"
          placeholder="Search food name"
        />
        <button className="absolute  top-0 right-0 h-full w-[55px]  pointer-curcir rounded-r-full  bg-gray-300 border-l-sm ">
          <svg
            className="w-12 h-4 text-gray-500 text-gray-400"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 20 20"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
            />
          </svg>
          <span className="sr-only">Search icon</span>
        </button>
      </form>
    </div>
  );
}

export default SearchBox;
