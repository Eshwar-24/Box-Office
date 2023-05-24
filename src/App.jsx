import React from "react";
import { Route, HashRouter, Routes } from "react-router-dom";
import Home from "./components/pages/Home";
import Starred from "./components/pages/Starred";
import AboutShow from "./components/pages/AboutShow";
import NotFound from "./components/pages/NotFound";

export default () => (
  <HashRouter>
    <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path="/Actors" element={<Starred />}></Route>
      <Route path="/show/:id" element={<AboutShow />} />
      <Route
        path="*"
        element={
          <div className="not-found">
            <img className="img-not" src={<NotFound />} />
          </div>
        }
      ></Route>
    </Routes>
  </HashRouter>
);
