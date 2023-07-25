import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import AboutIcon from 'shared/assets/icons/about-20-20.svg';
import MainIcon from 'shared/assets/icons/main-20-20.svg';
import { RoutePath } from 'shared/config/routeConfig/routeConfig';
import { classNames } from 'shared/lib/classNames/classNames';
import { AppLink, AppLinkTheme } from 'shared/ui/AppLink/AppLink';
import { Button, ButtonSize, ButtonTheme } from 'shared/ui/Button/Button';
import { LangSwitcher } from 'widgets/LangSwitcher/LangSwitcher';
import { ThemeSwitcher } from 'widgets/ThemeSwitcher';
import styles from './Sidebar.module.scss';

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
    <div data-testid="sidebar" className={classNames(styles.sidebar, { [styles.collapsed]: collapsed }, [classes])}>

      <Button
        theme={ButtonTheme.BACKGROUND_INVERTED}
        data-testid="sidebar-toggle"
        onClick={onToggle}
        classes={styles.collapsedBtn}
        squared
        size={ButtonSize.L}
      >
        {collapsed ? '>' : '<'}
      </Button>
      <div className={styles.items}>
        <AppLink
          classes={styles.link}
          theme={AppLinkTheme.PRIMARY}
          to={RoutePath.main}
        >
          <MainIcon className={styles.icon} />
          <span>{t('nav-main')}</span>
        </AppLink>
        <AppLink
          classes={styles.link}
          theme={AppLinkTheme.PRIMARY}
          to={RoutePath.about}
        >
          <AboutIcon className={styles.icon} />
          <span>{t('nav-about')}</span>
        </AppLink>
      </div>
      <div className={styles.switchers}>
        <ThemeSwitcher />
        <LangSwitcher classes={styles.lang} short={collapsed} />
      </div>
    </div>
  );
};
