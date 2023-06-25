import React, { Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import { routesConfig } from "shared/config/routeConfig/routeConfig";

export const AppRouter: React.FC = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Routes>
        {
          routesConfig.map((routeProps) => (
            <Route key={routeProps.path} {...routeProps}/>
          ))
        }
      </Routes>
    </Suspense>
  );
};
