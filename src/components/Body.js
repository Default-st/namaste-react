import { useEffect, useState } from "react";
import { restaurantCardData } from "../utils/mockData";
import { RestaurantCard } from "./RestaurantCard";
import Shimmer from "./Shimmer";
import { dummy } from "../dummy";
import { Link } from "react-router";
import useOnlineStatus from "../utils/useOnlineStatus";
export const Body = () => {
  const [restaurantList, setRestaurantList] = useState([]);
  const [filteredRestaurantList, setFilteredRestaurantList] = useState([]);
  const [searchRestaurant, setSearchRestaurant] = useState("");
  const onlineStatus = useOnlineStatus();
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    // const data = await fetch(
    //   "https://www.swiggy.com/mapi/restaurants/list/v5?offset=0&is-seo-homepage-enabled=true&lat=18.5790446&lng=73.6840874&carousel=true&third_party_vendor=1"
    // );
    // const json = await data.json();
    const json = dummy;

    const listOfRestaurant =
      json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants;

    setRestaurantList(listOfRestaurant);
    setFilteredRestaurantList(listOfRestaurant);
  };

  const handleTopRated = () => {
    const filteredList = restaurantCardData.filter((item) => {
      return item.info.avgRating > 4.4;
    });
    setFilteredRestaurantList(filteredList);
  };
  const handleSearch = () => {
    const searchedRestaurantList = restaurantList.filter((restaurant) => {
      return restaurant.info.name
        .toLowerCase()
        .includes(searchRestaurant?.toLowerCase());
    });

    setFilteredRestaurantList(searchedRestaurantList);
  };
  if (onlineStatus === false) {
    return <h1>Looks like you're offline</h1>;
  }
  return restaurantList?.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body m-3 p-4 border-4 border-gray-400 rounded-sm">
      <div className="flex justify-between gap-4 mb-4">
        <button
          onClick={handleTopRated}
          className="border border-gray-400 px-4 rounded-sm bg-gray-300 hover:bg-gray-200 hover:cursor-pointer"
        >
          Top Rated Restaurant
        </button>
        <div className="flex gap-4">
          <input
            type="text"
            className="border rounded-sm "
            value={searchRestaurant}
            onChange={(e) => setSearchRestaurant(e.target.value)}
          />
          <button
            onClick={handleSearch}
            className="bg-gray-300 hover:bg-gray-200 hover:cursor-pointer border rounded-sm border-gray-400 px-4 "
          >
            Search
          </button>
        </div>
      </div>
      <div className="grid grid-cols-4 gap-3 border p-3 ">
        {filteredRestaurantList.map((resCard) => (
          <Link to={`/restaurants/${resCard.info.id}`} key={resCard.info.id}>
            <RestaurantCard resData={resCard} key={resCard.info.name} />
          </Link>
        ))}
      </div>
    </div>
  );
};
