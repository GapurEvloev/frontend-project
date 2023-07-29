import React, { useCallback, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import { Modal } from 'shared/ui/Modal/Modal';
import styles from './Navbar.module.scss';

interface NavbarProps {
  classes?: string;
}

export const Navbar = ({ classes }: NavbarProps) => {
  const [isAuthModal, setIsAuthModal] = useState(false);
  const { t } = useTranslation();

  const onToggleModal = useCallback(() => {
    setIsAuthModal(!isAuthModal);
  }, [isAuthModal]);

  return (
    <div className={classNames(styles.navbar, {}, [classes])}>
      <Button
        theme={ButtonTheme.CLEAR_INVERTED}
        classes={styles.links}
        onClick={onToggleModal}
      >
        {t('LogIn')}
      </Button>
      <Modal isOpen={isAuthModal} onClose={onToggleModal}>
        {t('modal-content')}
      </Modal>
    </div>
  );
};
