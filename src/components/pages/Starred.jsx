import React, { useEffect, useState } from "react";
import { reducer } from "../functions/customHooks";
import { api } from "../functions/apimanip";
import MainPage from "../MainPage";
import MovieGrid from "../movies/MovieGrid";
import LoadingSpinner from "../Spinner";
export default () => {
  let [results, setResult] = useState(null);
  let [error, setError] = useState(false);
  let [spin, setSpin] = useState(true);
  const [state] = reducer();

  useEffect(() => {
    let promises = state.map((id) =>
      api(`/shows/${id}?embed[]=seasons&embed[]=cast`)
    );
    Promise.all(promises)
      .then((re) => {
        setError(false);
        setResult(
          re.map((show) => ({
            show,
          }))
        );
        setSpin(false);
      })
      .catch((er) => {
        setError(true);
        setResult(er.message);
        setSpin(false);
      });
  }, [state]);
  return (
    <MainPage>
      {error && <div>{results}</div>}
      {spin && <LoadingSpinner />}
      {!spin && results.length == 0 && <div>Nothing is here</div>}
      {!spin && results && <MovieGrid show={results} />}
    </MainPage>
  );
};
