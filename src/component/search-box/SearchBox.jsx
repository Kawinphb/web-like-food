import { useState } from "react";

function SearchBox({ searchItem, setDisplay, iniData }) {
  const [query, setQuery] = useState("");
  const handleSubmit = (event) => {
    event.preventDefault();
    searchItem(query);
  };

  return (
    <form className="relative " onSubmit={handleSubmit}>
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
        className="block w-[300px] px-2 pt-2 pb-2.5 ps-10 text-sm text-gray-600 border-sm border-gray-300 rounded-full bg-gray-200 focus:ring-gray-500 focus:border-gray-500"
        placeholder="Search food name"
      />
      <button className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-curcir ">
        <svg
          className="w-4 h-4 text-gray-500 text-gray-400"
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
  );
}

export default SearchBox;
