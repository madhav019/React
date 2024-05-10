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
    <div
      id={id}
      className="res-card m-5 w-60 h-[90%] rounded-xl overflow-hidden hover:scale-95 hover:shadow-lg transition-transform duration-300 ease-in-out cursor-pointer"
    >
      <div className="h-40">
        <img className="w-[100%] h-[100%]" src={CDN_URL + cloudinaryImageId} />
      </div>
      <div className="p-4">
        <h3 className="truncate">{name}</h3>
        <h4 className="truncate">{cuisines.join(", ")}</h4>
        <h4>{`${avgRatingString} stars`}</h4>
        <h4>{slaString}</h4>
      </div>
    </div>
  );
};

export default ResturantCard;

export const Discounted = ({ children, info }) => {
  return (
    <div>
      <label>{`${info.header} ${info.subHeader}`}</label>
      {children}
    </div>
  );
};

export const withDiscount = (ResturanCard) => {
  return (props) => {
    const { header, subHeader } = props.data.info.aggregatedDiscountInfoV3;
    return (
      <div className="relative">
        <label className="absolute top-36 left-3 font-bold text-white py-1 px-4">{`${header} ${subHeader}`}</label>
        <ResturanCard {...props} />
      </div>
    );
  };
};
