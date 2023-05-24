import React from "react";
import MovieGrid from "./movies/MovieGrid";
import ActorGrid from "./Actors/ActorGrid";
import NotFound from "./pages/NotFound";

export default ({ re }) => {
  if (re && re.length == 0) return <NotFound />;
  if (re != null && re.length > 0)
    return re[0].show ? <MovieGrid show={re} /> : <ActorGrid person={re} />;
};
