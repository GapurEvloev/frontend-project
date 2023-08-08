import { classNames } from 'shared/lib/classNames/classNames';
import styles from './Text.module.scss';

export enum TextTheme {
  PRIMARY = 'primary',
  ERROR = 'error',
}

interface TextProps {
  classes?: string;
  title?: string;
  text?: string;
  theme?: TextTheme;
}

export const Text = ({
  classes,
  title,
  text,
  theme = TextTheme.PRIMARY,
}: TextProps) => (
  <div className={classNames(styles.text, {}, [classes, styles[theme]])}>
    {title && <p className={styles.title}>{title}</p>}
    {text && <p className={styles.text}>{text}</p>}
  </div>
);
