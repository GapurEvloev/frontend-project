import { classNames } from 'shared/lib/classNames/classNames';
import { Modal } from 'shared/ui/Modal/Modal';
import { LoginForm } from '../LoginForm/LoginForm';

interface LoginModalProps {
  classes?: string;
  isOpen?: boolean;
  onClose?: () => void;
}

export const LoginModal = ({ classes, isOpen, onClose }: LoginModalProps) => (
  <Modal
    classes={classNames('', {}, [classes])}
    isOpen={isOpen}
    onClose={onClose}
  >
    <LoginForm />
  </Modal>
);
