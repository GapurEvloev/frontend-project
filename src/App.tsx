import { Suspense, useContext, useState } from "react";
import { Link, Route, Routes } from "react-router-dom";
import classNames from "classnames";
import { MainPageAsync } from "./pages/MainPage/MainPage.async";
import { AboutPageAsync } from "./pages/AboutPage/AboutPage.async";

import "./styles/index.scss";
import { useTheme } from "./theme/useTheme";



const App: React.FC = () => {
  const {theme, toggleTheme} = useTheme();

  return (
    <div className={classNames("app", theme)}>
      <div style={{ display: "flex", gap: "0.2em" }}>
        <button onClick={toggleTheme}>
          {theme}
        </button>
        <Link to={"/"}>Main</Link>
        <Link to={"/about"}>About</Link>
      </div>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path={"/"} element={<MainPageAsync />} />
          <Route path={"/about"} element={<AboutPageAsync />} />
        </Routes>
      </Suspense>
    </div>
  );
};

export default App;
