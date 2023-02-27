import { useTranslation } from "react-i18next";
import { classNames } from "shared/lib/classNames/classNames";
import { Button, ThemeButton } from "shared/uiKit/Button/Button";
import styles from "./LangSwitcher.module.scss";

interface LangSwitcherProps {
  classes?: string;
}

export const LangSwitcher = ({ classes }: LangSwitcherProps) => {
  const { t, i18n } = useTranslation();

  const toggleLang = () => {
    i18n.changeLanguage(i18n.language === "en" ? "ru" : "en");
  };

  return (
    <div className={classNames(styles.langSwitcher, {}, [classes])}>
      <Button theme={ThemeButton.CLEAR} onClick={toggleLang}>{t("Lang")}</Button>
    </div>
  );
};
