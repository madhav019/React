import React from "react";
import { CDN_URL } from "../utils/constants";
import { useSelector } from "react-redux";

const Accordian = ({ data, collapse, onChange }) => {
  const { title, itemCards: description } = data?.card?.card;
  const cartItems = useSelector((store) => store.cart.items);

  return (
    <div className="border-b-[20px] border-slate-100 py-2 px-4 my-1 h-full">
      {/* Title */}
      <div
        id={title}
        className="flex justify-between items-center cursor-pointer select-none mb-4"
        onClick={() => {
          onChange((prev) => (prev === title ? null : title));
        }}
      >
        <h1 className="font-bold text-1xl">
          {title} ({description?.length})
        </h1>
        <div className="w-4 h-4">
          <img
            className="w-full h-full"
            src="https://www.iconpacks.net/icons/2/free-arrow-down-icon-3101-thumb.png"
          />
        </div>
      </div>

      {/* Description */}
      <div className={`${collapse ? "max-h-full" : "max-h-0"} overflow-hidden`}>
        {description &&
          description.length > 0 &&
          description.map((item, index) => {
            const {
              id,
              name,
              description: desc,
              price,
              imageId,
              defaultPrice,
            } = item.card.info;

            const { [id]: details } = cartItems;

            return (
              <div
                key={id}
                className={`py-4 flex items-center justify-between ${
                  index !== description.length - 1 &&
                  "border-b-2 border-slate-200"
                }`}
              >
                <div className="w-9/12">
                  <div className="font-bold">{name}</div>
                  <div>₹ {(price ?? defaultPrice) / 100}</div>
                  <div>{desc}</div>
                </div>
                <div className="w-2/12 h-20 relative">
                  <img
                    src={CDN_URL + imageId}
                    className="w-full h-full rounded-md"
                    alt={name}
                  />
                  <Button details={details} item={item.card.info} />
                </div>
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default Accordian;

const Button = ({ item, details }) => {
  return details ? (
    <div className=" text-green-600 absolute w-[60%] bg-white px-2 rounded-lg -bottom-2 left-[20%] shadow-xl flex justify-between items-center">
      <button className="food-item-decr" id={item.id}>
        -
      </button>
      <h1>{details.count}</h1>
      <button className="food-item-incr" data-items={JSON.stringify(item)}>
        +
      </button>
    </div>
  ) : (
    <button
      data-items={JSON.stringify(item)}
      className="food-item-incr text-green-600 absolute w-[60%] bg-white px-2 rounded-lg -bottom-2 left-[20%] shadow-xl"
    >
      Add
    </button>
  );
};
