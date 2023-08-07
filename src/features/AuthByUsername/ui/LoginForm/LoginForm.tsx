import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';
import { Button } from 'shared/ui/Button/Button';
import { Input } from 'shared/ui/Input/Input';
import styles from './LoginForm.module.scss';

interface LoginFormProps {
  classes?: string;
}

export const LoginForm = ({ classes }: LoginFormProps) => {
  const { t } = useTranslation();
  return (
    <div className={classNames(styles.loginForm, {}, [classes])}>
      <Input id="login-input-username" placeholder={t('Enter username')} classes={styles.input} type="text" />
      <Input id="login-input-password" placeholder={t('Enter password')} classes={styles.input} type="text" />
      <Button classes={styles.loginBtn}>{t('Login')}</Button>
    </div>
  );
};
