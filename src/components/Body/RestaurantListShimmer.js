
const RestaurantListShimmer = () => {
    return (
      <>
      <div className="shimHeader animate">
      <div className="loader"></div>
        <div className="load">Looking for great food near...</div>
      </div>
      <p className="shimmer">Shimmering Text</p>
        <div className="shimContainerList">
      {new Array(25).fill(0).map((element, index) => {
        return <CardShimmer key={index} />;
      })}
    </div>
    </>
    )
}

const CardShimmer = () => {
    return (
        <>
            <div className="shimHeaderList animate"></div>
            
        </>
    );
  };

export default RestaurantListShimmer;
