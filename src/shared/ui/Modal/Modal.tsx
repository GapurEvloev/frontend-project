import { useTheme } from 'app/providers/ThemeProvider';
import React, { useCallback } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { Portal } from 'shared/ui/Portal/Portal';
import styles from './Modal.module.scss';

interface ModalProps {
  classes?: string;
  children?: React.ReactNode;
  isOpen?: boolean;
  onClose?: () => void;
  element?: HTMLElement;
}

export const Modal = ({
  classes,
  children,
  isOpen,
  onClose,
  element,
}: ModalProps) => {
  const { theme } = useTheme();
  const mods: Record<string, boolean> = {
    [styles.opened]: isOpen,
  };

  const onContentClick = (e: React.MouseEvent<HTMLDivElement>) => {
    e.stopPropagation();
  };

  const closeHandler = useCallback(() => {
    if (onClose) {
      onClose();
    }
  }, [onClose]);

  const onKeyDown = useCallback((e: KeyboardEvent) => {
    if (e.key === 'Escape') {
      closeHandler();
    }
  }, [closeHandler]);

  React.useEffect(() => {
    if (isOpen) {
      window.addEventListener('keydown', onKeyDown);
    }

    return () => {
      window.removeEventListener('keydown', onKeyDown);
    };
  }, [isOpen, onKeyDown]);

  return (
    <Portal element={element || document.getElementById('root')}>
      <div className={classNames(styles.modal, mods, [classes, theme])}>
        <div className={styles.overlay} onClick={closeHandler}>
          <div className={styles.content} onClick={onContentClick}>
            {
              children
            }
          </div>
        </div>
      </div>
    </Portal>
  );
};
