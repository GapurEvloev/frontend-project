import { FC } from 'react';
import { Link, LinkProps } from 'react-router-dom';
import { classNames } from 'shared/lib/classNames/classNames';
import styles from './AppLink.module.scss';

export enum AppLinkTheme {
  PRIMARY = 'primary',
  SECONDARY = 'secondary',
  RED = 'red',
}

interface AppLinkProps extends LinkProps {
  classes?: string;
  theme?: AppLinkTheme;
}

export const AppLink: FC<AppLinkProps> = ({
  to,
  classes,
  children,
  theme = AppLinkTheme.PRIMARY,
  ...restProps
}) => (
  <Link
    to={to}
    className={classNames(styles.appLink, {}, [classes, styles[theme]])}
    {...restProps}
  >
    {children}
  </Link>
);
