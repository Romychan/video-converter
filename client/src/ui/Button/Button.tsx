import { ButtonHTMLAttributes, PropsWithChildren } from 'react';
import clsx from 'clsx';

import styles from './Button.module.scss';

interface IButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  state?: 'primary' | 'secondary';
  onClick?: () => void;
}

export const Button = ({
  state = 'primary',
  className = '',
  onClick,
  children,
  disabled,
}: PropsWithChildren<IButtonProps>) => {
  return (
    <button
      className={clsx(styles.button, className, styles[state], {
        [styles.disabled]: disabled,
      })}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
};
