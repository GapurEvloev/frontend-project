import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';
import { Button } from 'shared/ui/Button/Button';
import styles from './PageError.module.scss';

interface PageErrorProps {
  classes?: string;
}

export const PageError = ({ classes }: PageErrorProps) => {
  const { t } = useTranslation();

  const reloadPage = () => {
    window.location.reload();
  };

  return (
    <div className={classNames(styles.pageError, {}, [classes])}>
      <p>
        {t('Something went wrong.')}
      </p>
      <Button onClick={reloadPage}>
        {t('Try again')}
      </Button>
    </div>
  );
};
