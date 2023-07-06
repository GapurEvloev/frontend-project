import React from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';
import { Button, ThemeButton } from 'shared/ui/Button/Button';

interface LangSwitcherProps {
  classes?: string;
}

export const LangSwitcher = ({ classes }: LangSwitcherProps) => {
  const { t, i18n } = useTranslation();

  const toggleLanguage = async () => {
    i18n.changeLanguage(i18n.language === 'en' ? 'ru' : 'en');
  };

  return (
    <Button
      classes={classNames('', {}, [classes])}
      theme={ThemeButton.CLEAR}
      onClick={toggleLanguage}
    >
      {t('translate-btn')}
    </Button>
  );
};
