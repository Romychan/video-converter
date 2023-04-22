import clsx from 'clsx';
import { Link } from 'react-router-dom';

import { Icon } from '../Icon/Icon';

import styles from './Title.module.scss';

interface ITitleProps {
  link: string;
  title: string;
  className?: string;
}

export const Title = ({ link, title, className = '' }: ITitleProps) => {
  return (
    <div className={clsx(styles.container, className)}>
      <Link className={styles.link} to={link} data-testid="title-link">
        <Icon name="arrow-back" size={21} className={styles.icon} />
        <h1 className={clsx(styles.title, 'title')}>{title}</h1>
      </Link>
    </div>
  );
};
