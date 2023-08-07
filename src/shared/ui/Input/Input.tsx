import { useGetInputWidth } from 'app/hooks/useGetInputWidth';
import React, {
  InputHTMLAttributes, memo, useRef, useState,
} from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import styles from './Input.module.scss';

type HTMLInputProps = Omit<InputHTMLAttributes<HTMLInputElement>, 'value' | 'onChange'>

interface InputProps extends HTMLInputProps {
  classes?: string;
  value?: string;
  onChange?: (value: string) => void;
  type?: string;
  placeholder?: string;
  id?: string;
}

export const Input = memo((props: InputProps) => {
  const {
    classes, type = 'text', value, onChange, placeholder, id = 'input', ...otherProps
  } = props;
  const [isFocused, setIsFocused] = useState(false);
  const [caretPosition, setCaretPosition] = useState(0);
  const ref = useRef<HTMLInputElement>(null);
  const inputWidth = useGetInputWidth({ ref, caretPosition });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onChange?.(e.target.value);
    setCaretPosition(e.target.selectionStart || 0);
  };

  const onFocus = () => {
    setIsFocused(true);
  };

  const onBlur = () => {
    setIsFocused(false);
  };

  const onSelect = (e: React.SyntheticEvent<HTMLInputElement>) => {
    setCaretPosition(e.currentTarget.selectionStart || 0);
  };

  return (
    <div className={classNames(styles.inputWrapper, {}, [classes])}>
      {placeholder && (
        <label className={styles.placeholder} htmlFor={id}>
          {`${placeholder} > `}
        </label>
      )}
      <div className={styles.caretWrapper}>
        <input
          id={id}
          type={type}
          value={value}
          onChange={handleInputChange}
          className={styles.input}
          onFocus={onFocus}
          onBlur={onBlur}
          onSelect={onSelect}
          ref={ref}
          {...otherProps}
        />
        {isFocused && (
          <span
            className={styles.caret}
            style={
              inputWidth < ref.current?.clientWidth
                ? { transform: `translate3d(${inputWidth}px, 0, 0)` }
                : (ref && { transform: `translate3d(${ref.current?.clientWidth}px, 0, 0)` })
            }
          />
        )}
      </div>
    </div>
  );
});
