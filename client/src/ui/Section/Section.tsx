import { ReactNode } from 'react';
import clsx from 'clsx';

import styles from './Section.module.scss';

interface ISectionProps {
  children: ReactNode;
  className?: string;
}

export const Section = ({ children, className = '' }: ISectionProps) => {
  return (
    <section className={clsx(styles.section, className)}>
      <div className="container">
        <div className={styles.container}>{children}</div>
      </div>
    </section>
  );
};
