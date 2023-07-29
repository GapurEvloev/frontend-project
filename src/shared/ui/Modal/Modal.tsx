import React, { useCallback, useState } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import styles from './Modal.module.scss';

interface ModalProps {
  classes?: string;
  children?: React.ReactNode;
  isOpen?: boolean;
  onClose?: () => void;
}

const ANIMATION_DELAY = 200;

export const Modal = ({
  classes,
  children,
  isOpen,
  onClose,
}: ModalProps) => {
  const [isClosing, setIsClosing] = useState(false);
  const timerRef = React.useRef<number>();
  const mods: Record<string, boolean> = {
    [styles.opened]: isOpen,
    [styles.closing]: isClosing,
  };

  const onContentClick = (e: React.MouseEvent<HTMLDivElement>) => {
    e.stopPropagation();
  };

  const closeHandler = useCallback(() => {
    if (onClose) {
      setIsClosing(true);
      timerRef.current = window.setTimeout(() => {
        onClose();
        setIsClosing(false);
      }, ANIMATION_DELAY);
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
      if (timerRef.current) {
        window.clearTimeout(timerRef.current);
        window.removeEventListener('keydown', onKeyDown);
      }
    };
  }, [isOpen, onKeyDown]);

  return (
    <div className={classNames(styles.modal, mods, [classes])}>
      <div className={styles.overlay} onClick={closeHandler}>
        <div className={styles.content} onClick={onContentClick}>
          {
            children
          }
        </div>
      </div>
    </div>
  );
};
