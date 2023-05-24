import React from "react";
import { Route, BrowserRouter, Routes } from "react-router-dom";
import Home from "./components/pages/Home";
import Starred from "./components/pages/Starred";
import AboutShow from "./components/pages/AboutShow";

export default () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path="/Actors" element={<Starred />}></Route>
      <Route path="/show/:id" element={<AboutShow />} />
      <Route path="*" element="NOT FOUND"></Route>
    </Routes>
  </BrowserRouter>
);
