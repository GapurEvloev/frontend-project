import { useAppDispatch, useAppSelector } from 'app/hooks/redux';
import { memo, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import { Input } from 'shared/ui/Input/Input';
import { Text, TextTheme } from 'shared/ui/Text/Text';
import { loginByUsername } from '../../model/services/loginByUsername/loginByUsername';
import { getLoginState } from '../../model/selectors/getLoginState/getLoginState';
import { loginActions } from '../../model/slice/loginSlice';
import styles from './LoginForm.module.scss';

interface LoginFormProps {
  classes?: string;
}

export const LoginForm = memo(({ classes }: LoginFormProps) => {
  const { t } = useTranslation();
  const dispatch = useAppDispatch();
  const {
    username, password, isLoading, error,
  } = useAppSelector(getLoginState);

  const handleChangeUsername = useCallback((value: string) => {
    dispatch(loginActions.setUsername(value));
  }, [dispatch]);

  const handleChangePassword = useCallback((value: string) => {
    dispatch(loginActions.setPassword(value));
  }, [dispatch]);

  const handleLogin = useCallback(() => {
    dispatch(loginByUsername({ username, password }));
  }, [dispatch, password, username]);

  return (
    <div className={classNames(styles.loginForm, {}, [classes])}>
      <Text title={t('Auth Form')} theme={TextTheme.PRIMARY} />
      {error && (
        <Text
          text={t('Invalid username or password')}
          theme={TextTheme.ERROR}
        />
      )}
      <Input
        id="login-input-username"
        placeholder={t('Enter username')}
        classes={styles.input}
        type="text"
        onChange={handleChangeUsername}
        value={username}
      />
      <Input
        id="login-input-password"
        placeholder={t('Enter password')}
        classes={styles.input}
        type="text"
        onChange={handleChangePassword}
        value={password}
      />
      <Button
        theme={ButtonTheme.OUTLINE}
        classes={styles.loginBtn}
        onClick={handleLogin}
        disabled={isLoading}
      >
        {t('Login')}
      </Button>
    </div>
  );
});
