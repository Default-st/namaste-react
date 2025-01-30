import { useState } from "react";
import ItemList from "./ItemList";

const RestaurantCategory = (props) => {
  const { title, itemCards } = props.card;

  return (
    <div className="border m-2 p-2 rounded-sm shadow-lg  ">
      <div
        className="flex justify-between items-center cursor-pointer"
        onClick={() => props.handleExpand(title)}
      >
        <h1 className="text-lg font-semibold">
          {title} ({itemCards.length})
        </h1>
        <button className="text-xs ">⬇️</button>
      </div>
      <ItemList
        title={title}
        items={itemCards}
        expandCategory={props.expandCategory}
        handleExpand={props.handleExpand}
      />
    </div>
  );
};
export default RestaurantCategory;
