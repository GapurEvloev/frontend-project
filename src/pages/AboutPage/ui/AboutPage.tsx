import { Counter } from 'entities/Counter';
import React from 'react';
import { useTranslation } from 'react-i18next';

const AboutPage: React.FC = () => {
  const { t } = useTranslation('about');

  return (
    <div>
      <h1>{t('about:about-title')}</h1>
      <p>{t('about:about-subtitle')}</p>
      <Counter />
    </div>
  );
};

export default AboutPage;
