import { ReactNode } from 'react';

import styles from './Label.module.scss';

interface ILabelProps {
  label: string;
  children?: ReactNode;
}

export const Label = ({ label, children }: ILabelProps) => {
  return (
    <div className={styles.container}>
      <h3 className={styles.label}>{label}</h3>
      {children}
    </div>
  );
};
