import React, { useEffect, useReducer } from "react";
import { useParams } from "react-router-dom";
import { api } from "../functions/apimanip";
import ShowData from "../showDetails/ShowData";
import Seasons from "../showDetails/Seasons";
import Cast from "../showDetails/Cast";
import Details from "../showDetails/Details";
import LoadingSpinner from "../Spinner";

import NotFound from "./NotFound";
let a = { results: null, error: false, spin: true, page: false };
let b = (pre, action) => {
  switch (action.type) {
    case "NOT_FOUND":
      console.log("llkkl");
      return { page: true, error: false, spin: false, results: action.show };
    case "NO_ERROR":
      console.log("llkkloooo");
      return { error: false, results: action.show, spin: false, page: false };
    case "ERROR":
      return { results: action.show, spin: false, error: true, page: false };

    default:
      return pre;
  }
};
export default () => {
  let { id } = useParams();
  let [s, d] = useReducer(b, a);
  useEffect(() => {
    api(`/shows/${id}?embed[]=seasons&embed[]=cast`)
      .then((re) => {
        if (re.status == 404) {
          d({ type: "NOT_FOUND", show: re });
        } else {
          d({ type: "NO_ERROR", show: re });
        }
      })
      .catch((err) => d({ type: "ERROR", show: err.message }));
  }, [id]);
  console.log(s);
  if (s.spin) {
    return (
      <div className="Main-container">
        <LoadingSpinner />
      </div>
    );
  }
  if (s.page) {
    return <NotFound />;
  }
  if (s.error) {
    return <div>error {s.results}</div>;
  }
  return (
    <div>
      <ShowData
        id={s.results.id}
        image={s.results.image}
        name={s.results.name}
        rating={s.results.rating}
        summary={s.results.summary}
        tags={s.results.genres}
      />
      <div>
        <h3>Details</h3>
        <Details
          status={s.results.status}
          network={s.results.network}
          premiered={s.results.premiered}
        ></Details>
      </div>
      <div>
        <h3>Seasons</h3>
        <Seasons sea={s.results._embedded.seasons} />
      </div>
      {s.results._embedded.cast.length != 0 && (
        <div>
          <h3>Cast</h3>
          <Cast c={s.results._embedded.cast} />
        </div>
      )}
    </div>
  );
};
