import React, { Suspense } from "react";
import { AboutPage } from "pages/AboutPage";
import { MainPage } from "pages/MainPage";
import { Route, Routes } from "react-router-dom";
import { routesCounfig } from "shared/config/routeConfig/routeConfig";

export const AppRouter: React.FC = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Routes>
        <Route path="/" element={<MainPage/>}/>
        <Route path="/about" element={<AboutPage/>}/>
        {
          routesCounfig.map((routeProps) => (
            <Route key={routeProps.path} {...routeProps}/>
          ))
        }
      </Routes>
    </Suspense>
  );
};
