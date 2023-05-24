import { useEffect, useReducer, useState } from "react";

function reducers(pre, { type, showId }) {
  switch (type) {
    case "ADD":
      return [...pre, showId];
    case "REMOVE":
      return pre.filter((element) => element !== showId);
    default:
      return pre;
  }
}
export function reducer() {
  let c = Array(0);
  let a = localStorage.getItem("show");
  let intial = a ? JSON.parse(a) : c;
  const [state, dispatcher] = useReducer(reducers, intial);

  useEffect(() => {
    let a = JSON.stringify(state);
    localStorage.setItem("show", a);
  }, [state]);
  return [state, dispatcher];
}
export function useSearch() {
  let [search, setSearch] = useState(() => {
    let a = sessionStorage.getItem("last");
    return a ? JSON.parse(a) : "";
  });
  const update = (event) => {
    setSearch(event.target.value);
    sessionStorage.setItem("last", JSON.stringify(event.target.value));
  };
  return [search, update];
}
export function useRadio() {
  let [searchoption, setSearchoption] = useState("shows");
  let [select, setSelect] = useState(() => {
    let a = sessionStorage.getItem("search-option");
    return a ? JSON.parse(a) : true;
  });
  const radiosele = (set) => {
    setSelect((pre) => {
      if (pre) setSearchoption("people");
      else setSearchoption("shows");
      sessionStorage.setItem("search-option", !pre);
      return !pre;
    });
  };

  return [select, searchoption, radiosele];
}
