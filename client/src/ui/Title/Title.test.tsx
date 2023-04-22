import { screen } from '@testing-library/react';

import { renderWithRouter } from '@tests/helpers/renderWithRouter';
import { Title } from './Title';

describe('Title', () => {
  it('should render correctly', () => {
    renderWithRouter(<Title link="/user" title="Testing" />);

    expect(screen.getByText(/Testing/i)).toBeInTheDocument();
    expect(screen.getByTestId('title-link')).toHaveAttribute('href', '/user');
  });

  it('should match snapshot', () => {
    const container = renderWithRouter(<Title link="/user" title="Testing" />);
    expect(container).toMatchSnapshot();
  });
});
