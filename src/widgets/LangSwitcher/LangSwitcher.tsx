import React from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';

interface LangSwitcherProps {
  classes?: string;
  short?: boolean;
}

export const LangSwitcher = ({ classes, short }: LangSwitcherProps) => {
  const { t, i18n } = useTranslation();

  const toggleLanguage = async () => {
    i18n.changeLanguage(i18n.language === 'en' ? 'ru' : 'en');
  };

  return (
    <Button
      classes={classNames('', {}, [classes])}
      theme={ButtonTheme.CLEAR}
      onClick={toggleLanguage}
    >
      {t(short ? 'translate-btn-short' : 'translate-btn')}
    </Button>
  );
};
