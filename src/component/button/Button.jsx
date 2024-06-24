import React, { useState } from "react";
import './Button.css'

function Button({ menuItems, setDisplay, filterItems, iniData, display }) {
  const [category, setCategory] = useState("all")
  return (
    <>
      <div className="bg-white border-gray-200 py-4 px-36 ">
        <h1>Explore menu</h1>
        <div className="grid grid-cols-6">
          <div className="flex justify-center">
            <div 
              className={category==="all"
                ?"text-white bg-orange-500 hover:bg-orange-500 focus:bg-orange-500 focus:outline-none focus:ring-2 focus:ring-orange-500 font-medium rounded-lg text-sm px-2 py-2 text-center mx-1 my-2 w-full cursor-pointer"
                :"text-white bg-orange-300 hover:bg-orange-500 focus:bg-orange-500 focus:outline-none focus:ring-2 focus:ring-orange-500 font-medium rounded-lg text-sm px-2 py-2 text-center mx-1 my-2 w-full cursor-pointer"}
              onClick={() => {setDisplay(iniData),setCategory('all')}}
              >
                ALL
            </div>
          </div>
          {menuItems.map((item, index) => (
            <div key={index} className="flex justify-center">
              <div
              className={category===item
                ?"text-white bg-orange-500 hover:bg-orange-500 focus:bg-orange-500 focus:outline-none focus:ring-2 focus:ring-orange-500 font-medium rounded-lg text-sm px-2 py-2 text-center mx-1 my-2 w-full cursor-pointer"
                :"text-white bg-orange-300 hover:bg-orange-500 focus:bg-orange-500 focus:outline-none focus:ring-2 focus:ring-orange-500 font-medium rounded-lg text-sm px-2 py-2 text-center mx-1 my-2 w-full cursor-pointer"}
              onClick={() => {filterItems(item),setCategory(item)}}
              >
                {item}
              </div>
            </div>
          ))}
        </div>
      </div>
  </>
  );

}

export default Button;
