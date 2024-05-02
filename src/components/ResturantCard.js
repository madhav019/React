import { CDN_URL } from "../utils/constants";

const ResturantCard = ({ data: { info } }) => {
  const {
    id,
    name,
    cuisines,
    avgRatingString,
    sla: { slaString },
    cloudinaryImageId,
  } = info;

  return (
    <div id={id} className="res-card">
      <div className="res-logo">
        <img src={CDN_URL + cloudinaryImageId} />
      </div>
      <div className="res-content">
        <h3>{name}</h3>
        <h4>{cuisines.join(", ")}</h4>
        <h4>{`${avgRatingString} stars`}</h4>
        <h4>{slaString}</h4>
      </div>
    </div>
  );
};

export default ResturantCard;
