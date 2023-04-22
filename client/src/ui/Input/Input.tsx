import { ChangeEvent, InputHTMLAttributes } from 'react';
import clsx from 'clsx';

import styles from './Input.module.scss';

interface IInputProps extends InputHTMLAttributes<HTMLInputElement> {
  value?: string;
  onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
  error?: boolean | string;
}

export const Input = ({
  value,
  onChange,
  type = 'text',
  error,
  className = '',
  ...rest
}: IInputProps) => (
  <input
    onChange={onChange}
    value={value}
    type={type}
    className={clsx(styles.input, className, {
      [styles.error]: error,
    })}
    data-testid="input-field"
    {...rest}
  />
);
