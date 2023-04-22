import { render, screen, RenderResult } from '@testing-library/react';

import { Loader } from './Loader';

describe('Loader', () => {
  let container: RenderResult;

  beforeEach(() => {
    container = render(<Loader progress={34} />);
  });

  it('should render correctly', () => {
    const loaderProgress = screen.getByTestId('loader-progress');

    expect(screen.getByText(/34%/i)).toBeInTheDocument();
    expect(loaderProgress).toHaveStyle({
      width: '34%',
    });
  });

  it('should match snapshot', () => {
    expect(container).toMatchSnapshot();
  });
});
