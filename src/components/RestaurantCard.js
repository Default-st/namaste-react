import { useContext } from "react";
import { CDN_URL } from "../utils/constants";
import UserContext from "../utils/UserCpntext";

export const RestaurantCard = ({ resData }) => {
  const {
    name,
    promoted,
    cuisines,
    avgRating,
    totalRatingsString,
    costForTwo,
    sla,
  } = resData.info;
  const { loggedInUser } = useContext(UserContext);

  return (
    <div className="border-2 rounded-sm p-2 bg-gray-100 w-[250px]">
      <img
        alt="res-logo"
        className="w-full"
        src={CDN_URL + resData.info.cloudinaryImageId}
      />
      <h3 className="font-bold pt-4 text-lg">{name}</h3>
      <h4>{cuisines.join(", ")}</h4>
      <div>
        <h4>
          {avgRating} stars - {totalRatingsString}
        </h4>
        <h4>{costForTwo}</h4>
        <h4>{sla.slaString}</h4>
        <h4>User: {loggedInUser}</h4>
      </div>
    </div>
  );
};

export const withPromotedLabel = (RestaurantCard) => {
  return (props) => {
    return (
      <div>
        <label className="absolute bg-black text-white m-2 p-2 rounded-lg">
          Promoted
        </label>
        <RestaurantCard {...props} />
      </div>
    );
  };
};
