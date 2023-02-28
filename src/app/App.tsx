import { AppRouter } from "app/providers/router";
import { useTheme } from "app/providers/ThemeProvider";
import { useTranslation } from "react-i18next";
import { classNames } from "shared/lib/classNames/classNames";

import "./styles/index.scss";
import { Navbar } from "widgets/Navbar";
import { Sidebar } from "widgets/Sidebar";
import { FC, Suspense } from "react";

const App: FC = () => {
  const { theme } = useTheme();
  const { t } = useTranslation();

  return (
    <div className={classNames("app", {}, [theme])}>
      <Suspense fallback={t("Loading...")}>
        <Navbar />
        <div className="page-wrapper">
          <Sidebar />
          <AppRouter />
        </div>
      </Suspense>
    </div>
  );
};

export default App;
