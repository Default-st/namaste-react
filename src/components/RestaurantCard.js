import { CDN_URL } from "../utils/constants";

export const RestaurantCard = ({ resData }) => {
  const { name, cuisines, avgRating, totalRatingsString, costForTwo, sla } =
    resData.info;
  return (
    <div className="res-card">
      <img alt="res-logo" src={CDN_URL + resData.info.cloudinaryImageId} />
      <h3>{name}</h3>
      <h4>{cuisines.join(", ")}</h4>
      <div>
        <h4>
          {avgRating} stars - {totalRatingsString}
        </h4>
        <h4>{costForTwo}</h4>
        <h4>{sla.slaString}</h4>
      </div>
    </div>
  );
};
