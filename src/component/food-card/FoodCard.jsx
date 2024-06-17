import { useEffect, useState } from "react";
import RenderStar from "./RenderStar";

function FoodCard({
  renderCard,
  handleAddFav,
  isRemoveList,
  hadleClickDelete,
}) {
  return (
    <div className="w-full md:w-1/3 xl:w-1/4 p-6 flex flex-col">
      <div>
        <a href={renderCard.strYoutube} target="_blank">
          <img
            className="hover:grow hover:shadow-[0_35px_60px_-15px_rgba(0,0,0,0.3)] rounded-[24px]  "
            src={renderCard.strMealThumb}
          />
        </a>
        <div className="pt-3 px-4 flex items-center justify-between">
          <p className="font-bold text-gray-700 text-wrap">
            {renderCard.strMeal}
          </p>
          {isRemoveList ? (
            <button
              className="bg-rose-600  hover:bg-rose-500 text-white py-1 px-2 text-xs border border-rose-500 hover:border-transparent rounded"
              onClick={() => hadleClickDelete(renderCard.idMeal)}
            >
              Remove
            </button>
          ) : (
            <button
              className="bg-orange-600  hover:bg-orange-500 text-white py-1 px-2 text-xs border border-orange-500 hover:border-transparent rounded"
              onClick={() => handleAddFav(renderCard)}
            >
              Favorite
            </button>
          )}
        </div>
        <div className="px-4">
          <p className="pt-1 text-gray-900">
            <span className="font-bold text-gray-700">Area:</span>{" "}
            {renderCard.strArea}
          </p>
          <p className="pt-1 text-gray-900">
            <span className="font-bold text-gray-700">Category:</span>{" "}
            {renderCard.strCategory}
          </p>
          <p>
            <span className="font-bold text-gray-700">Rating:</span>{" "}
            <RenderStar rate={renderCard.rate} />
          </p>
        </div>
      </div>
    </div>
  );
}

export default FoodCard;
