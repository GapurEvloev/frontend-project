import React, { Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import { routesConfig } from 'shared/config/routeConfig/routeConfig';
import { PageLoader } from 'widgets/PageLoader';

export const AppRouter: React.FC = () => (
  <Suspense fallback={<PageLoader />}>
    <Routes>
      {
        routesConfig.map((routeProps) => (
          <Route key={routeProps.path} {...routeProps} />
        ))
      }
    </Routes>
  </Suspense>
);
