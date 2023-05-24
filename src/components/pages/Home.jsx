import React, { useEffect, useState } from "react";
import MainPage from "../MainPage";
import { api } from "../functions/apimanip";
import Filter from "../Filter";
import { useRadio, useSearch } from "../functions/customHooks";
export default () => {
  let [search, update] = useSearch();

  let [select, radiosele] = useRadio();

  const enterkey = (event) => (event.key == "Enter" ? searching() : "");
  let [results, setResults] = useState(null);
  const searching = () => {
    let searchoption = select ? "shows" : "people";
    search
      ? api(`/search/${searchoption}?q=${search}`).then((re) => setResults(re))
      : setResults(null);
  };
  useEffect(() => {
    searching();
  }, [search, select]);
  return (
    <MainPage>
      <input
        placeholder="search here"
        className="search-engine"
        type="text"
        value={search}
        onKeyDown={enterkey}
        onChange={update}
      ></input>
      <div className="radio-container">
        <input
          type="radio"
          checked={select}
          onChange={radiosele}
          name="shows"
        />
        <label htmlFor="shows">Shows</label>
        <input
          type="radio"
          checked={!select}
          onChange={radiosele}
          name="Actors"
        />
        <label htmlFor="Actors">Actors</label>
      </div>
      <input
        type="button"
        className="search-btn"
        onClick={searching}
        value="search"
      />

      <Filter re={results} />
    </MainPage>
  );
};
