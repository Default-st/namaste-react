import { useState } from "react";
import food from "../../public/food.png";
import { Link } from "react-router";
import useOnlineStatus from "../utils/useOnlineStatus";

export const Header = () => {
  const [btn, setBtn] = useState("Login");
  const onlineStatus = useOnlineStatus();
  console.log(onlineStatus);
  const handleLogin = () => {
    if (btn === "Login") {
      setBtn("Logout");
    } else {
      setBtn("Login");
    }
  };
  return (
    <div className="header">
      <div className="logo-container">
        <img className="logo" src={food} />
      </div>
      <div className="nav-items">
        <ul>
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
          <li>Cart</li>
          <button className="login" onClick={handleLogin}>
            {btn}
          </button>
        </ul>
      </div>
    </div>
  );
};
