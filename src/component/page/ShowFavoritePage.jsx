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
  },[showDisplay])
  return (
    <div className="bg-white px-12">
      <Navbar />
      <button
        className="bg-blue-500 text-white rounded-xl px-4 py-2"
        onClick={() => handleClickDeleteActive()}
      >
        Remove list
      </button>
      <Content
        listData={showDisplay}
        isRemoveList={isRemoveList}
        hadleClickDelete={hadleClickDelete}
      />
    </div>
  );
}

export default ShowFavoritePage;
