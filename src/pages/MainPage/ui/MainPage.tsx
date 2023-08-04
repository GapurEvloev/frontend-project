import { Counter } from 'entities/Counter';
import React from 'react';
import { useTranslation } from 'react-i18next';

const MainPage: React.FC = () => {
  const { t } = useTranslation('main');

  return (
    <div>
      <h1>{t('main:main-title')}</h1>
      <Counter />
    </div>
  );
};

export default MainPage;
