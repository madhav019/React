import { useEffect, useState } from "react";
import ResturantCard from "./ResturantCard";
import Shimmer from "./Shimmer";
import { useNavigate } from "react-router-dom";

const Body = () => {
  const navigate = useNavigate();

  const [resData, setResData] = useState([]);
  const [displayData, setDisplayData] = useState([]);
  const [topRatedFiltered, setTopRatedFiltered] = useState(false);
  const [searchText, setSearchText] = useState("");

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=29.1311188&lng=75.7291536&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTIN"
    );

    const json = await data.json();

    setResData(
      json?.data?.cards?.[1]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants
    );
  };

  useEffect(() => {
    fetchData();
  }, []);

  const updateContent = () => {
    let result = resData;

    if (!!searchText) {
      result = result.filter((item) =>
        item.info.name.toLowerCase().includes(searchText.toLowerCase())
      );
    }

    if (topRatedFiltered) {
      result = result.filter((item) => +item.info.avgRatingString > 4.4);
    }

    setDisplayData(result);
  };

  useEffect(() => {
    updateContent();
  }, [topRatedFiltered, resData, searchText]);

  return (
    <div className="body">
      <div className="filter-section">
        <div className="search-container">
          <input
            onChange={(e) => setSearchText(e.target.value)}
            type="text"
            className="search-box"
            value={searchText}
          />
          <button className="search-button">Search</button>
        </div>
        <button
          className={`filter-btn ${topRatedFiltered && "selected"}`}
          onClick={() => setTopRatedFiltered((prev) => !prev)}
        >
          Top Rated
        </button>
      </div>

      {displayData && displayData.length > 0 && (
        <div
          className="res-container"
          onClick={(e) => {
            const item = e.target.closest(".res-card");
            if (item) navigate("/resturants/" + item.id);
          }}
        >
          {displayData.map((item) => (
            <ResturantCard key={item.info.id} data={item} />
          ))}
        </div>
      )}

      {(!displayData || displayData?.length === 0) && <Shimmer />}
    </div>
  );
};

export default Body;
