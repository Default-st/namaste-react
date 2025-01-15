import { useState } from "react";
import food from "../../public/food.png";

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
          <li>Home</li>
          <li>About Us</li>
          <li>Contact Us</li>
          <li>Cart</li>
          <button className="login" onClick={handleLogin}>
            {btn}
          </button>
        </ul>
      </div>
    </div>
  );
};
