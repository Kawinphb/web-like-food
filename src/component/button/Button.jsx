import React from "react";

function Button({ menuItems, setDisplay, filterItems, iniData }) {
  
  return (
    <>
      <div className="container  flex justify-center items-center flex-wrap pt-5  px-8 h-20">
        <button
          onClick={() => setDisplay(iniData)}
          className="text-white bg-orange-300 hover:bg-orange-500 focus:bg-orange-500 focus:outline-none focus:ring-2 focus:ring-orange-500 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 "
        >
          ALL
        </button>
        {menuItems.map((item,index) => (
          <button
          key={index}
            onClick={() => filterItems(item)}
            className="text-white bg-orange-300 hover:bg-orange-500 focus:bg-orange-500 focus:outline-none focus:ring-2 focus:ring-orange-500 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2"
          >
            {item}
          </button>
        ))}
      </div>
    </>
  );
}

export default Button;
