import { useTranslation } from "react-i18next";
import { classNames } from "shared/lib/classNames/classNames";
import { AppLink, AppLInkTheme } from "shared/uiKit/AppLink/AppLink";
import styles from "./Navbar.module.scss";

interface NavbarProps {
  classes?: string;
}

export const Navbar = ({ classes }: NavbarProps) => {
  const { t } = useTranslation();

  return (
    <div className={classNames(styles.navbar, {}, [classes])}>
      <div className={styles.links}>
        <AppLink theme={AppLInkTheme.INVERTED} to="/">
          {t("Main")}
        </AppLink>
        <AppLink theme={AppLInkTheme.INVERTED} to="/about">
          {t("About")}
        </AppLink>
      </div>
    </div>
  );
};
