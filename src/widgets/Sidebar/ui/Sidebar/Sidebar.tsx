import React, { useState } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { Button } from 'shared/ui/Button/Button';
import { LangSwitcher } from 'widgets/LangSwitcher/LangSwitcher';
import { ThemeSwitcher } from 'widgets/ThemeSwitcher';
import styles from './Sidebar.module.scss';

interface SidebarProps {
  classes?: string;
}

export const Sidebar = ({ classes }: SidebarProps) => {
  const [collapsed, setCollapsed] = useState(false);

  const onToggle = () => {
    setCollapsed((prev) => !prev);
  };

  return (
    <div data-testid="sidebar" className={classNames(styles.sidebar, { [styles.collapsed]: collapsed }, [classes])}>
      {/* eslint-disable-next-line i18next/no-literal-string */}
      <Button data-testid="sidebar-toggle" onClick={onToggle}>Toggle</Button>
      <div className={styles.switchers}>
        <ThemeSwitcher />
        <LangSwitcher classes={styles.lang} />
      </div>
    </div>
  );
};
