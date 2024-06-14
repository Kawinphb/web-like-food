import React from "react";

function Button({ menuItems, setDisplay, filterItems, iniData }) {
  return (
    <div className="bg-white border-gray-200 py-4 px-36 ">
      <div className="flex justify-center ">
        <button
          onClick={() => setDisplay(iniData)}
          className="text-white bg-orange-300 hover:bg-orange-500 focus:bg-orange-500 focus:outline-none focus:ring-2 focus:ring-orange-500 font-medium rounded-lg text-sm px-2 py-2 text-center mx-1 my-2 w-[100px]"
        >
          ALL
        </button>
        {menuItems.map((item, index) => (
          <button
            key={index}
            onClick={() => filterItems(item)}
            className="text-white bg-orange-300 hover:bg-orange-500 focus:bg-orange-500 focus:outline-none focus:ring-2 focus:ring-orange-500 font-medium rounded-lg text-sm px-2 py-2 text-center mx-1 my-2 w-[100px]"
          > 
            {item}
          </button>
        ))}
      </div>
    </div>
  );
}

export default Button;
