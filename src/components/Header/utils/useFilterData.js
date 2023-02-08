const useFilterData = (searchText, restaurants) =>{
    const filterData = restaurants.filter((restaurant) =>
      restaurant?.data?.name.toLowerCase().includes(searchText.toLowerCase())
    );
    return filterData;
  } 
export default useFilterData;