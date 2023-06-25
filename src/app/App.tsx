import React from "react";
import { AppRouter } from "app/providers/router";
import { Navbar } from "widgets/Navbar";
import { useTheme } from "app/providers/ThemeProvider";
import { classNames } from "shared/lib/classNames/classNames";

import "./styles/index.scss";
import { Sidebar } from "widgets/Sidebar";

const App = () => {
  const { theme } = useTheme();
  return (
    <div className={classNames('app', {}, [theme])}>
      <Navbar />
      <div className="content-page">
        <Sidebar />
        <div className="page-wrapper">
          <AppRouter />
        </div>
      </div>
    </div>
  );
};

export default App;