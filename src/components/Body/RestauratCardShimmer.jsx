
const RestauratCardShimmer = () => {
    return (
      <>
      <div className="shimInput">
        <div className="shimBox">
        </div>
        <div className="shimBtn">
        </div>
      </div>
        <div className="shimContainer">
      {new Array(15).fill(0).map((element, index) => {
        return <CardShimmer key={index} />;
      })}
    </div>
    </>
    )
}

const CardShimmer = () => {
    return (
      <div className="shimmer-card">
        <div className="shimmer-img stroke-img animate"></div>
        <div className="shimmer-title stroke animate"></div>
        <div className="shimmer-tags stroke animate "></div>
        <div className="shimmer-details stroke animate "></div>
      </div>
    );
  };

export default RestauratCardShimmer
