import React, { Suspense, useState } from 'react';
import { AppRouter } from 'app/providers/router';
import { useTheme } from 'app/providers/ThemeProvider';
import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';
import { Modal } from 'shared/ui/Modal/Modal';
import { Navbar } from 'widgets/Navbar';
import { Sidebar } from 'widgets/Sidebar';

import './styles/index.scss';

function App() {
  const { theme } = useTheme();
  const { t } = useTranslation();
  const [isOpenModal, setIsOpenModal] = useState(false);

  return (
    <div className={classNames('app', {}, [theme])}>
      <Suspense fallback="">
        <Navbar />
        <button onClick={() => setIsOpenModal(!isOpenModal)}>{t('Modal')}</button>
        {/* eslint-disable-next-line i18next/no-literal-string */}
        <Modal isOpen={isOpenModal} onClose={() => setIsOpenModal(!isOpenModal)}>
          {t('Modal content')}
        </Modal>
        <div className="content-page">
          <Sidebar />
          <div className="page-wrapper">
            <AppRouter />
          </div>
        </div>
      </Suspense>
    </div>
  );
}

export default App;
