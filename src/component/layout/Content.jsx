import FoodCard from "../food-card/FoodCard";

function Content({ listData, handleAddFav, isRemoveList,hadleClickDelete }) {
  
  return (
    <section className="bg-white ">
      <div className="container mx-auto flex items-center flex-wrap pt-1 pb-12 px-8">
        {listData.map((meal, index) => (
          <FoodCard 
          key={index} 
          renderCard={meal} 
          handleAddFav={handleAddFav}
          isRemoveList={isRemoveList}
          hadleClickDelete={hadleClickDelete}
          />
        ))}
      </div>
    </section>
  );
}

export default Content;
