import React from "react";
import { classNames } from "shared/lib/classNames/classNames";
import { AppLink, AppLinkTheme } from "shared/ui/AppLink/AppLink";
import styles from "./Navbar.module.scss";

interface NavbarProps {
  classes?: string;
}

export const Navbar = ({classes}: NavbarProps) => {
  return (
    <div className={classNames(styles.navbar, {}, [classes])}>
      <div className={styles.links}>
        <AppLink theme={AppLinkTheme.SECONDARY} to={"/"}>Main</AppLink>
        <AppLink theme={AppLinkTheme.SECONDARY} to={"/about"}>About</AppLink>
      </div>
    </div>
  );
};
