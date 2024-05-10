import React, { useEffect, useState } from "react";
import Accordian from "./Accordian";
import { useDispatch } from "react-redux";
import { addItems, removeItem } from "../store/slices/cart-slice";

const AccordianWrapper = ({ data }) => {
  const [expanded, setExpanded] = useState(null);

  const dispatch = useDispatch();

  // managing items to the cart
  useEffect(() => {
    document.getElementById("menu").addEventListener("click", (e) => {
      const classList = e.target.classList;

      if (classList.contains("food-item-incr")) {
        dispatch(addItems(e.target.dataset.items));
      } else if (classList.contains("food-item-decr")) {
        dispatch(removeItem(e.target.id));
      }
    });
  }, []);

  return (
    <div id="menu">
      {data &&
        data.length > 0 &&
        data.map((item, index) => {
          return (
            <Accordian
              key={index}
              data={item}
              collapse={expanded === item?.card?.card?.title}
              onChange={setExpanded}
            />
          );
        })}
    </div>
  );
};

export default AccordianWrapper;
