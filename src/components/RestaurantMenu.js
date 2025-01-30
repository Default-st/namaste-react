import { useParams } from "react-router";
import Shimmer from "./Shimmer";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import RestaurantCategory from "./RestaurantCategory";
import { useState } from "react";

const RestaurantMenu = () => {
  const { resId } = useParams();
  const [expandCategory, setExpandCategory] = useState("");
  const restaurantDetails = useRestaurantMenu(resId);

  const handleExpand = (title) => {
    if (title === expandCategory) setExpandCategory("");
    else {
      setExpandCategory(title);
    }
  };
  if (restaurantDetails === null) {
    return <Shimmer />;
  }
  const { name, costForTwoMessage, cuisines } =
    restaurantDetails?.data?.cards[2]?.card?.card?.info;

  const itemCategories =
    restaurantDetails?.data?.cards[5]?.groupedCard?.cardGroupMap?.REGULAR.cards.filter(
      (item) =>
        item.card.card["@type"] ===
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );

  return (
    <div className="text-center m-3 p-4 border-4 border-gray-400 rounded-sm">
      <h2 className="text-2xl font-bold my-3">{name}</h2>
      <h2>{costForTwoMessage}</h2>
      <p className="font-bold text-lg">{cuisines.join(",")}</p>

      {itemCategories?.map((category) => {
        return (
          <RestaurantCategory
            card={category.card.card}
            key={category.card.card.title}
            handleExpand={handleExpand}
            expandCategory={expandCategory}
          />
        );
      })}
    </div>
  );
};
export default RestaurantMenu;
