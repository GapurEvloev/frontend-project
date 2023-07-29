import { ButtonHTMLAttributes, FC } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import styles from './Button.module.scss';

export enum ButtonTheme {
  CLEAR = 'clear',
  CLEAR_INVERTED = 'clearInverted',
  OUTLINE = 'outline',
  BACKGROUND = 'background',
  BACKGROUND_INVERTED = 'backgroundInverted',
}

export enum ButtonSize {
  M = 'size_m',
  L = 'size_l',
  XL = 'size_xl',
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  classes?: string;
  theme?: ButtonTheme;
  squared?: boolean;
  size?: ButtonSize;
}

export const Button: FC<ButtonProps> = (props) => {
  const {
    classes,
    theme,
    children,
    squared,
    size = ButtonSize.M,
    ...restProps
  } = props;

  const mods: Record<string, boolean> = {
    [styles.squared]: squared,
  };

  return (
    <button
      type="button"
      className={classNames(styles.button, mods, [styles[theme], styles[size], classes])}
      {...restProps}
    >
      {children}
    </button>
  );
};
