import React from "react";
import NOT_FOUND from "../images/404-error.jpg";
export default () => {
  return (
    <div className="not-found">
      <img className="img-not" alt="404 Page Not-Found" src={NOT_FOUND} />
    </div>
  );
};
