
import { IMG_CDN_URL } from "../Header/utils/constants";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
const RestaurantCard = ({
  cloudinaryImageId,
  name,
  area,
  lastMileTravelString,
  costForTwoString,
  avgRating,
  address
}) => {
  return (
    <div className="card">
      <img src={IMG_CDN_URL + cloudinaryImageId} />
      <div className="rest-card-name">{name}</div>
      <div className="rest-card-area">Area- {area}</div>
      <span className="rest-card-area">
        <div>
         {
            new Array(Math.floor(avgRating)).fill(0).map((_, index) =>
            <span className="fa fa-star" style = { {color: "#fbc02d", fontSize: "1rem" }}></span>
            )
          }
          {
            !Number.isInteger(avgRating) && <span className="fa fa-star-half-o" style = { {color: "#fbc02d", fontSize: "1rem" }}></span>
          } 
        </div>

        <div>{lastMileTravelString}</div>

        <div>{costForTwoString}</div>
      </span>
    </div>
  );
};

export default RestaurantCard;