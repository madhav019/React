import React from "react";
import { useParams } from "react-router-dom";
import useResturantMenu from "../hooks/useResturantMenu";
import Journey from "./Journey";
import Accordian from "./Accordian";
import AccordianWrapper from "./AccordianWrapper";

const ResturantMenu = () => {
  const { resturantId } = useParams();

  const { metaData, menu } = useResturantMenu(resturantId);

  return (
    <div className="mt-[150px] w-[55vw] h-full flex flex-col mx-auto">
      <h2 className="font-bold text-2xl">{metaData?.name}</h2>

      <div className="my-10 p-5 pt-0 rounded-3xl bg-gradient-to-t from-gray-200 via-gray-100 to-gray-50">
        <div className="bg-white rounded-xl p-4 border border-gray-300 flex flex-col gap-2">
          {/* Rating & Cost */}
          <div className="flex gap-3 text-md font-bold select-none">
            <h4>{`${metaData?.avgRatingString} (${metaData?.totalRatingsString})`}</h4>
            <div className="w-1 h-1 bg-slate-400 rounded-full mt-3"></div>
            <h4>{metaData?.costForTwoMessage || "default"}</h4>
          </div>

          {/* Cuisines */}
          <p className="underline text-orange-400">{metaData?.cuisines?.[0]}</p>

          {/* Location & eta */}
          <Journey
            items={[
              metaData?.areaName,
              metaData?.sla?.slaString ?? "Does not deliver",
            ]}
          />
        </div>
      </div>

      {/* Menu */}
      <h1 className="text-center text-slate-400">MENU</h1>
      <AccordianWrapper data={menu} />
    </div>
  );
};

export default ResturantMenu;
