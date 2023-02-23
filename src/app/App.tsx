import { AboutPage } from "pages/AboutPage/index";
import { Suspense, useContext, useState } from "react";
import { Link, Route, Routes } from "react-router-dom";
import { useTheme } from "app/providers/ThemeProvider";
import { classNames } from "shared/lib/classNames/classNames";
import { MainPage } from "pages/MainPage";

import "./styles/index.scss";

const App: React.FC = () => {
  const {theme, toggleTheme} = useTheme();

  return (
    <div className={classNames("app", {}, [theme])}>
      <div style={{ display: "flex", gap: "0.2em" }}>
        <button onClick={toggleTheme}>
          {theme}
        </button>
        <Link to={"/"}>Main</Link>
        <Link to={"/about"}>About</Link>
      </div>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path={"/"} element={<MainPage />} />
          <Route path={"/about"} element={<AboutPage />} />
        </Routes>
      </Suspense>
    </div>
  );
};

export default App;
