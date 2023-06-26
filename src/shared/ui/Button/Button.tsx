import { ButtonHTMLAttributes, FC } from "react";
import { classNames } from "shared/lib/classNames/classNames";
import styles from "./Button.module.scss";

export enum ThemeButton {
  CLEAR = "clear",
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  classes?: string;
  theme?: ThemeButton;
}

export const Button: FC<ButtonProps> = (props) => {
  const {
    classes,
    theme,
    children,
    ...restProps
  } = props;

  console.log({classes})
  return (
    <button
      {...restProps}
      className={classNames(styles.button, {}, [styles[theme], classes])}
    >
      {children}
    </button>
  );
};
