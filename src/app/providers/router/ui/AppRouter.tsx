import { Suspense } from "react";
import { useTranslation } from "react-i18next";
import { Route, Routes } from "react-router-dom";
import { routeConfig } from "shared/config/routeConfig/routeConfig";

const AppRouter: React.FC = () => {
  const { t } = useTranslation();

  return (
    <Suspense
      fallback={(
        <div>
          {t("Loading")}
          ...
        </div>
      )}
    >
      <Routes>
        {/* <Route path={"/"} element={<MainPage />} /> */}
        {/* <Route path={"/about"} element={<AboutPage />} /> */}
        {Object.values(routeConfig).map(({ path, element }) => (
          <Route
            key={path}
            path={path}
            element={<div className="content-wrapper">{element}</div>}
          />
        ))}
      </Routes>
    </Suspense>
  );
};

export default AppRouter;
