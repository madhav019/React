import { useEffect, useState } from "react";
import { MENU_URL } from "../utils/constants";

const useResturantMenu = (resturantId) => {
  const [resData, setResData] = useState([]);
  const [metaData, setMetaData] = useState({});
  const [menu, setMenu] = useState([]);

  useEffect(() => {
    fetchMenu();
  }, []);

  const fetchMenu = async () => {
    const response = await fetch(MENU_URL(resturantId));

    const data = await response.json();

    setResData(data.data);
    setMetaData(data.data?.cards?.[2]?.card?.card?.info);
    setMenu(
      data.data?.cards?.[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards?.filter(
        (item) => item?.card?.card?.["@type"].includes("ItemCategory")
      )
    );
  };

  return { resData, metaData, menu };
};

export default useResturantMenu;
