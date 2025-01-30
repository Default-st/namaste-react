import { useContext, useState } from "react";
import food from "../../public/food.png";
import { Link } from "react-router";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserCpntext";
import { useSelector } from "react-redux";

export const Header = () => {
  const [btn, setBtn] = useState("Login");
  const onlineStatus = useOnlineStatus();
  const data = useContext(UserContext);
  const cart = useSelector((store) => store.cart.items);

  const handleLogin = () => {
    if (btn === "Login") {
      setBtn("Logout");
    } else {
      setBtn("Login");
    }
  };
  return (
    <div className="shadow-lg border-4 border-gray-400 rounded-lg flex items-center justify-between m-3 p-3">
      <div className="logo-container">
        <img className="w-14" src={food} />
      </div>
      <div>
        <ul className="flex gap-4">
          <li>Online Status : {onlineStatus ? "✅" : "❌"}</li>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About Us</Link>
          </li>
          <li>
            {" "}
            <Link to="/contact">Contact Us</Link>
          </li>
          <Link to="/cart" className="font-bold text-xl cursor-pointer">
            Cart ({cart.length} items)
          </Link>
          <button className="login" onClick={handleLogin}>
            {btn}
          </button>
          <li>{data.loggedInUser}</li>
        </ul>
      </div>
    </div>
  );
};
