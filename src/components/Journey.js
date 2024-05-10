import React from "react";

const Journey = ({ items }) => {
  return (
    <div className="flex flex-row gap-3">
      <Steps length={items.length} />
      <Values items={items} />
    </div>
  );
};

export default Journey;

const Values = ({ items }) => {
  return (
    <div className="flex flex-col gap-[11px]">
      {items &&
        items.length > 0 &&
        items.map((value, index) => {
          return (
            <div key={index} className="flex gap-4">
              <div>{value}</div>
            </div>
          );
        })}
    </div>
  );
};

const Steps = ({ length }) => {
  return (
    <div className="flex flex-col items-center pt-1">
      {[...Array(length - 1)].map((a, b) => (
        <div className="flex flex-col items-center" key={b}>
          <div className="w-3 h-3 bg-slate-200 rounded-full" />
          <div className="w-1 h-6 bg-slate-200" />
        </div>
      ))}
      <div className="w-3 h-3 bg-slate-200 rounded-full" />
    </div>
  );
};
