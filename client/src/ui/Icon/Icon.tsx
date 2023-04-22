import clsx from 'clsx';

import IconsSVG from '../../assets/img/general/icons.svg';

export interface IIcon {
  name: string;
  color?: string;
  size?: number;
  className?: string;
}

export const Icon = ({
  name,
  color = '',
  size = 16,
  className = '',
}: IIcon) => (
  <svg
    className={clsx(`icon icon-${name}`, className)}
    stroke={color}
    width={size}
    height={size}
    data-testid="icon"
  >
    <use xlinkHref={`${IconsSVG}#${name}`} />
  </svg>
);
