import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import HomePage from "./HomePage";
import RepoPage from "./RepoPage";

import "./reset.css";
import "./main.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path=":owner/:repo" element={<RepoPage />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
