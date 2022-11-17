import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import App from "./App";
import RepoPage from "./RepoPage";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path=":owner/:repo" element={<RepoPage />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
