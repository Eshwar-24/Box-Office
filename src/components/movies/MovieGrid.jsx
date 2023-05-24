import React from "react";
import MovieCard from "./MovieCard";
import NOT_FOUND from "../images/iinf.jpg";
import { reducer } from "../functions/customHooks";

export default ({ show }) => {
  const [state, dispatcher] = reducer();
  return (
    <div className="cardgrid">
      {show.map(({ show }) => {
        let star = () => {
          var st = state ? state.includes(show.id) : false;
          if (st) {
            dispatcher({ type: "REMOVE", showId: show.id });
          } else {
            dispatcher({ type: "ADD", showId: show.id });
          }
        };
        return (
          <MovieCard
            key={show.id}
            name={show.name}
            id={show.id}
            summary={show.summary}
            image={show.image ? show.image.medium : NOT_FOUND}
            stars={star}
            status={state}
          />
        );
      })}
    </div>
  );
};
