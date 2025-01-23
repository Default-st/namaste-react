import { useNavigate, useLocation, useParams } from "react-router";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { MENU_API } from "../utils/constants";
const RestaurantMenu = () => {
  const [restaurantDetails, setRestaurantDetails] = useState(null);
  const { resId } = useParams();
  console.log(resId);

  const fetchMenu = async () => {
    const data = await fetch(
      `${MENU_API}${resId}&catalog_qa=undefined&submitAction=ENTER`
    );
    const json = await data.json();

    setRestaurantDetails(json);
  };

  useEffect(() => {
    fetchMenu();
  }, []);

  if (restaurantDetails === null) {
    return <Shimmer />;
  }
  const { name, costForTwoMessage, cuisines, id } =
    restaurantDetails?.data?.cards[2]?.card?.card?.info;

  const menu =
    restaurantDetails?.data?.cards[5]?.groupedCard?.cardGroupMap?.REGULAR
      .cards[2].card.card.itemCards;

  return (
    <div>
      <h1>Name of Restaurant</h1>
      <h2>{name}</h2>
      <h2>{costForTwoMessage}</h2>
      <h3>{cuisines.join(",")}</h3>
      <h4>Menu</h4>
      <ul>
        {menu?.map((menuItem) => (
          <li key={menuItem.card.info.id}>
            {menuItem.card.info.name} - Rs{" "}
            {menuItem.card.info.finalPrice
              ? menuItem.card.info.finalPrice
              : menuItem.card.info.defaultPrice}
          </li>
        ))}
      </ul>
    </div>
  );
};
export default RestaurantMenu;
