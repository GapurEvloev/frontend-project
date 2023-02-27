import { FC } from "react";
import { Link, LinkProps } from "react-router-dom";
import { classNames } from "shared/lib/classNames/classNames";
import styles from "./AppLink.module.scss";

export enum AppLInkTheme {
  PRIMARY = "primary",
  SECONDARY = "secondary",
  INVERTED = "inverted",
}

interface AppLinkProps extends LinkProps {
  classes?: string;
  theme?: AppLInkTheme;
}

export const AppLink: FC<AppLinkProps> = ({
  to,
  classes,
  children,
  theme = AppLInkTheme.PRIMARY,
  ...restProps
}) => (
  <Link
    to={to}
    className={classNames(styles.appLink, {}, [styles[theme]])}
    {...restProps}
  >
    {children}
  </Link>
);
