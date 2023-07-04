import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Button } from 'shared/ui/Button/Button';

// TODO: remove this component beacuse it is used only for testing purposes
export const BugButton = () => {
  const [error, setError] = useState(false);
  const { t } = useTranslation();

  const throwError = () => {
    setError(true);
  };

  useEffect(() => {
    if (error) {
      throw new Error();
    }
  }, [error]);

  return (
    <Button onClick={throwError}>
      {t('Throw error')}
    </Button>
  );
};
