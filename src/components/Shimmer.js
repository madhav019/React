import ResturantCardShimmer from "./ResturantCardShimmer";

const Shimmer = () => {
  return (
    <div className="shimmer-container">
      {[...Array(5)].map((_, id) => (
        <ResturantCardShimmer key={id} />
      ))}
    </div>
  );
};

export default Shimmer;
