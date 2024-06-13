import { useEffect, useState } from "react";
import Content from "../layout/Content";
import Navbar from "../layout/Navbar";
import FilterBar from "../layout/FilterBar";
import Button from "../button/Button";
import axios from "axios";
function MainPage() {
  const [foods, setFoods] = useState([]); //ini data fetch first timee
  const [display, setDisplay] = useState([]);

  //fetch data form API
  const getDataFoods = async () => {
    try {
      const response1 = await axios.get(
        "https://www.themealdb.com/api/json/v1/1/search.php?f=a"
      );
      const response2 = await axios.get(
        "https://www.themealdb.com/api/json/v1/1/search.php?f=b"
      );
      const response3 = await axios.get(
        "https://www.themealdb.com/api/json/v1/1/search.php?f=c"
      );

      const concatRes = response1.data.meals.concat(
        response2.data.meals,
        response3.data.meals
      );

      const updateArray = await concatRes.map((item) => ({
        ...item,
        rate: Math.floor(Math.random() * 5) + 1,
      }));

      setDisplay(updateArray);
      setFoods(updateArray);
    } catch (error) {
      console.error("Error fetching the data", error);
    }
  };

  useEffect(() => {
    getDataFoods();
  }, []);

  const menuItems = [...new Set(foods.map((item) => item.strCategory))];

  const filterItems = (category) => {
    const newItems = foods.filter((item) => item.strCategory === category);
    setDisplay(newItems);
  };

  const searchItem = (nameSearch) => {
    if (nameSearch === "") {
      setDisplay(foods);
    } else {
      const nameFood = foods.filter(
        (item) => item.strMeal.toLowerCase() === nameSearch.toLowerCase()
      );
      setDisplay(nameFood);
    }
  };

  const sortItemUp = () => {
    const maxToMinItems = [...display].sort((a, b) => b.rate - a.rate);
    setDisplay(maxToMinItems);
  };
  const sortItemDn = () => {
    const maxToMinItems = [...display].sort((a, b) => a.rate - b.rate);
    setDisplay(maxToMinItems);
  };

  const [favoriteList, setFavoriteList] = useState(() => {
    const savelistMeals = localStorage.getItem("listMeals");

    if (savelistMeals) {
      return JSON.parse(savelistMeals);
    } else {
      return [];
    }
  });
  
  const handleAddFav = (data) => {
    if (favoriteList !== "") {
      setFavoriteList([...favoriteList, data]);
    }
  };

  useEffect(() => {
    localStorage.setItem("listMeals", JSON.stringify(favoriteList));
  }, [favoriteList]);
  // console.log("fav", favoriteList);
  return (
    <>
      <Navbar searchItem={searchItem} setDisplay={setDisplay} iniData={foods} />
      <Button
        menuItems={menuItems}
        filterItems={filterItems}
        setDisplay={setDisplay}
        iniData={foods}
      />
      <FilterBar sortItemUp={sortItemUp} sortItemDn={sortItemDn} />
      <Content listData={display} handleAddFav={handleAddFav} />
    </>
  );
}

export default MainPage;
