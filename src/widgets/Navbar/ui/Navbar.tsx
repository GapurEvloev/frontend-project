import React from "react";
import { useTranslation } from "react-i18next";
import { classNames } from "shared/lib/classNames/classNames";
import { AppLink, AppLinkTheme } from "shared/ui/AppLink/AppLink";
import styles from "./Navbar.module.scss";

interface NavbarProps {
  classes?: string;
}

export const Navbar = ({classes}: NavbarProps) => {
  const {t} = useTranslation();

  return (
    <div className={classNames(styles.navbar, {}, [classes])}>
      <div className={styles.links}>
        <AppLink theme={AppLinkTheme.SECONDARY} to={"/"}>{t("main-nav")}</AppLink>
        <AppLink theme={AppLinkTheme.SECONDARY} to={"/about"}>{t("about-nav")}</AppLink>
      </div>
    </div>
  );
};
