import { AppRouter } from "app/providers/router";
import { useTheme } from "app/providers/ThemeProvider";
import { classNames } from "shared/lib/classNames/classNames";

import "./styles/index.scss";
import { Navbar } from "widgets/Navbar";

const App: React.FC = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className={classNames("app", {}, [theme])}>
      <Navbar />
      <button onClick={toggleTheme}>{theme}</button>
      <AppRouter />
    </div>
  );
};

export default App;
