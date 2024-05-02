import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { MENU_URL } from "../utils/constants";
import useResturantMenu from "../hooks/useResturantMenu";

const ResturantMenu = () => {
  const { resturantId } = useParams();

  const { metaData } = useResturantMenu(resturantId);

  return (
    <div className="body resturant-body">
      <h2>{metaData?.name}</h2>
      <div className="resturant-meta-info-bgr">
        <div className="resturant-meta-info">
          <div className="rating-rate">
            <h4>{`${metaData?.avgRatingString} (${metaData?.totalRatingsString})`}</h4>
            <div className="divider"></div>
            <h4>{metaData?.costForTwoMessage || "default"}</h4>
          </div>
          <p className="cuisines">{metaData?.cuisines?.[0]}</p>
          <div className="location">
            <div className="journey">
              <div className="divider"></div>
              <div className="divider-line"></div>
              <div className="divider"></div>
            </div>
            <div className="details">
              <h5 className="area">
                Outlet <span>{metaData?.areaName}</span>
              </h5>
              <h5 className="time">
                {metaData?.sla?.slaString ?? "Does not deliver"}
              </h5>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResturantMenu;
