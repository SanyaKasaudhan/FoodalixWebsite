import { useParams } from "react-router-dom";
import {useDispatch} from 'react-redux';
import { addItem, addQty } from "../Header/utils/cartSlice";
import { IMG_CDN_URL } from "../Header/utils/constants";
import useRestaurant from "../Header/utils/useRestaurant";
import RestaurantListShimmer from "./RestaurantListShimmer";

const RestaurantList = () => {
  const { id } = useParams();
  const restaurant = useRestaurant(id);

  const dispatch=useDispatch();
  const addToCartStore = (item)=>{
    dispatch(addItem(item))
  }
  const addQtyToCartStore = (item)=>{
    dispatch(addQty(item))
  }
  return !restaurant ? (
    <RestaurantListShimmer />
  ) : (
    <>
      {console.log("res", restaurant)}
      <div className="box">
        <div >
          <img className="box-img" src={IMG_CDN_URL + restaurant?.cloudinaryImageId} />
        </div>
        <div className="box-content">
          <div>
            <h1>{restaurant?.name}</h1>
            <h2>{restaurant?.cuisines}</h2>
            <h4>{restaurant?.labels[1]?.message.toLowerCase()}</h4>
          </div>
          <div>
            {" "}
            <h3>
              {restaurant?.avgRating}{" "}
              <span
                className="fa fa-star"
                style={{ color: "#fbc02d", fontSize: "1rem" }}
              ></span>
              <span style={{ marginLeft: "25px" }}>
                {restaurant?.sla?.slaString.toLowerCase()}
              </span>
              <span style={{ marginLeft: "25px" }}>
                {restaurant?.costForTwoMsg}
              </span>
            </h3>
          </div>
        </div>
        <div>
          <div className="discount">
            {" "}
            OFFERS
            {restaurant?.aggregatedDiscountInfo?.descriptionList.map((data) => {
              return (
                <>  
                  <li key={data.id}>{data.meta}</li>
                </>
              );
            })}{" "}
          </div>{" "}
        </div>{" "}
      </div>
      <div>
        {Object.values(restaurant?.menu?.items).map((item) => (
          <div className="food-box">
            <span>
              <div className="food-item" key={item.id}>
                <div className="cart-body">
                <div className="cart-item-name">{item.name}</div>
                <div className="cart-item-description">{item?.description}</div>
                </div>
                <div className="add-cart">
                <img className="food-add-img" src={IMG_CDN_URL + item?.cloudinaryImageId} />
                 <button className="addTocart" onClick={()=>{addToCartStore(item);addQtyToCartStore(item)}}>Add To Cart</button>
                 </div>
                 
              </div>
            </span>
          </div>
        ))}
      </div>
      )
    </>
  );
};

export default RestaurantList;
