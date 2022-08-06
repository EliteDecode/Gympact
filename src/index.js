import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import SingleExcercise from "./pages/singleExcercise/SingleExcercise";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AppProvider } from "./context";
import Excercises from "./pages/excercise/Excercises";
import SearchPage from "./pages/search/SearchPage";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <AppProvider>
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<App />}></Route>
          <Route
            exact
            path="excercise/:id"
            element={<SingleExcercise />}
          ></Route>
          <Route exact path="/excercises" element={<Excercises />}></Route>
          <Route exact path="/search" element={<SearchPage />}></Route>
        </Routes>
      </BrowserRouter>
    </AppProvider>
  </React.StrictMode>
);
