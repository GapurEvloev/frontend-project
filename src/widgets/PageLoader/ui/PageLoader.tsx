import { classNames } from 'shared/lib/classNames/classNames';
import { Loader } from 'shared/ui/Loader/Loader';
import styles from './PageLoader.module.scss';

interface PageLoaderProps {
  classes?: string;
}

export const PageLoader = ({ classes }: PageLoaderProps) => (
  <div className={classNames(styles.pageLoader, {}, [classes])}>
    <Loader />
  </div>
);
