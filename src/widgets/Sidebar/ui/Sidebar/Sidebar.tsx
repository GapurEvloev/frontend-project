import { useState } from "react";
import { useTranslation } from "react-i18next";
import { classNames } from "shared/lib/classNames/classNames";
import { LangSwitcher } from "widgets/LangSwitcher/LangSwitcher";
import { ThemeSwitcher } from "widgets/ThemeSwitcher";
import styles from "./Sidebar.module.scss";

interface SidebarProps {
  classes?: string;
}

export const Sidebar = ({ classes }: SidebarProps) => {
  const [collapsed, setCollapsed] = useState(false);
  const { t } = useTranslation();

  const onToggle = () => {
    setCollapsed((prev) => !prev);
  };

  return (
    <div
      className={classNames(styles.sidebar, { [styles.collapsed]: collapsed }, [
        classes,
      ])}
    >
      <button type="button" onClick={onToggle}>
        {t("toggle")}
      </button>
      <div className={styles.switchers}>
        <ThemeSwitcher />
        {!collapsed && <LangSwitcher />}
      </div>
    </div>
  );
};
