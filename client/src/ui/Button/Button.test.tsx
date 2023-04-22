import { fireEvent, screen, render } from '@testing-library/react';
import { vi } from 'vitest';

import { Button } from './Button';

describe('Button', () => {
  it('should render correctly', () => {
    render(<Button state="primary">Test</Button>);
    const buttonElement = screen.getByRole('button');

    expect(buttonElement).toBeInTheDocument();
    expect(buttonElement.getAttribute('class')).toMatch(/primary/gi);
  });

  it('should handle click', () => {
    const handleClick = vi.fn();

    render(
      <Button state="primary" onClick={handleClick}>
        Test
      </Button>,
    );
    const buttonElement = screen.getByRole('button');

    fireEvent.click(buttonElement);
    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  it('should disabled handle click', () => {
    const handleClick = vi.fn();

    render(
      <Button state="primary" onClick={handleClick} disabled>
        Test
      </Button>,
    );
    const buttonElement = screen.getByRole('button');

    expect(buttonElement.getAttribute('class')).toMatch(/disabled/gi);
    fireEvent.click(buttonElement);
    expect(handleClick).toHaveBeenCalledTimes(0);
  });

  it('should match snapshot', () => {
    const handleClick = vi.fn();
    const container = render(
      <Button state="primary" onClick={handleClick}>
        Test
      </Button>,
    );

    expect(container).toMatchSnapshot();
  });
});
