import {
  fireEvent,
  screen,
  render,
  RenderResult,
} from '@testing-library/react';
import { vi } from 'vitest';

import { TimeLine } from './TimeLine';

describe('TimeLine', () => {
  const handleChange = vi.fn();
  let container: RenderResult;

  beforeEach(() => {
    container = render(
      <TimeLine
        progress={20}
        handleVideoProgress={handleChange}
        colorPrimary="#000000"
        colorSecondary="#ffffff"
      />,
    );
  });

  it('should render correctly', () => {
    const timelineElement = screen.getByLabelText('Timeline');

    expect(timelineElement).toHaveValue('20');
    expect(timelineElement).toHaveStyle({
      background: 'linear-gradient(90deg, #000000 20%, #ffffff 20%)',
    });
  });

  it('should handle change', () => {
    const timelineElement = screen.getByLabelText('Timeline');

    fireEvent.change(timelineElement, { target: { value: '30' } });
    expect(handleChange).toHaveBeenCalledTimes(1);
  });

  it('should match snapshot', () => {
    expect(container).toMatchSnapshot();
  });
});
