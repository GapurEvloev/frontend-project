import { classNames } from 'shared/lib/classNames/classNames';
import styles from './Navbar.module.scss';

interface NavbarProps {
  classes?: string;
}

export const Navbar = ({ classes }: NavbarProps) => (
  <div className={classNames(styles.navbar, {}, [classes])}>
    <div className={styles.links}>
      /
    </div>
  </div>
);
