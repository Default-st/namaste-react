import { useEffect, useState } from "react";
import { restaurantCardData } from "../utils/mockData";
import { RestaurantCard } from "./RestaurantCard";
import Shimmer from "./Shimmer";
import { dummy } from "../dummy";
import { Link } from "react-router";
export const Body = () => {
  const [restaurantList, setRestaurantList] = useState([]);
  const [filteredRestaurantList, setFilteredRestaurantList] = useState([]);
  const [searchRestaurant, setSearchRestaurant] = useState("");

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

  return restaurantList?.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <button onClick={handleTopRated} className="filter-btn">
        Top Rated Restaurant
      </button>
      <input
        type="text"
        className="search-box"
        value={searchRestaurant}
        onChange={(e) => setSearchRestaurant(e.target.value)}
      ></input>
      <button onClick={handleSearch} className="search-btn">
        Search
      </button>
      <div className="res-container">
        {filteredRestaurantList.map((resCard) => (
          <Link to={`/restaurants/${resCard.info.id}`} key={resCard.info.id}>
            <RestaurantCard resData={resCard} key={resCard.info.name} />
          </Link>
        ))}
      </div>
    </div>
  );
};
