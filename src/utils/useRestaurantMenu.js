import { useEffect, useState } from "react";
import { MENU_API } from "./constants";

const useRestaurantMenu = (resId) => {
  const [resInfo, setResInfo] = useState(null);
  useEffect(() => {
    fetchData();
  }, []);
  const fetchData = async () => {
    const data = await fetch(
      `${MENU_API}${resId}&catalog_qa=undefined&submitAction=ENTER`
    );
    const jsonData = await data.json();
    setResInfo(jsonData);
  };
  return resInfo;
};

export default useRestaurantMenu;
