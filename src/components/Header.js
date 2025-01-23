import { useState } from "react";
import food from "../../public/food.png";
import { Link } from "react-router";

export const Header = () => {
  const [btn, setBtn] = useState("Login");
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
