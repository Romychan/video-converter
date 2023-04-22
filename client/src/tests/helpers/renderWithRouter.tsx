import { ReactElement } from 'react';
import { MemoryRouter } from 'react-router-dom';
import { render } from '@testing-library/react';

export const renderWithRouter = (
  children: ReactElement,
  initialEntries = '/',
) => {
  return {
    ...render(
      <MemoryRouter initialEntries={[initialEntries]}>{children}</MemoryRouter>,
    ),
  };
};
