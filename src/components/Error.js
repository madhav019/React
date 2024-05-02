import React from "react";
import { Link, useRouteError } from "react-router-dom";

const Error = () => {
  const err = useRouteError();

  return (
    <div className="err-body">
      <h1>{err.status}</h1>
      <h2>{err.statusText}</h2>
      <button>
        <Link to="/">Go Back</Link>
      </button>
    </div>
  );
};

export default Error;
