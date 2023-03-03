import { classNames } from "shared/lib/classNames/classNames";
import styles from "./PageLoader.module.scss";

interface PageLoaderProps {
  classes?: string;
}

export const PageLoader = ({ classes }: PageLoaderProps) => (
  <div className={classNames(styles.pageLoader, {}, [classes])} />
);
