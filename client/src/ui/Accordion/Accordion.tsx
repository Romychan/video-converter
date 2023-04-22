import { ReactNode, useState } from 'react';
import clsx from 'clsx';

import { Icon } from '../Icon/Icon';

import styles from './Accordion.module.scss';

interface IAccordionProps {
  title: string;
  children?: ReactNode;
  className?: string;
}

export const Accordion = ({
  title,
  children,
  className = '',
}: IAccordionProps) => {
  const [clicked, setClicked] = useState(false);

  return (
    <div
      className={clsx(styles.accordion, className, {
        [styles.active]: clicked,
      })}
      data-testid="accordion"
    >
      <div
        className={styles.header}
        onClick={() => setClicked(!clicked)}
        data-testid="accordion-header"
      >
        <div className={styles.square}>
          {clicked ? (
            <Icon name="minus" size={14} className={styles.icon} />
          ) : (
            <Icon name="plus" size={14} className={styles.icon} />
          )}
        </div>
        <h3 className={styles.title}>{title}</h3>
      </div>

      <div
        className={styles.body}
        style={clicked ? { maxHeight: '1200px' } : { maxHeight: '0px' }}
        data-testid="accordion-body"
      >
        <div className={styles.content}>{children}</div>
      </div>
    </div>
  );
};
