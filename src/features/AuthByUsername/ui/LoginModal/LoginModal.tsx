import { classNames } from 'shared/lib/classNames/classNames';
import { Modal } from 'shared/ui/Modal/Modal';
import { LoginForm } from '../LoginForm/LoginForm';
import styles from './LoginModal.module.scss';

interface LoginModalProps {
  classes?: string;
  isOpen?: boolean;
  onClose?: () => void;
}

export const LoginModal = ({ classes, isOpen, onClose }: LoginModalProps) => (
  <Modal
    classes={classNames(styles.loginModal, {}, [classes])}
    isOpen={isOpen}
    onClose={onClose}
  >
    <LoginForm />
  </Modal>
);
