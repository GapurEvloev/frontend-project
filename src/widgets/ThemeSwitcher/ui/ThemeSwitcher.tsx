import React from "react";
import { Theme, useTheme } from "app/providers/ThemeProvider";
import { classNames } from "shared/lib/classNames/classNames";

import DarkIcon from "shared/assets/icons/theme-dark.svg";
import LightIcon from "shared/assets/icons/theme-light.svg";
import { Button, ThemeButton } from "shared/ui/Button/Button";
import styles from "./ThemeSwitcher.module.scss";

interface ThemeSwitcherProps {
  classes?: string;
}

export const ThemeSwitcher = ({classes}: ThemeSwitcherProps) => {
  const {theme, toggleTheme} = useTheme();

  return (
      <Button
        theme={ThemeButton.CLEAR}
        className={classNames(styles.themeSwitcher, {}, [classes])}
        onClick={toggleTheme}
      >
        {theme === Theme.LIGHT ? <LightIcon/> : <DarkIcon/>}
      </Button>
  );
};
