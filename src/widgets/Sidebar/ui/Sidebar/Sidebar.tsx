import { useState } from "react";
import { useTranslation } from "react-i18next";
import { classNames } from "shared/lib/classNames/classNames";
import { LangSwitcher } from "widgets/LangSwitcher/LangSwitcher";
import { ThemeSwitcher } from "widgets/ThemeSwitcher";
import { Button } from "../../../../shared/uiKit/Button/Button";
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
      data-testid="sidebar"
      className={classNames(styles.sidebar, { [styles.collapsed]: collapsed }, [
        classes,
      ])}
    >
      <Button data-testid="sidebar-toggle" onClick={onToggle}>
        {t("toggle")}
      </Button>
      <div className={styles.switchers}>
        <ThemeSwitcher />
        {!collapsed && <LangSwitcher />}
      </div>
    </div>
  );
};
