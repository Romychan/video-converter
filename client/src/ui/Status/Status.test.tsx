import { render, screen } from '@testing-library/react';

import { Status } from './Status';

describe('Status', () => {
  it('should render correctly', () => {
    render(
      <Status title="Title" text="Text">
        <p>Element</p>
      </Status>,
    );

    expect(screen.getByText(/Title/i)).toBeInTheDocument();
    expect(screen.getByText(/Text/i)).toBeInTheDocument();
    expect(screen.getByText(/Element/i)).toBeInTheDocument();
  });

  it('should render correctly without text', () => {
    render(
      <Status title="Title">
        <p>Element</p>
      </Status>,
    );

    const statusText = screen.queryByTestId('status-text');
    expect(statusText).not.toBeInTheDocument();
  });

  it('should match snapshot', () => {
    const container = render(
      <Status title="Title" text="Text">
        <p>Element</p>
      </Status>,
    );

    expect(container).toMatchSnapshot();
  });
});
