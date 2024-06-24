import Navbar from "../layout/Navbar";
import Content from "../layout/Content";
import { useState } from "react";
import { useEffect } from "react";

function ShowFavoritePage() {
  const [showDisplay, setShowDisplay] = useState(() => {
    const getData = localStorage.getItem("listMeals");
    if (getData) {
      return JSON.parse(getData);
    } else {
      return [];
    }
  });

  const [isRemoveList, setIsRemoveList] = useState(false);

  const handleClickDeleteActive = () => {
    setIsRemoveList(true);
  };

  const hadleClickDelete = (id) => {
    const removeItems = showDisplay.filter((item) => {
      console.log(item);
      return item.idMeal !== id;
    });
    setShowDisplay(removeItems);
  };
  useEffect(() => {
    localStorage.setItem("listMeals", JSON.stringify(showDisplay));
  }, [showDisplay]);
  return (
    <div className="bg-white px-12">
      <Navbar />
      <div className="bg-white border-gray-200 py-4 px-36 ">
        <div className="flex justify-strat ">
          <button
            className="select-none rounded-lg bg-orange-400 py-2 px-4 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md shadow-gray-900/10 transition-all hover:shadow-lg hover:shadow-gray-900/20 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
            onClick={() => handleClickDeleteActive()}
          >
            Remove list
          </button>
        </div>
      </div>
      {!showDisplay?
      <Content
        listData={showDisplay}
        isRemoveList={isRemoveList}
        hadleClickDelete={hadleClickDelete}
      />
      :<div className="h-96">
        
      </div>
    }
    </div>
  );
}

export default ShowFavoritePage;
