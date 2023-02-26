import { classNames } from "shared/lib/classNames/classNames";
import { AppLink, AppLInkTheme } from "shared/uiKit/AppLink/AppLink";
import { ThemeSwitcher } from "widgets/ThemeSwitcher";
import styles from "./Navbar.module.scss";

interface NavbarProps {
  classes?: string;
}

export const Navbar = ({classes}: NavbarProps) => {
  return (
    <div className={classNames(styles.navbar, {}, [classes])}>
      <ThemeSwitcher/>
      <div className={styles.links}>
        <AppLink theme={AppLInkTheme.INVERTED} to={"/"}>Main</AppLink>
        <AppLink theme={AppLInkTheme.INVERTED} to={"/about"}>About</AppLink>
      </div>
    </div>
  );
};
