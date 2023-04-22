import { fireEvent, screen, render } from '@testing-library/react';
import { vi } from 'vitest';

import { Actions } from './Actions';

describe('Actions', () => {
  it('should render correctly', () => {
    const handleChange = vi.fn();

    render(
      <Actions
        isPlaying={true}
        progress={10}
        duration={50}
        togglePlay={handleChange}
      />,
    );

    const durationElement = screen.getByText(/00:00:50/i);
    const progressElement = screen.getByText(/00:00:05/i);
    const playingButtonElement = screen.getByTestId('actions-playing');

    expect(durationElement).toBeInTheDocument();
    expect(progressElement).toBeInTheDocument();
    expect(playingButtonElement.getAttribute('class')).toMatch(/paused/gi);
  });

  it('should togglePlay working', () => {
    const handleChange = vi.fn();

    render(
      <Actions
        isPlaying={true}
        progress={10}
        duration={50}
        togglePlay={handleChange}
      />,
    );
    const buttonElement = screen.getByTestId('actions-button');

    fireEvent.click(buttonElement);
    expect(handleChange).toHaveBeenCalledTimes(1);
  });

  it('should pause working', () => {
    const handleChange = vi.fn();

    render(
      <Actions
        isPlaying={false}
        progress={10}
        duration={50}
        togglePlay={handleChange}
      />,
    );

    const playingButtonElement = screen.getByTestId('actions-playing');

    expect(playingButtonElement.getAttribute('class')).not.toMatch(/paused/gi);
  });

  it('should match snapshot', () => {
    const handleChange = vi.fn();
    const container = render(
      <Actions
        isPlaying={true}
        progress={10}
        duration={50}
        togglePlay={handleChange}
      />,
    );

    expect(container).toMatchSnapshot();
  });
});
