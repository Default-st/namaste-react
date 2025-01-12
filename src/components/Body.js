import { useState } from "react";
import { restaurantCardData } from "../utils/mockData";
import { RestaurantCard } from "./RestaurantCard";

export const Body = () => {
  const [restaurantList, setRestaurantList] = useState(restaurantCardData);

  const handleTopRated = () => {
    const filteredList = restaurantCardData.filter((item) => {
      return item.info.avgRating > 4.4;
    });
    setRestaurantList(filteredList);
  };

  return (
    <div className="body">
      <button onClick={handleTopRated} className="filter-btn">
        Top Rated Restaurant
      </button>
      <div className="res-container">
        {restaurantList.map((resCard) => (
          <RestaurantCard resData={resCard} key={resCard.info.name} />
        ))}
      </div>
    </div>
  );
};
