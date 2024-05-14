import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addItems, clearCart, removeItem } from "../store/slices/cart-slice";

const Cart = () => {
  const items = useSelector((store) => store.cart.items);
  const dispatch = useDispatch();

  useEffect(() => {
    document.getElementById("cart-items").addEventListener("click", (e) => {
      const classList = e.target.classList;

      if (classList.contains("food-item-incr")) {
        dispatch(addItems(e.target.dataset.items));
      } else if (classList.contains("food-item-decr")) {
        dispatch(removeItem(e.target.id));
      } else if (classList.contains("clear-cart")) {
        dispatch(clearCart());
      }
    });
  }, []);

  return (
    <div
      id="cart-items"
      className="mt-[120px] p-11 flex gap-8 justify-center flex-col items-center"
    >
      <h1 className="font-bold text-2xl text-orange-500">CART</h1>
      <button className="clear-cart font-bold shadow-lg py-2 px-4 rounded-lg active:bg-orange-400 active:text-white">
        Clear Cart
      </button>
      <div className="flex flex-col gap-3">
        {Object.entries(items).map((item) => {
          console.log(item);
          const { id, name, price, defaultPrice } = item[1].details;
          return (
            <div
              key={id}
              id={id}
              className="w-[60vw] p-4 pr-10 rounded-lg flex justify-between items-center  shadow-sm"
            >
              <div>
                <div className="font-bold">{name}</div>
                <div>₹ {(price ?? defaultPrice) / 100}</div>
              </div>
              <div className=" text-green-600  bg-slate-50 px-4 rounded-lg flex justify-between gap-4 items-center">
                <button className="food-item-decr" id={id}>
                  -
                </button>
                <h1>{item[1].count}</h1>
                <button
                  className="food-item-incr"
                  data-items={JSON.stringify(item[1].details)}
                >
                  +
                </button>
              </div>
            </div>
          );
        })}
      </div>
      {/* <div className="w-[40vw] h-[50vh] bg-slate-50 w-4/12 rounded-xl"></div> */}
    </div>
  );
};

export default Cart;
