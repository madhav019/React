import { useContext, useState } from "react";
import { LOGO_URL } from "../utils/constants";
import { Link, NavLink } from "react-router-dom";
import useOnlineStatus from "../hooks/useOnlineStatus";
import UserContext from "../contexts/UserContext";
import { useSelector } from "react-redux";

const Header = () => {
  const [isSignedIn, setIsSignedIn] = useState(false);

  const onlineStatus = useOnlineStatus();

  const { loggedInUser } = useContext(UserContext);

  /******************************************************************************/

  // const Store = useSelector((store) => store); // here we are subscribing to the complete store. Now if there is any change in any reducer,  then this componenet will get updated.

  // const cartItmes = Store.cart.items;

  /******************************************************************************/

  // Subscribing to the store using a Selector
  const cartItmes = useSelector((store) => store.cart.items); // this is the best way, because in this we are just subscribing to cart slice, if there are changes in the cart slice then only this componenet will get updated.

  /******************************************************************************/

  return (
    <div className="z-50 flex justify-between items-center px-16 py-4 shadow-lg mb-3 fixed w-[100vw] top-0 bg-white">
      <div className="logo-container">
        <Link to="/">
          <img className="w-24" src={LOGO_URL} />
        </Link>
      </div>
      <div>
        <ul className="flex gap-5 font-medium nav-items">
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <Link to="about">About Us</Link>
          </li>
          <li>
            <Link to="contact">Contact Us</Link>
          </li>
          <li>
            <Link to="cart">Cart ({Object.keys(cartItmes).length})</Link>
          </li>
          <button onClick={() => setIsSignedIn((prev) => !prev)}>
            {isSignedIn ? "Logout" : "Sign In"}
          </button>
          <li>{loggedInUser}</li>
          <li>{onlineStatus ? "🟢" : "🔴"}</li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
