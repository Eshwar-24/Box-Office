import React from "react";
import MovieGrid from "./movies/MovieGrid";
import ActorGrid from "./Actors/ActorGrid";
import NOT_FOUND from "./images/404-error.jpg";
export default ({ re }) => {
  if (re && re.length == 0)
    return (
      <div className="not-found">
        <img className="img-not" src={NOT_FOUND} />
      </div>
    );
  if (re != null && re.length > 0)
    return re[0].show ? <MovieGrid show={re} /> : <ActorGrid person={re} />;
};
