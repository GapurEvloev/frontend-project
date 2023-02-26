import { useState } from "react";
import { classNames } from "shared/lib/classNames/classNames";
import { ThemeSwitcher } from "widgets/ThemeSwitcher";
import styles from "./Sidebar.module.scss";

interface SidebarProps {
  classes?: string;
}

export const Sidebar = ({classes}: SidebarProps) => {
  const [collapsed, setCollapsed] = useState(false);

  const onToggle = () => {
    setCollapsed(prev => !prev);
  }

  return (
    <div
      className={classNames(styles.sidebar, { [styles.collapsed]: collapsed }, [
        classes,
      ])}
    >
      <button onClick={onToggle}>toggle</button>
      <div className={styles.switchers}>
        <ThemeSwitcher />
        {/*<LangSwitcher/>*/}
      </div>
    </div>
  );
};
