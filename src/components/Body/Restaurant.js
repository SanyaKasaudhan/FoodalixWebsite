
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { FOOD_API, IMG_CDN_URL } from "../Header/utils/constants";
import RestaurantCard from "./RestaurantCard";
import RestauratCardShimmer from "./RestauratCardShimmer";

function filterData(searchText, restaurants) {
  const filterData = restaurants.filter((restaurant) =>
    restaurant?.data?.name.toLowerCase().includes(searchText.toLowerCase())
  );
  return filterData;
} 
const Restaurant = () => {
  const [searchText, setSearchText] = useState("");
  const [allRestaurants, setAllRestaurants] = useState([]);
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);
  const [errorMessage, setErrorMessage] = useState("");
  useEffect(() => {
    getRestaurants();
  }, []);

  async function getRestaurants() {
    // handle the error using try... catch
    try {
      const data = await fetch(FOOD_API);
      const json = await data.json();
      // updated state variable restaurants with Swiggy API data
      setAllRestaurants(json?.data?.cards[2]?.data?.data?.cards);
      setFilteredRestaurants(json?.data?.cards[2]?.data?.data?.cards);
    } catch (error) {
      console.log(error);
    }
  }

  //sort data
  function sortData(sort){
    console.log(sort,filteredRestaurants,"sort");

    if(sort=='LOW_TO_HIGH_RATING')
    setFilteredRestaurants(allRestaurants.slice().sort((a,b)=> b.avgRating - a.avgRating))

    if(sort=='HIGH_TO_LOW_RATING')
    setFilteredRestaurants(allRestaurants.slice().sort((a,b)=> a.avgRating - b.avgRating))


  }
  // use searchData function and set condition if data is empty show error message
  const searchData = (searchText, restaurants) => {
    if (searchText !== "") {
      const data = filterData(searchText, restaurants);
      setFilteredRestaurants(data);
      setErrorMessage("");
      if (data.length === 0) {
        setErrorMessage(`Sorry, the searched content is not available "${searchText}"`);
      }
    } else {
      setErrorMessage("");
      setFilteredRestaurants(restaurants);
    }
  };

  if (!allRestaurants) return null;
  return (
    <>
    {console.log("filter",filteredRestaurants)}
      <div className="search-container">
        <input
          type="text"
          className="search-input"
          placeholder="Search a restaurant you want..."
          value={searchText}
          // update the state variable searchText when we typing in input box
          onChange={(e) => setSearchText(e.target.value)}
        ></input>
        <button
          className="search-btn"
          onClick={() => {
            // user click on button searchData function is called
            searchData(searchText, allRestaurants);
          }}
        >
          Search
        </button>

        <select className="sort_data" onChange={(event)=>sortData(event.target.value)}>
          <option value="DEFAULT" disabled>Sort</option>
          <option value="LOW_TO_HIGH_PRICE">Price, Low to high</option>
          <option value="HIGH_TO_LOW_PRICE">Price, High to Low</option>
          <option value="RATING">Rating</option>
          <option value="LOW_TO_HIGH_RATING">Rating, Low to high</option>
          <option value="HIGH_TO_LOW_RATING">Rating, High to Low</option>
        </select>
      </div>
      {errorMessage && <div className="error-container">{errorMessage}</div>}

      {allRestaurants?.length === 0 ? (
        <RestauratCardShimmer />
      ) : (
        <div className="restaurant-list">
          {/* We are mapping restaurants array and passing JSON array data to RestaurantCard component as props with unique key as restaurant.data.id */}
          {filteredRestaurants.map((restaurant) => {
            return (
              <Link className="rest-card"
                to={"/restaurant/" + restaurant.data.id}
                key={restaurant.data.id}
              >
                <RestaurantCard {...restaurant.data} />
              </Link>
            );
          })}
        </div>
      )}
    </>
  )
}
export default Restaurant;
